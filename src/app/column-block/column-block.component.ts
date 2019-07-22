import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddBlockDialogComponent } from '../add-block-dialog/add-block-dialog.component';
import { BLOCK_SERVICE_TOKEN, BlockService } from 'src/services/block-service';
import { filter } from 'rxjs/operators';
import { IBaseBlock } from 'src/models/base-block';

@Component({
  selector: 'app-column-block',
  templateUrl: './column-block.component.html',
  styleUrls: ['./column-block.component.css']
})
export class ColumnBlockComponent implements OnInit {

  constructor(
    @Inject(BLOCK_SERVICE_TOKEN) private readonly blockService: BlockService,
    private readonly dialog: MatDialog) { }

  @Input() public columnNumber: number;

  public blocks: IBaseBlock[] = [];

  ngOnInit() {
    this.blockService.blocks.pipe(filter(block =>{
      console.log(block);
      console.log(this.columnNumber);
      console.log(this.columnNumber === block.column);
      return block.column === this.columnNumber;

    })).subscribe(b => this.blocks.push(b));
  }

  public onAddBlockClick() {
    const dialogRef = this.dialog.open(AddBlockDialogComponent, { data: this.columnNumber });

  }
}
