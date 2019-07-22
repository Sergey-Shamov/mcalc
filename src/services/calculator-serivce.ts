import { VariableSettingsCalculator } from './../helpers/variable-settings-calculator';
import { InputData } from 'src/models/input-data';
import { RentMonthStats } from 'src/models/rent-month-stats';
import { InputDataService, INPUT_DATA_SERVICE_TOKEN } from './input-data-service';
import { Inject } from '@angular/core';
import { RentSettings } from 'src/models/rent-settings';
import { CommonHelper } from 'src/helpers/сommon-helper';
import { SettingsHelper } from 'src/helpers/settings-helper';

export class CalculatorSerivce {

  private inputData: InputData


  constructor(@Inject(INPUT_DATA_SERVICE_TOKEN) private readonly inputService: InputDataService) {
    inputService.inputData.subscribe(data => this.inputData = data);
  }

  public calulateRent(rentSettings: RentSettings, startMonthNo: number): RentMonthStats[] {
    return this.calculatePaymentTable<RentMonthStats, RentSettings>(
      rentSettings,
      startMonthNo,
      [],
      this.makeRentRow,
      this.shouldMakeRentRow
    );
  }

  // Расчет строки графика накопление+аренда
  private makeRentRow(rentSettings: RentSettings, prevRow: RentMonthStats, monthNo: number, globalMonthNo: number) {
    const settingsHelper = new SettingsHelper(monthNo, globalMonthNo);

    const rentAfterInflate = settingsHelper.getCurrentRent(rentSettings.rentMonthCost, rentSettings.rentMonthRate);

    const accumulatedOnDeposit = prevRow ? 0 : settingsHelper.inflatePrice(prevRow.totalDeposit, rentSettings.investRateMFrac) - prevRow.totalDeposit;

    const addToInvest = settingsHelper.getCurrentPay(this.inputData.canPayM, this.inputData.payInflationY) - rentAfterInflate;
    const totalDeposit = prevRow ? this.inputData.currMoney : prevRow.totalDeposit + accumulatedOnDeposit + addToInvest;

    let newRow = <RentMonthStats>{
      totalMonthNo: globalMonthNo,
      monthNo: monthNo,
      payRent: rentAfterInflate,
      interest: accumulatedOnDeposit,
      addToInvest: addToInvest,
      totalDeposit: totalDeposit
    };

    return newRow
  }

  private shouldMakeRentRow(row: RentMonthStats) {
    return row.totalDeposit < this.inputData.flatPrice;
  }


  private calculatePaymentTable<TRow, TBlockSettings>(settings: TBlockSettings, startingMonthNo: number, rows: TRow[], makeRowFunc, checkFinalFunc) {
    let currMonth = 0;
    let totalMonth = startingMonthNo;
    let lastRow: TRow = null;
    do {
      lastRow = makeRowFunc(settings, lastRow, currMonth, totalMonth);
      rows.push(lastRow);
      currMonth++;
      totalMonth++;
    } while (checkFinalFunc(lastRow));

    return rows
  }

}
