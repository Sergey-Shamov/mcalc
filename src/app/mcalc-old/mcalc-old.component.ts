import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mcalc-old',
  templateUrl: './mcalc-old.component.html',
  styleUrls: ['./mcalc-old.component.css']
})
export class McalcOldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  title = 'mortgage-calculator';
  public settings: Settings = new Settings();
  public resultText: string = "";

  public get months(): MonthlyStats[] {
    const result: MonthlyStats[] = [];
    let stat: MonthlyStats = null;

    this.resultText = "";

    do {
      stat = MonthlyStats.Create(stat, this.settings);
      result.push(stat);
    } while ((!stat.IsDone()) && (result.length < 360))

    const resCount = result.length;
    if (resCount > 360)
    {
      this.resultText = "Ипотека займет более 30 лет. Возможна ошибка в исходных данных."
    } else{
        const lastRow = result[resCount - 1];
        const mortRow = result.find(a => a.mortBodyRemain == 0 && a.mortPayBody != 0 && a.mortPayInterest != 0);
        const investRow = result.find(a => a.investAmount >= a.propPrice);

        if (mortRow == undefined || investRow == undefined) this.resultText += "Не удается завершить расчет на основе заданных параметров";
        else{
          this.resultText = "Быстрее "
          if (lastRow.mortPayBody == 0 && lastRow.mortPayInterest == 0) this.resultText += "выплатить ипотеку"; 
          else this.resultText += "накопить";
          this.resultText += ", ";
          if (Math.abs(mortRow.mortOverpay - investRow.rentPaid) <= (Math.min(mortRow.mortOverpay, investRow.rentPaid) * 0.05)) this.resultText += "расходы примерно равны\n";
          else if (mortRow.mortOverpay > investRow.rentPaid) this.resultText += "выгоднее накопить.";
            else this.resultText += "выгоднее взять ипотеку.";
          this.resultText += "\n\n";

          this.resultText += "Вы выплатите ипотеку за " + this.monthsToString(mortRow.monthNumber) + "  и переплатите " + mortRow.mortOverpay.toLocaleString(undefined, {maximumFractionDigits: 0}) + "₽\n";
          this.resultText += "Вы накопите на квартиру за " + this.monthsToString(investRow.monthNumber) + "  и переплатите " + investRow.rentPaid.toLocaleString(undefined, {maximumFractionDigits: 0}) + "₽\n";
          this.resultText += (mortRow.mortOverpay > investRow.rentPaid ? "Копить" : "Ипотека") + " дешевле на " + (Math.abs(mortRow.mortOverpay - investRow.rentPaid)).toLocaleString(undefined, {maximumFractionDigits: 0}) + "₽";

        }
    }

    return result;
  };


  // Расчет величины аннуитетного платежа. Сумма, годовая ставка, срок в месяцах.
  private calcAnnPayment(body: number, rateY: number, termM: number): number {
    const rateM = rateY / 12;
    const precalc = Math.pow(1 + rateM, termM)
    return body * (rateM * precalc) / (precalc - 1);
  }

  private monthsToString(months: number){
    let result: string = "";
    const years = Math.floor(months / 12);
    if (years > 0) result += years + " лет";
    const monthsLeft = months - (years * 12);
    if (monthsLeft > 0) result += " " + monthsLeft + " месяцев";
    return result;
  }

  private calcTerm(body: number, rate: number, payment: number) {
    const a = payment;
    const b = body * rate + payment
    const c = Math.log(a / b) / Math.log(1 + rate);

    return c;
  }

}export class MonthlyStats {
  public monthNumber: number;        // номер месяца
  public mortPayBody: number;        // платеж в тело кредита
  public mortPayInterest: number;    // платеж в счет процентов

  public mortPrepayPayment: number;  // переплата в уменьшение платежа
  public mortPrepayTerm: number;     // переплата в уменьшение срока

  public mortBodyRemain: number;     // остаток тела кредита
  public mortPaidBody: number;       // выплачено из тела кредита
  public mortPaidInterest: number;   // выплачено процентов
  public comFees: number;            // коммуналка
  public propTax: number;            // налоги
  public rentPay: number;            // аренда за месяц
  public rentPaid: number;           // выплачено в счет аренды
  public investAmount: number;       // сумма на вкладе
  public investInterest: number;     // получено процентами по вкладу
  public propPrice: number;          // цена квартиры
  public canPay: number;             // максимальная сумма трат

  public mortOverpay: number;        // общая переплата при аренде (проценты + налоги + коммуналка)

  public static Create(prev: MonthlyStats, settings: Settings) {
    const result = new MonthlyStats();
    result.Calculate(prev, settings);
    return result;
  }

  public Calculate(prev: MonthlyStats, settings: Settings) {
    if (prev == null) {
      this.Initialize(settings);
    }
    else {
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
      this.rentPay = prev.propPrice < prev.investAmount ? 0 : prev.rentPay * (1 + settings.rentInflationM);
      this.rentPaid = prev.rentPaid + this.rentPay;

      if (prev.propPrice < prev.investAmount && prev.rentPay != 0) {
        this.investInterest = (prev.investAmount - prev.propPrice) * settings.investRateM;
        this.investAmount = prev.investAmount - prev.propPrice + this.investInterest + (this.canPay - this.rentPay - this.propTax - this.comFees);
      }
      else {
        this.investInterest = prev.investAmount * settings.investRateM;
        this.investAmount = prev.investAmount + this.investInterest + (this.canPay - this.rentPay) + (prev.rentPay == 0 ? - this.propTax - this.comFees : 0);
      }
    }
  }

  private Initialize(settings: Settings) {
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

  public IsDone(): boolean {
    return this.mortBodyRemain <= 0 && this.investAmount >= this.propPrice;
  }
}

export class Settings {

  public propPrice: number = 7000000;      // цена квартиры
  public currMoney: number = 1000000;      // сейчас в наличии денег
  public canPayM: number = 70000;        // могу платить, в мес
  public mortRateY: number = 10;      // ставка по ипотеке, % в год
  public investRateY: number = 6;    // ставка по вкладу, % в год
  public rentM: number = 35000;          // цена аренды, в мес

  public propInflationY: number = 2;     // удорожание квартиры, % в год
  public rentInflationY: number = 2;     // удорожание аренды, % в год
  public comFeesInflationY: number = 3;  // удорожание коммуналки, % в год
  public payInflationY: number = 0;      // увеличение платежа, % в год

  public comFeesM: number = 2500;   // коммунальные платежи без счетчиков (фикс), в мес
  public propTaxY: number = 40000;   // налог, страховка, прочие платежи владения квартирой, в год

  // Расчетные ежемесячные величины
  public get propInflationM(): number { return this.calcYtoM(this.propInflationY); }
  public get rentInflationM(): number { return this.calcYtoM(this.rentInflationY); }
  public get payInflationM(): number { return this.calcYtoM(this.payInflationY); }
  public get comFeesInflationM(): number { return this.calcYtoM(this.comFeesInflationY); }
  public get investRateM(): number { return this.calcYtoM(this.investRateY); }
  public get mortRateM(): number { return this.calcYtoM(this.mortRateY); }
  public get propTaxM(): number { return this.propTaxY / 12; }

  // Расчетные подсказки
  public get propPriceIn10Years(): number { return this.inflatePrice(this.propPrice, this.propInflationM, 120); }
  public get rentIn10Years(): number { return this.inflatePrice(this.rentM, this.rentInflationM, 120); }
  public get investmentIn10Years(): number { return this.inflatePrice(this.currMoney, this.investRateM, 120); }
  public get canPayIn10Years(): number { return this.inflatePrice(this.canPayM, this.payInflationY / 100, 10); }
  public get comFeesIn10Years(): number { return this.inflatePrice(this.comFeesM, this.comFeesInflationM, 120); }

  // Рассчитать увеличение суммы по начальной сумме, ставке за 1 период и числу периодов
  private inflatePrice(price: number, rate: number, length: number) {
    return price * Math.pow(1 + rate, length);
  }

  private calcYtoM(y: number) {
    return y / 12 / 100;    // TODO: помесячное увеличение даст больший итог чем погодовое, так что ставки не равны
  }
}
