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
}