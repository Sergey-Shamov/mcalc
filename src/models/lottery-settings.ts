export interface LotterySettings{
    propPrice : number;      // цена квартиры
    mortRateY : number;      // ставка по ипотеке, потому что на строящееся она часто отличается
    insuranceY : number;     // страховка в год
    propExpectedFinalPrice : number;     // ожидаемая цена после завершения строительства   TODO: проценты?
  }