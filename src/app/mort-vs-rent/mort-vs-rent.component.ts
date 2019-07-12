import { Component, OnInit, Input } from '@angular/core';
import { Settings } from '../monthly-stats';

@Component({
  selector: 'app-mort-vs-rent',
  templateUrl: './mort-vs-rent.component.html',
  styleUrls: ['./mort-vs-rent.component.css']
})
export class MortVsRentComponent implements OnInit {
  @Input() settings: Settings;

  constructor() { }

  ngOnInit() {
  }

}
