import { InputData } from 'src/models/input-data';
import { RentMonthStats } from 'src/models/rent-month-stats';
import { InputDataService,INPUT_DATA_SERVICE_TOKEN } from './input-data-service';
import { Inject } from '@angular/core';
import { RentSettings } from 'src/models/rent-settings';

export class CalculatorSerivce{


    private inputData:InputData

    constructor(@Inject(INPUT_DATA_SERVICE_TOKEN) private readonly inputService:InputDataService){
        inputService.inputData.subscribe(data=>this.inputData = data);    
    }
    public calulateRent(){

    }

    private makeRow(rentSettings:RentSettings, prevRow : RentMonthStats, monthNo : number, totalMonthNo : number){
        const payRent = rentSettings.rentMonthCost[monthNo];
        const interest = prevRow == undefined ? 0 : CommonHelper.inflatePrice(prevRow.totalDeposit, this.generalSettings.investRateMFrac, monthNo);
        const addToInvest = this.generalSettings.getPay(totalMonthNo) - newRow.payRent;
        const totalDeposit = prevRow == undefined 
        ? this.generalSettings.currMoney              // TODO: пробросить сюда "оставшиеся" деньги, для цепи расчетов
        : prevRow.totalDeposit + addToInvest;
                                
        let newRow = <RentMonthStats>{
                    totalMonthNo:totalMonthNo,
                    monthNo:monthNo,
                    payRent: payRent,
                    interest:interest,
                    addToInvest:addToInvest,
                    totalDeposit:totalDeposit
                    };
      }
  
}