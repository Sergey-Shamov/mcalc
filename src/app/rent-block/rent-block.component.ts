import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { InputDataService, INPUT_DATA_SERVICE_TOKEN } from 'src/services/input-data-service';
import { InputData } from 'src/models/input-data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rent-block',
  templateUrl: './rent-block.component.html',
  styleUrls: ['./rent-block.component.css']
})
export class RentBlockComponent implements OnInit, OnDestroy {

  public input: InputData = null;

  constructor(@Inject(INPUT_DATA_SERVICE_TOKEN) private readonly inputDataService: InputDataService) { }

  private dataSubscription: Subscription;

  ngOnInit() {
    this.dataSubscription = this.inputDataService.inputData.subscribe(this.onDataChanges);
  }
  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  private onDataChanges(data: InputData) {
    this.input = data;
  }

}
