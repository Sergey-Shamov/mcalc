export class VariableSettingsCalculator {

  public static currentValue(dictionary:  { [month:number] : number}, index: number): {result: number, month: number} {
    const keys = Object.keys(dictionary);
    return keys.indexOf(`${index}`) >= 0 ? {result: dictionary[index], month: index} : this.currentValue(dictionary, --index);
  }

}
