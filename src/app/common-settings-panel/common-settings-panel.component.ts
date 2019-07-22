import { Component, OnInit, Inject } from '@angular/core';
import { InputData } from 'src/models/input-data';
import { INPUT_DATA_SERVICE_TOKEN, InputDataService } from 'src/services/input-data-service';

@Component({
  selector: 'app-common-settings-panel',
  templateUrl: './common-settings-panel.component.html',
  styleUrls: ['./common-settings-panel.component.css']
})
export class CommonSettingsPanelComponent implements OnInit {

  public input: InputData = null;

  constructor(@Inject(INPUT_DATA_SERVICE_TOKEN) private readonly inputDataService: InputDataService) { }

  ngOnInit() {
    this.inputDataService.push(new InputData());
  }

}
