import { Injectable, InjectionToken } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { InputData } from 'src/models/input-data';

export const INPUT_DATA_SERVICE_TOKEN = new InjectionToken('INPUT_DATA_SERVICE');

@Injectable({ providedIn: 'root' })
export class InputDataService {

  private _inputData: Observer<InputData>;
  public inputData: Observable<InputData>;

  constructor() {
    this.inputData = new Observable<InputData>(observer => this._inputData = observer);

  }

  public push(data: InputData) { this._inputData.next(data); }

}
