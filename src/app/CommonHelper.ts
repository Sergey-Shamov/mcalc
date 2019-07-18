export class CommonHelper{

    // Рассчитать увеличение суммы по начальной сумме, ставке за 1 период и числу периодов
    public static inflatePrice(price : number, rate : number, length : number){
        return price * Math.pow(1 + rate, length);
    }

    // перевод годовой ставки в месячную дробь
    public static yearRateToMonthlyFrac(rate : number){
        return rate / 12 / 100;
    }

    // перевод эффективной годовой ставки в номинальную месячную
    public static yearEffRateToMonthlyFrac(effRate: number){
        return Math.pow(1 + (effRate/100) , 1/12) - 1;
    }
}