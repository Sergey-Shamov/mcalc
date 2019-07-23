import { Component, OnInit, Inject } from '@angular/core';
import { InputData } from 'src/models/input-data';
import { INPUT_DATA_SERVICE_TOKEN, InputDataService } from 'src/services/input-data-service';

@Component({
  selector: 'app-common-settings-panel',
  templateUrl: './common-settings-panel.component.html',
  styleUrls: ['./common-settings-panel.component.css']
})
export class CommonSettingsPanelComponent implements OnInit {

  public input: InputData = new InputData();


  public get canPayMonth() { return this.input.canPayM[0]; }
  public set canPayMonth(value: number) { this.input.canPayM[0] = value; }

  constructor(@Inject(INPUT_DATA_SERVICE_TOKEN) private readonly inputDataService: InputDataService) { }

  ngOnInit() {
    this.applyInput();
  }

  public applyInput(){
    this.inputDataService.push(this.input);
  }

}
