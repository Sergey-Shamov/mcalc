import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { CALCULATOR_SERVICE_TOKEN, CalculatorService, IPaymentTableSource, IColumnDefinition } from 'src/services/calculator-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.css']
})
export class PaymentTableComponent implements OnInit, OnDestroy {
  
  private dataSubscription: Subscription;
  public dataSource;
  public columnDefinitions: IColumnDefinition[];
  public get displayedColumns(): string[] { return this.columnDefinitions ? this.columnDefinitions.map(e => e.colDef) : null; }

  constructor(
    @Inject(CALCULATOR_SERVICE_TOKEN) private readonly calculatorService: CalculatorService) { }

  ngOnInit() {
    this.dataSubscription = this.calculatorService.paymentTableData.subscribe((d) => this.onDataChanged(d));
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe(); 
    if (this.columnDefinitions != undefined)
      this.columnDefinitions.slice();
  }

  onDataChanged(d: IPaymentTableSource): void {
    this.dataSource = d.dataSource;
    this.columnDefinitions = d.columnDefinitions;
  }
}
