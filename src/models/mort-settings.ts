import { CommonHelper } from '../helpers/сommon-helper';

export class MortSettings {
  propPrice: number = 7_000_000;   // цена квартиры
  mortRate: number = 6;            // ставка по ипотеке
  comFeesM: number = 3500;         // коммунальные платежи без счетчиков (фикс), в мес
  propTaxY: number = 30_000;       // налог, страховка, прочие платежи владения квартирой, в год
  comRateY: number = 2;            // удорожание коммуналки, % в год

  public get comFeesIn10Years() { return CommonHelper.inflateYearly(this.comFeesM, this.comRateY, 120); }
}