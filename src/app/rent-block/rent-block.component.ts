import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { InputDataService, INPUT_DATA_SERVICE_TOKEN } from 'src/services/input-data-service';
import { InputData } from 'src/models/input-data';
import { Subscription } from 'rxjs';
import { RentSettings } from '../../models/rent-settings';
import { CommonHelper } from '../../helpers/сommon-helper';
import { CalculatorSerivce, CALCULATOR_SERVICE_TOKEN } from '../../services/calculator-serivce';
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

  constructor(
    @Inject(INPUT_DATA_SERVICE_TOKEN) private readonly inputDataService: InputDataService,
    @Inject(CALCULATOR_SERVICE_TOKEN) private readonly calculatorService: CalculatorSerivce
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
    this.calculatedResult = this.calculatorService.calulateRent(this.settings, 0);

  }

}
