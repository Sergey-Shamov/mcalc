import { VariableSettingsCalculator } from './variable-settings-calculator';
import { CommonHelper } from './сommon-helper';
export class SettingsHelper {
  constructor(private readonly localMonth: number, private readonly globalMonth: number) {

  }

  // Рассчитать увеличение суммы по начальной сумме, ставке за 1 период (дробь) и числу периодов
  public inflatePrice(price: number, rateFrac: number) {
    return CommonHelper.inflatePrice(price, rateFrac, this.localMonth);
  }

  public getCurrentPay(pay: {[month: number]: number}, inflationRate: number): number { 
    let value = this.getByGlobalMonth(pay);
    return CommonHelper.inflateYearly(value.result, inflationRate, this.globalMonth - value.month);
  }

  public getCurrentRent(rent: {[month: number]: number}, inflationRate: number): number { 
    let value = this.getByLocalMonth(rent);
    return CommonHelper.inflateYearly(value.result, inflationRate, this.localMonth - value.month);
  }

  private getByLocalMonth(dictionary: {[month: number]: number}): {result: number, month: number} { return this.currentValue(dictionary, this.localMonth);}

  private getByGlobalMonth(dictionary: {[month: number]: number}): {result: number, month: number} { return this.currentValue(dictionary, this.globalMonth);}

  //Вытаскивает текущую месячную цену из словаря
  private currentValue(dictionary: { [month: number]: number }, month:number): {result: number, month: number} {
    return VariableSettingsCalculator.currentValue(dictionary, month ? month : this.localMonth);
  }
}
