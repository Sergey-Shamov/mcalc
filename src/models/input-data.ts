export class InputData {
  public currMoney: number = 1000000;      // сейчас в наличии денег
  public canPayM: number = 70000;        // могу платить, в мес

  public mortRateY: number;      // ставка по ипотеке, % в год
  public investRateY: number;    // ставка по вкладу, % в год

  public propInflationY: number = 2;     // удорожание квартиры, % в год
  public rentInflationY: number = 2;     // удорожание аренды, % в год
  public comFeesInflationY: number = 3;  // удорожание коммуналки, % в год
  public payInflationY: number = 0;      // увеличение платежа, % в год

  public flatPrice = 7_000_000 //цена квартиры
}
