import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { InputData } from 'src/models/input-data';
import { INPUT_DATA_SERVICE_TOKEN, InputDataService } from 'src/services/input-data-service';
import { Subscription } from 'rxjs';
import { MortSettings } from 'src/models/mort-settings';
import { CALCULATOR_SERVICE_TOKEN, CalculatorService } from 'src/services/calculator-service';

@Component({
  selector: 'app-mort-block',
  templateUrl: './mort-block.component.html',
  styleUrls: ['./mort-block.component.css']
})
export class MortBlockComponent  implements OnInit, OnDestroy {

  public input: InputData;
  public settings = new MortSettings();

  constructor(@Inject(INPUT_DATA_SERVICE_TOKEN) private readonly inputDataService: InputDataService,
    @Inject(CALCULATOR_SERVICE_TOKEN) private readonly calculatorService: CalculatorService) { }

  private dataSubscription: Subscription;

  ngOnInit() {
    this.dataSubscription = this.inputDataService.inputData.subscribe((d) => this.onDataChanged(d));
  }
  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  private onDataChanged(data: InputData) { this.input = data; }
}
