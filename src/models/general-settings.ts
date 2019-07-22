import { CommonHelper } from 'src/helpers/сommon-helper';

export class GeneralSettings{
    getRent(rentM: number, monthNo: number): number {
      throw new Error("Method not implemented.");
    }
    public currMoney : number = 1000000;      // сейчас в наличии денег
    public canPayM : number = 70000;        // могу платить, в мес

    public mortRateY : number;      // ставка по ипотеке, % в год
    public investRateY : number;    // ставка по вкладу, % в год

    public propInflationY : number = 2;     // удорожание квартиры, % в год
    public rentInflationY : number = 2;     // удорожание аренды, % в год
    public comFeesInflationY : number = 3;  // удорожание коммуналки, % в год
    public payInflationY : number = 0;      // увеличение платежа, % в год


    public get investRateMFrac() : number {return CommonHelper.yearRateToMonthlyFrac(this.investRateY);}
    public get propInflationMFrac() : number {return CommonHelper.yearEffRateToMonthlyFrac(this.propInflationY);}
    public get mortRateMFrac() : number {return CommonHelper.yearRateToMonthlyFrac(this.mortRateY);}
    
    // Подсказки
    public readonly propPriceExample : number = 7000000;
    public readonly rentExample : number = 35000;
    public readonly comFeesExample : number = 3000;
    public get propPriceIn10Years() : number {return CommonHelper.inflatePrice(this.propPriceExample, this.propInflationY / 100, 12);}
    public get rentIn10Years() : number {return CommonHelper.inflatePrice(this.rentExample, this.rentInflationY / 100, 12);}
    public get investmentIn10Years() : number {return CommonHelper.inflatePrice(this.currMoney, this.investRateMFrac, 120);}
    public get canPayIn10Years() : number {return this.getPay(120);}
    public get comFeesIn10Years() : number {return this.getComFees(this.comFeesExample, 120);}

    getPay(monthNo: number): number {
      //TODO: возможность менять платеж на графике
      return CommonHelper.inflateYearly(this.canPayM, this.payInflationY, monthNo);
    }

    getComFees(comFees: number, monthNo: number): number {
      return CommonHelper.inflateYearly(comFees, this.comFeesInflationY, monthNo);
    }
  }