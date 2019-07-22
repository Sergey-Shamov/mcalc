export class VariableSettingsCalculator {

  public static currentValue(dictionary:  { [month:number] : number}, index: number) {
    const keys = Object.keys(dictionary);
    return keys.indexOf(`${index}`) >= 0 ? dictionary[index] : this.currentValue(dictionary, --index);
  }

}
