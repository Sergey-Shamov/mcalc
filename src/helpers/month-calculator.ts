import { VariableSettingsCalculator } from './variable-settings-calculator';
import { CommonHelper } from './сommon-helper';
import { MinLengthValidator } from '@angular/forms';
export class SettingsHelper {
  constructor(private readonly localMonth: number, private readonly globalMonth: number) {

  }

  // Рассчитать увеличение суммы по начальной сумме, ставке за 1 период (дробь) и числу периодов
  public inflatePrice(price: number, rateFrac: number) {
    return CommonHelper.inflatePrice(price, rateFrac, this.localMonth);
  }

  public getCurrentPay(pay: {[month: number]: number}): number { return this.getByGlobalMonth(pay); }

  public getCurrentRent(rent: {[month: number]: number}): number { return this.getByLocalMonth(rent); }

  public getByLocalMonth(dictionary: {[month: number]: number}): number { return this.currentValue(dictionary, this.localMonth);}

  public getByGlobalMonth(dictionary: {[month: number]: number}): number { return this.currentValue(dictionary, this.globalMonth);}

  //Вытаскивает текущую месячную цену из словаря
  private currentValue(dictionary: { [month: number]: number }, month:number): number {
    return VariableSettingsCalculator.currentValue(dictionary, month ? month : this.localMonth);
  }
}
