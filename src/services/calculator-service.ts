import { VariableSettingsCalculator } from '../helpers/variable-settings-calculator';
import { InputData } from 'src/models/input-data';
import { RentMonthStats } from 'src/models/rent-month-stats';
import { InputDataService, INPUT_DATA_SERVICE_TOKEN } from './input-data-service';
import { Inject, InjectionToken } from '@angular/core';
import { RentSettings } from 'src/models/rent-settings';
import { CommonHelper } from 'src/helpers/сommon-helper';
import { SettingsHelper } from 'src/helpers/settings-helper';

export const CALCULATOR_SERVICE_TOKEN = new InjectionToken('calculator_service');

export class CalculatorService {

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
  private makeRentRow(rentSettings: RentSettings, inputData:InputData, prevRow: RentMonthStats, monthNo: number, globalMonthNo: number) {
    const settingsHelper = new SettingsHelper(monthNo, globalMonthNo);
    const rentAfterInflate = settingsHelper.getCurrentRent(rentSettings.rentMonthCost, rentSettings.rentMonthRate);
    
    const accumulatedOnDeposit = prevRow ? settingsHelper.inflatePrice(prevRow.totalDeposit, rentSettings.investRateMFrac) - prevRow.totalDeposit : 0;

    const addToInvest = settingsHelper.getCurrentPay(inputData.canPayM, inputData.payInflationY) - rentAfterInflate;
    const totalDeposit = prevRow ?  prevRow.totalDeposit + accumulatedOnDeposit + addToInvest : inputData.currMoney;

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

  private shouldMakeRentRow(row: RentMonthStats, inputData:InputData) {
    
    return row ? row.totalDeposit < inputData.flatPrice : true;
  }


  private calculatePaymentTable<TRow, TBlockSettings>(settings: TBlockSettings, startingMonthNo: number, rows: TRow[], makeRowFunc, checkFinalFunc) {
    let currMonth = 0;
    let totalMonth = startingMonthNo;
    let lastRow: TRow = null;
    do {
      lastRow = makeRowFunc(settings, this.inputData, lastRow, currMonth, totalMonth);
      rows.push(lastRow);
      currMonth++;
      totalMonth++;
    } while (checkFinalFunc(lastRow, this.inputData));

    return rows
  }

}
