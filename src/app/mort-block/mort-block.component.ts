import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { InputData } from 'src/models/input-data';
import { INPUT_DATA_SERVICE_TOKEN, InputDataService } from 'src/services/input-data-service';
import { Subscription } from 'rxjs';
import { MortSettings } from 'src/models/mort-settings';
import { CALCULATOR_SERVICE_TOKEN, CalculatorService, IColumnDefinition } from 'src/services/calculator-service';
import { MortMonthStats } from '../../models/mort-month-stats';
import { CommonHelper } from 'src/helpers/сommon-helper';

@Component({
  selector: 'app-mort-block',
  templateUrl: './mort-block.component.html',
  styleUrls: ['./mort-block.component.css']
})
export class MortBlockComponent  implements OnInit, OnDestroy {

  public input: InputData;
  public settings = new MortSettings();
  public calculatedResult: MortMonthStats[];

  private readonly displayedColumns: IColumnDefinition[] = [{colDef:"monthNo", colHead:"Месяц"}, 
                            {colDef:"interest", colHead:"Уплата процентов"},    
                            {colDef:"payComFees", colHead:"Коммунальные платежи"},    
                            {colDef:"payTax", colHead:"Налоги"},    
                            {colDef:"payDebt", colHead:"Уплата долга"}, 
                            {colDef:"debt", colHead:"Остаток долга"}];

  public get resultText(): string {
    return this.calculatedResult == undefined
      ? ""
      : this.calculatedResult.length < 1
        ? ""
        : "Выплата ипотеки займет " + CommonHelper.monthsToString(this.calculatedResult.length);
  }

  constructor(
    @Inject(INPUT_DATA_SERVICE_TOKEN) private readonly inputDataService: InputDataService,
    @Inject(CALCULATOR_SERVICE_TOKEN) private readonly calculatorService: CalculatorService) { }

  private dataSubscription: Subscription;

  ngOnInit() {
    this.dataSubscription = this.inputDataService.inputData.subscribe((d) => this.onDataChanged(d));
  }
  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  public recalculate(){
    this.calculatedResult = this.calculatorService.calculateMort(this.settings, 0);
  }

  private onDataChanged(data: InputData) { 
    this.input = data; 
    this.recalculate();
  }

  //TODO: временно
  public sendData(){
    this.calculatorService.setPaymentTableSource(this.calculatedResult, this.displayedColumns);
  }
}
