import { Component } from '@angular/core';
import { Settings, MonthlyStats } from './monthly-stats';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
    } while (!stat.IsDone() || result.length > 360)
    const lastRow = result.pop();

    if (result.length > 360)
    {
      this.resultText = "Ипотека займет более 30 лет. Возможна ошибка в исходных данных."
    } else{
        const mortRow = result.find(a => a.mortBodyRemain == 0 && lastRow.mortPayBody != 0 && lastRow.mortPayInterest != 0);
        const investRow = result.find(a => a.investAmount > a.propPrice);

        if (mortRow == undefined || investRow == undefined) this.resultText += "Не удается завершить расчет на основе заданных параметров";
        else{
        if (lastRow.mortPayBody == 0 && lastRow.mortPayInterest == 0) this.resultText = "Ипотека быстрее. /n"; 
        else this.resultText = "Накопить быстрее. /n";

        this.resultText += "Ипотека займет " + mortRow.monthNumber + " месяцев./n";
        this.resultText += "Накопление займет " + investRow.monthNumber + " месяцев./n";

        if (Math.abs(mortRow.mortOverpay - investRow.rentPaid) > (Math.min(mortRow.mortOverpay, investRow.rentPaid) * 0.05)) this.resultText += "Расходы примерно равны/n";
        else if (mortRow.mortOverpay > investRow.rentPaid) this.resultText += "Копить выгоднее/n";
          else this.resultText += "Ипотека выгоднее/n";
        
        this.resultText += "Разница составляет " + Math.abs(mortRow.mortOverpay - investRow.rentPaid) + " руб.";
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

  private calcTerm(body: number, rate: number, payment: number) {
    const a = payment;
    const b = body * rate + payment
    const c = Math.log(a / b) / Math.log(1 + rate);

    return c;
  }
}