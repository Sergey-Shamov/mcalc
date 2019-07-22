export class CommonHelper{

    // Рассчитать увеличение суммы по начальной сумме, ставке за 1 период (дробь) и числу периодов
    public static inflatePrice(price : number, rateFrac : number, length : number){
        return price * Math.pow(1 + rateFrac, length);
    }

    // перевод годовой ставки в месячную дробь
    public static yearRateToMonthlyFrac(rate : number){
        return rate / 12 / 100;
    }

    // перевод эффективной годовой ставки в номинальную месячную
    public static yearEffRateToMonthlyFrac(effRate: number){
        return Math.pow(1 + (effRate/100) , 1/12) - 1;
    }

    // Расчет значения в заданном месяце при увеличении раз в год на заданную ставку.
    public static inflateYearly(amount: number, rate: number, months: number){
        return amount * Math.pow(1 + (rate / 100), Math.floor(months / 12));
      }
}