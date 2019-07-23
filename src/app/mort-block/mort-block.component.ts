import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { InputData } from 'src/models/input-data';
import { INPUT_DATA_SERVICE_TOKEN, InputDataService } from 'src/services/input-data-service';
import { Subscription } from 'rxjs';
import { MortSettings } from 'src/models/mort-settings';

@Component({
  selector: 'app-mort-block',
  templateUrl: './mort-block.component.html',
  styleUrls: ['./mort-block.component.css']
})
export class MortBlockComponent  implements OnInit, OnDestroy {

  public input: InputData;
  public settings = new MortSettings();

  constructor(@Inject(INPUT_DATA_SERVICE_TOKEN) private readonly inputDataService: InputDataService) { }

  private dataSubscription: Subscription;

  ngOnInit() {
    this.dataSubscription = this.inputDataService.inputData.subscribe(this.onDataChanges);
  }
  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  private onDataChanges(data: InputData) { this.input = data; }
}
