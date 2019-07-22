import { Component, OnInit, Input } from '@angular/core';
import { BlockTypes } from '../../models/base-block';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  @Input() blockType: BlockTypes;
  constructor() { }

  ngOnInit() {
  }

  private checkType(blockType: BlockTypes){

  }

}
