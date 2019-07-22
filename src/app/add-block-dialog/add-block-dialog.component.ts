import { Component, OnInit, Inject } from '@angular/core';
import { BLOCK_SERVICE_TOKEN, BlockService } from 'src/services/block-service';
import { BlockTypes } from 'src/models/base-block';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-block-dialog',
  templateUrl: './add-block-dialog.component.html',
  styleUrls: ['./add-block-dialog.component.css']
})
export class AddBlockDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data: any,
    @Inject(BLOCK_SERVICE_TOKEN) private readonly blockService: BlockService,
    private readonly dialogRef: MatDialogRef<AddBlockDialogComponent>) { }



  public onAddBlockClick(type: BlockTypes) {
   this.blockService.addBlock(this.data, type);
   this.dialogRef.close();
  }
  public addRent() { this.onAddBlockClick(BlockTypes.Rent); }
  public addMort() { this.onAddBlockClick(BlockTypes.Mortgage); }

  ngOnInit() {
  }
}
