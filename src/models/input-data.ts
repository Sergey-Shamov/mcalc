import { CommonHelper } from './../helpers/сommon-helper';
export class InputData {
  public currMoney: number = 1000000;      // сейчас в наличии денег
  public canPayM: { [month: number]: number } = { 0: 70000 };        // могу платить, в мес

  public mortRateY: number = 3;      // ставка по ипотеке, % в год
  public investRateY: number = 3;    // ставка по вкладу, % в год

  public propInflationY: number = 2;     // удорожание квартиры, % в год
  public rentInflationY: number = 2;     // удорожание аренды, % в год
  public comFeesInflationY: number = 3;  // удорожание коммуналки, % в год
  public payInflationY: number = 0;      // увеличение платежа, % в год

  public flatPrice = 7_000_000 //цена квартиры

  public get propPriceIn10Years(): number { return CommonHelper.inflateYearly(this.flatPrice, this.propInflationY / 100, 120); }
  public get canPayIn10Years(): number { return CommonHelper.inflateYearly(this.canPayM[0], this.payInflationY / 100, 120); }
}
