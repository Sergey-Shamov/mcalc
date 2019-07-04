  export class MonthlyStats{
    public monthNumber : number;        // номер месяца
    public mortPayBody : number;        // платеж в тело кредита
    public mortPayInterest : number;    // платеж в счет процентов

    public mortPrepayPayment : number;  // переплата в уменьшение платежа
    public mortPrepayTerm : number;     // переплата в уменьшение срока

    public mortBodyRemain : number;     // остаток тела кредита
    public mortPaidBody : number;       // выплачено из тела кредита
    public mortPaidInterest : number;   // выплачено процентов
    public comFees : number;            // коммуналка
    public propTax : number;            // налоги
    public rentPay : number;            // аренда за месяц
    public rentPaid : number;           // выплачено в счет аренды
    public investAmount : number;       // сумма на вкладе
    public investInterest : number;     // получено процентами по вкладу
    public propPrice : number;          // цена квартиры
    public canPay : number;             // максимальная сумма трат

    public mortOverpay : number;        // общая переплата при аренде (проценты + налоги + коммуналка)

    public static Create(prev : MonthlyStats, settings : Settings){
        const result = new MonthlyStats();
        result.Calculate(prev, settings);
        return result;
    }

    public Calculate(prev : MonthlyStats, settings : Settings)
    {
        if (prev == null){
            this.Initialize(settings);
        }
        else{
            this.monthNumber = prev.monthNumber + 1;
            
            // Индексация
            this.canPay = prev.canPay * (1 + settings.payInflationM);
            this.propPrice = prev.propPrice * (1 + settings.propInflationM);

            this.comFees = prev.comFees * (1 + settings.comFeesInflationM);
            this.propTax = settings.propTaxM;

            // Расчет ипотеки
            this.mortPayInterest = prev.mortBodyRemain * settings.mortRateM;
            this.mortPayBody = Math.min(this.canPay - this.mortPayInterest - this.comFees - this.propTax, prev.mortBodyRemain);

            this.mortBodyRemain = prev.mortBodyRemain - this.mortPayBody;
            this.mortPaidBody = prev.mortPaidBody + this.mortPayBody;
            this.mortPaidInterest = prev.mortPaidInterest + this.mortPayInterest;

            this.mortOverpay = prev.mortOverpay + this.mortPayInterest + this.comFees + this.propTax;

            // Расчет аренды
            this.rentPay = prev.rentPay * (1 + settings.rentInflationM);
            this.rentPaid = prev.rentPaid + this.rentPay;

            this.investInterest = prev.investAmount * settings.investRateM;
            this.investAmount = prev.investAmount + this.investInterest + (this.canPay - this.rentPay);
        }
    }

    private Initialize(settings : Settings){
        this.monthNumber = 1;

        this.canPay = settings.canPayM;
        this.mortPayInterest = (settings.propPrice - settings.currMoney) * settings.mortRateM;
        console.log(settings.propPrice - settings.currMoney); 
        this.comFees = settings.comFeesM;
        this.propTax = settings.propTaxM;
        this.mortPayBody = settings.canPayM - this.mortPayInterest - this.comFees - this.propTax;
        this.mortBodyRemain = settings.propPrice - this.mortPayBody - settings.currMoney;
        this.mortPaidBody = this.mortPayBody;
        this.mortPaidInterest = this.mortPayInterest;
        this.rentPay = settings.rentM;
        this.rentPaid = this.rentPay;

        this.investInterest = settings.currMoney * settings.investRateM;
        this.investAmount = settings.currMoney + this.investInterest + (this.canPay - this.rentPay);
        this.propPrice = settings.propPrice;

        this.mortOverpay = this.mortPayInterest + this.comFees + this.propTax;
    }

    public IsDone() : boolean {
        return this.mortBodyRemain <= 0 && this.investAmount >= this.propPrice;
    }
  }

  export class Settings{
      
    public propPrice : number = 7000000;      // цена квартиры
    public currMoney : number = 1000000;      // сейчас в наличии денег
    public canPayM : number = 70000;        // могу платить, в мес
    public mortRateY : number = 10;      // ставка по ипотеке, % в год
    public investRateY : number = 6;    // ставка по вкладу, % в год
    public rentM : number = 35000;          // цена аренды, в мес

    public propInflationY : number = 2;     // удорожание квартиры, % в год
    public rentInflationY : number = 2;     // удорожание аренды, % в год
    public comFeesInflationY : number = 3;  // удорожание коммуналки, % в год
    public payInflationY : number = 0;      // увеличение платежа, % в год

    public comFeesM : number = 2500;   // коммунальные платежи без счетчиков (фикс), в мес
    public propTaxY : number = 40000;   // налог, страховка, прочие платежи владения квартирой, в год

    public get propInflationM() : number {return this.calcYtoM(this.propInflationY);}
    public get rentInflationM() : number {return this.calcYtoM(this.rentInflationY);}
    public get payInflationM() : number {return this.calcYtoM(this.payInflationY);}
    public get comFeesInflationM() : number {return this.calcYtoM(this.comFeesInflationY);}
    public get investRateM() : number {return this.calcYtoM(this.investRateY);}
    public get mortRateM() : number {return this.calcYtoM(this.mortRateY);}
    public get propTaxM() : number {return this.propTaxY / 12;}
    
    private calcYtoM(y : number){
        return y / 12 / 100;
    }
  }