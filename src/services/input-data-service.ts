import { Injectable, InjectionToken } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { InputData } from 'src/models/input-data';

export const INPUT_DATA_SERVICE_TOKEN = new InjectionToken('INPUT_DATA_SERVICE');

@Injectable({ providedIn: 'root' })
export class InputDataService {

  public inputData = new Subject<InputData>();

  constructor() {

  }

  public push(data: InputData) { this.inputData.next(data); }

}
