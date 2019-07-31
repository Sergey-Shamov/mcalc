import { VariableSettingsCalculator } from '../helpers/variable-settings-calculator';
import { InputData } from 'src/models/input-data';
import { RentMonthStats } from 'src/models/rent-month-stats';
import { InputDataService, INPUT_DATA_SERVICE_TOKEN } from './input-data-service';
import { Inject, InjectionToken } from '@angular/core';
import { RentSettings } from 'src/models/rent-settings';
import { CommonHelper } from 'src/helpers/сommon-helper';
import { SettingsHelper } from 'src/helpers/settings-helper';
import { MortMonthStats } from 'src/models/mort-month-stats';
import { MortSettings } from 'src/models/mort-settings';
import { Subject } from 'rxjs';

export const CALCULATOR_SERVICE_TOKEN = new InjectionToken('calculator_service');

export class CalculatorService {

  private inputData: InputData


  constructor(@Inject(INPUT_DATA_SERVICE_TOKEN) private readonly inputService: InputDataService) {
    inputService.inputData.subscribe(data => this.inputData = data);
  }

  //#region Rent

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
    const rentAfterInflate = settingsHelper.getCurrentRent(rentSettings.rentMonthCost, rentSettings.rentYearRate);
    
    const prevDeposit = prevRow ? prevRow.totalDeposit : inputData.currMoney;
    const interest = CommonHelper.getMonthInterest(prevDeposit, rentSettings.investRateY);

    const addToInvest = settingsHelper.getCurrentPay(inputData.canPayM, inputData.payInflationY) - rentAfterInflate;
    const totalDeposit = prevDeposit + interest + addToInvest;

    let newRow = <RentMonthStats>{
      totalMonthNo: globalMonthNo,
      monthNo: monthNo,
      payRent: rentAfterInflate,
      interest: interest,
      addToInvest: addToInvest,
      totalDeposit: totalDeposit
    };
    return newRow
  }

  private shouldMakeRentRow(row: RentMonthStats, inputData:InputData) {
    CommonHelper.inflateYearly(inputData.flatPrice, inputData.propInflationY, row.totalMonthNo);
    return row ? row.totalDeposit < inputData.flatPrice : true;
  }

  //#endregion Rent

  //#region Mortgage

  public calculateMort(mortSettings: MortSettings, startMonthNo: number): MortMonthStats[] {
    return this.calculatePaymentTable<MortMonthStats, MortSettings>(
      mortSettings,
      startMonthNo,
      [],
      this.makeMortRow,
      this.shouldMakeMortRow
    );
  }

    private makeMortRow(mortSettings: MortSettings, inputData:InputData, prevRow: MortMonthStats, monthNo: number, globalMonthNo: number): MortMonthStats {
      const settingsHelper = new SettingsHelper(monthNo, globalMonthNo);

      const prevDebt = prevRow ? prevRow.debt : inputData.flatPrice - inputData.currMoney;

      const interest = CommonHelper.getMonthInterest(prevDebt, mortSettings.mortRate);
      const comFees = CommonHelper.inflateYearly(mortSettings.comFeesM, mortSettings.comRateY, monthNo);
      const tax = mortSettings.propTaxY / 12;
      const payDebt = Math.min(prevDebt, settingsHelper.getCurrentPay(inputData.canPayM, inputData.payInflationY) - interest - comFees - tax);
      const newDebt = prevDebt - payDebt;

      let newRow = <MortMonthStats>{
        monthNo: monthNo,
        interest: interest,
        payComFees: comFees,
        payTax: tax,
        payDebt: payDebt,
        debt: newDebt
      };
      return newRow;
    }
    
    private shouldMakeMortRow(row: MortMonthStats, inputData:InputData) {
      return row ? row.debt > 0 : true;
    }

  //#endregion Mortgage

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


  // TOOD: переместить в правильное расположение
  public paymentTableData: Subject<IPaymentTableSource> = new Subject<IPaymentTableSource>();
  public setPaymentTableSource(data, columnDefinitions: IColumnDefinition[]){
    this.paymentTableData.next(<IPaymentTableSource> {dataSource: data, columnDefinitions: columnDefinitions});
  }

}

//TODO: переместить в правильное расположение
export interface IPaymentTableSource{
  dataSource;
  columnDefinitions: [{colDef:string, colHead: string}];
}

export interface IColumnDefinition{
  colDef: string;
  colHead: string;
}
