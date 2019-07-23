
export enum BlockTypes{
	Mortgage,
	Rent
}
export interface IBaseBlock{
	type: BlockTypes;	
}