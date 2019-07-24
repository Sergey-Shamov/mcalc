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

    // Получить сумму процентов за месяц по годовой ставке
    public static getMonthInterest(amount: number, rate: number){
        return amount * this.yearRateToMonthlyFrac(rate);
    }

    public static monthsToString(months: number): string{
        const years = Math.floor(months / 12);
        const singles = years - 10 * Math.floor(years / 10);
        let result: string = "";
        if (years > 0){
            const yearString = (years > 10 && years < 20)
                ? "лет"
                : singles == 1
                    ? "год"
                    : (singles > 1 && singles < 5)
                        ? "года"
                        : "лет"
            result += years + " " + yearString;
        }
        const singleMonths = months - 12 * years;
        if (singleMonths > 0){
            if (years > 0){ result += " "; }
            result += singleMonths + " " 
                + (singleMonths == 1
                    ? "месяц"
                    : singleMonths < 5
                        ? "месяца"
                        : "месяцев");
        }
        return result;
    }
}