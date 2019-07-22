import { MortSettings } from 'src/models/mort-settings';
import { MortMonthStats } from 'src/models/mort-month-stats';
import { GeneralSettings } from 'src/models/general-settings';
import { LotterySettings } from 'src/models/lottery-settings';

export class MonthlyStats {
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

export interface ICalculator {
  startingMonthNo: number;
  resultLength: number;
  calculate();
}

export class CalculatorService {
  public static CalculatePaymentTable<T>(startingMonthNo: number, rows: T[], makeRowFunc, checkFinalFunc) {
    let currMonth = 0;
    let totalMonth = startingMonthNo;
    let lastRow: T = undefined;
    do {
      lastRow = makeRowFunc(lastRow, currMonth, totalMonth);
      rows.push(lastRow);
      currMonth++;
      totalMonth++;
    } while (checkFinalFunc(lastRow));
  }
}

// расчет ипотеки
export class MortCalculator implements ICalculator {
  public settings: MortSettings;
  public generalSettings: GeneralSettings;
  public rows: MortMonthStats[];

  public startingMonthNo: number;

  public resultLength: number;


  public calculate() {
    CalculatorService.CalculatePaymentTable<MortMonthStats>(this.startingMonthNo, this.rows, this.makeRow, this.checkFinal);

    this.resultLength = this.rows.length + 1;
  }

  private makeRow(prevRow: MortMonthStats, monthNo: number, totalMonthNo: number): MortMonthStats {
    let newRow = <MortMonthStats>{};
    let prevDebt = prevRow == undefined ? this.settings.propPrice - this.generalSettings.currMoney : prevRow.debt;  //TOOD: пробросить правильный первый взнос
    newRow.interest = prevDebt * this.generalSettings.mortRateMFrac;

    newRow.payComFees = this.generalSettings.getComFees(this.settings.comFeesM, monthNo);
    newRow.payTax = this.settings.propTaxY / 12;

    newRow.debt = Math.max(0, prevDebt - this.generalSettings.getPay(totalMonthNo) - newRow.payComFees - newRow.payTax - newRow.interest);   // TODO: платежа может не хватить

    return newRow;
  }

  private checkFinal(row: MortMonthStats): boolean {
    return row.debt > 0;
  }
}

// расчет аренды + накопления
/*export class RentCalculator implements ICalculator {
  public generalSettings: GeneralSettings;
  public rows: RentMonthStats[];

  public rentM: number;          // цена аренды, в мес
  public propPrice: number;      // цена квартиры

  public startingMonthNo: number;

  public resultLength: number;

  public calculate() {
    CalculatorService.CalculatePaymentTable<RentMonthStats>(this.startingMonthNo, this.rows, this.makeRow, this.checkFinal);

    this.resultLength = this.rows.length + 1;
  }

  private makeRow(prevRow: RentMonthStats, monthNo: number, totalMonthNo: number) {
    let newRow = new RentMonthStats();
    newRow.totalMonthNo = totalMonthNo;
    newRow.monthNo = monthNo;
    newRow.payRent = this.generalSettings.getRent(this.rentM, monthNo);
    newRow.interest = prevRow == undefined ? 0 : CommonHelper.inflatePrice(prevRow.totalDeposit, this.generalSettings.investRateMFrac, monthNo);
    newRow.addToInvest = this.generalSettings.getPay(totalMonthNo) - newRow.payRent;
    newRow.totalDeposit = prevRow == undefined
      ? this.generalSettings.currMoney              // TODO: пробросить сюда "оставшиеся" деньги, для цепи расчетов
      : newRow.totalDeposit + newRow.addToInvest;
  }

  private checkFinal(row: RentMonthStats): boolean {
    return row.totalDeposit > CommonHelper.inflatePrice(this.propPrice, this.generalSettings.propInflationMFrac, row.monthNo);
  }
}*/

// расчет покупки строящейся недвижимости в ипотеку
export class LotteryCalculator implements ICalculator {
  public generalSettings: GeneralSettings;
  public settings: LotterySettings;

  public startingMonthNo: number;

  public resultLength: number;

  public calculate() {

  }
}
