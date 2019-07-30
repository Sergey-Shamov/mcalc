import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { InputDataService, INPUT_DATA_SERVICE_TOKEN } from 'src/services/input-data-service';
import { InputData } from 'src/models/input-data';
import { Subscription } from 'rxjs';
import { RentSettings } from '../../models/rent-settings';
import { CommonHelper } from '../../helpers/сommon-helper';
import { CalculatorService, CALCULATOR_SERVICE_TOKEN, IColumnDefinition } from '../../services/calculator-service';
import { RentMonthStats } from '../../models/rent-month-stats';

@Component({
  selector: 'app-rent-block',
  templateUrl: './rent-block.component.html',
  styleUrls: ['./rent-block.component.css']
})
export class RentBlockComponent implements OnInit, OnDestroy {

  public input: InputData;
  public settings: RentSettings = new RentSettings();
  public calculatedResult: RentMonthStats[];

  private dataSubscription: Subscription;

  private readonly displayedColumns: IColumnDefinition[] = [{colDef:"monthNo", colHead:"Месяц"}, 
                            {colDef:"payRent", colHead:"Уплата аренды"},    
                            {colDef:"interest", colHead:"Капитализация процентов"},    
                            {colDef:"addToInvest", colHead:"Внесено на вклад"},    
                            {colDef:"totalDeposit", colHead:"Остаток по вкладу"}];  
                            
public get resultText(): string {
  return this.calculatedResult == undefined
    ? ""
    : this.calculatedResult.length < 1
      ? ""
      : "Накопите на квартиру за " + CommonHelper.monthsToString(this.calculatedResult.length);
}
                            
  constructor(
    @Inject(INPUT_DATA_SERVICE_TOKEN) private readonly inputDataService: InputDataService,
    @Inject(CALCULATOR_SERVICE_TOKEN) private readonly calculatorService: CalculatorService
  ) { }



  ngOnInit() {
    this.dataSubscription = this.inputDataService.inputData.subscribe((d) => this.onDataChanges(d));
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  public get InvestIn10Years() { return this.input == null ? 0 : CommonHelper.inflatePrice(this.input.currMoney, this.settings.investRateMFrac, 120); }

  private onDataChanges(data: InputData) {
    this.input = data;
    this.recalculate();
  }

  public recalculate(){
    this.calculatedResult = this.calculatorService.calulateRent(this.settings, 0);
  }

  //TODO: временно
  public sendData(){
    this.calculatorService.setPaymentTableSource(this.calculatedResult, this.displayedColumns);
  }
}
