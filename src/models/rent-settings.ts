import { CommonHelper } from 'src/helpers/сommon-helper';

export class RentSettings {
  public rentMonthCost:  { [month:number] : number} //Стоимость месячной аренды
  public rentYearRate: number //Месячная ставка удорожания аренды
  public investRateY: number //Ставка по влкаду в год

  public get investRateM() { return CommonHelper.yearRateToMonthlyFrac(this.investRateY); }
  public get rentMonthRate() { return CommonHelper.yearRateToMonthlyFrac(this.rentMonthRate); }

}
