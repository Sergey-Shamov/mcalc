
export class VariableSettingsCalculator{
    public currentValue(dictionary:{month:number, value:number}, index:number){
        const keys = Object.keys(dictionary);
        
        return keys.indexOf(`${index}`) >= 0 ? dictionary[index] : / 
    }
}