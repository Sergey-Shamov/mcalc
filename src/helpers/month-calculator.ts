import { VariableSettingsCalculator } from './variable-settings-calculator';
import { CommonHelper } from './сommon-helper';
import { MinLengthValidator } from '@angular/forms';
export class MonthCalculator {
  constructor(private readonly monthNo: number) {

  }

  // Рассчитать увеличение суммы по начальной сумме, ставке за 1 период (дробь) и числу периодов
  public inflatePrice(price: number, rateFrac: number) {
    return CommonHelper.inflatePrice(price, rateFrac, this.monthNo);
  }

  //Вытаскивает текущую месячную цену из словаря
  public currentValue(dictionary: { [month: number]: number }): number;
  public currentValue(dictionary: { [month: number]: number }, month:number): number;
  public currentValue(dictionary: { [month: number]: number }, month?: number): number {
    return VariableSettingsCalculator.currentValue(dictionary, month ? month : this.monthNo);
  }
}
