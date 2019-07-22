import { InjectionToken } from '@angular/core';
import { IBaseBlock, BlockTypes } from 'src/models/base-block';
import { Observer, Observable, Subject } from 'rxjs';
import {share} from 'rxjs/operators'

export const BLOCK_SERVICE_TOKEN = new InjectionToken('block_service');
export class BlockService {
	constructor() {

    }
    
    private _blocks = new Subject<IBaseBlock>();    //TODO: состояния сохраняются? нам не нужно хранить здесь

	public get blocks(){return this._blocks;}


	public addBlock(column: number, blockType: BlockTypes) { this._blocks.next({ column:column, type:blockType }) }

}