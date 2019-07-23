import { CommonHelper } from 'src/helpers/сommon-helper';

export class RentSettings {
  public rentMonthCost:  { [month:number] : number} = {[0]:30_000} // Стоимость месячной аренды
  public rentYearRate: number = 2 // Годовая ставка удорожания аренды
  public investRateY: number = 6 // Ставка по влкаду в год

  public get investRateMFrac() { return CommonHelper.yearRateToMonthlyFrac(this.investRateY); }
  public get rentMonthRate() { return CommonHelper.yearRateToMonthlyFrac(this.rentYearRate); }

  public get rentIn10Years() { return CommonHelper.inflateYearly(this.rentMonthCost[0], this.rentYearRate, 120); }
}
