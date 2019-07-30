(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-block-dialog/add-block-dialog.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-block-dialog/add-block-dialog.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t Выберите тип блока\r\n</div>\r\n\r\n<div class='options'>\r\n\r\n\t<button mat-button color='primary' (click)='addMort()'>Ипотека</button>\r\n\t<button mat-button color='primary' (click)='addRent()'>Накопление</button>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/block/block.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/block/block.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-content>\r\n        <div class=\"block-panel\">\r\n            <div [ngSwitch]=\"blockType.toString()\">\r\n                <div *ngSwitchCase=\"'0'\"><app-mort-block></app-mort-block></div>\r\n                <div *ngSwitchCase=\"'1'\"><app-rent-block></app-rent-block></div>\r\n            </div>\r\n        </div>\r\n    </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/column-block/column-block.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/column-block/column-block.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column\">\r\n\t<app-block *ngFor=\"let block of blocks\" [blockType]='block.type'></app-block>\r\n\t<div class=\"column-footer\">\r\n\t\t<button mat-flat-button color='primary' (click)='onAddBlockClick()'>Новый расчет</button>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common-settings-panel/common-settings-panel.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common-settings-panel/common-settings-panel.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"inputs-container\">\r\n\r\n    <mat-card-content>\r\n\r\n        <mat-form-field class=\"input-field\">\r\n            <input matInput type='number' [(ngModel)]=\"input.flatPrice\" placeholder=\"Цена квартиры\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"input-field\">\r\n            <input matInput type='number' [(ngModel)]=\"input.currMoney\" placeholder=\"Денег в наличии\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"input-field\">\r\n            <input matInput type='number' [(ngModel)]=\"canPayMonth\" placeholder=\"Могу платить в месяц\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"input-field\">\r\n            <input matInput type='number' [(ngModel)]=\"input.propInflationY\"\r\n                placeholder=\"Удорожание квартиры, % в год\" />\r\n            <mat-hint>Через 10 лет квартира будет стоить {{input.propPriceIn10Years | number:'1.0-0'}}</mat-hint>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"input-field\">\r\n            <input matInput type='number' [(ngModel)]=\"input.payInflationY\" placeholder=\"Увеличение платежа, % в год\" />\r\n            <mat-hint>Через 10 лет макс. платеж будет {{input.canPayIn10Years | number:'1.0-0'}}</mat-hint>\r\n        </mat-form-field>\r\n    </mat-card-content>\r\n    <mat-card-footer class=\"footer\">\r\n        <button mat-flat-button color='primary' (onclick)=\"applyInput\">Пересчитать</button>\r\n    </mat-card-footer>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main-calc-page/main-calc-page.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main-calc-page/main-calc-page.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>В разработке</h1>\r\n<h3><a [routerLink]=\"[ '/old' ]\">Перейти к старой версии</a></h3>\r\n\r\n<app-common-settings-panel></app-common-settings-panel>\r\n\r\n<div class=\"column-container\">\r\n\t<app-column-block class=\"column\"></app-column-block>\r\n</div>\r\n\r\n<div class=\"calc-table-container\">\r\n\t<app-payment-table></app-payment-table>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mcalc-old/mcalc-old.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mcalc-old/mcalc-old.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mort-vs-rent [settings]=\"settings\"></app-mort-vs-rent>        \r\n     \r\n<div class='resultsText'>{{resultText}}</div>\r\n\r\n\r\n<div class='header'>\r\n    <span>номер месяца</span>\r\n    <span>можно потратить</span>\r\n    <span>платеж в тело кредита</span>\r\n    <span>выплачено из тела кредита</span>\r\n    <span>остаток тела кредита</span>\r\n    <span>платеж в счет процентов</span>\r\n    <span>выплачено процентов</span>\r\n    <span>коммуналка</span>\r\n    <span>налоги</span>\r\n    <span>переплата при ипотеке</span>\r\n    <span>получено процентами по вкладу</span>\r\n    <span>сумма на вкладе</span>\r\n    <span>аренда за месяц</span>\r\n    <span>переплата при аренде</span>\r\n    <span>цена квартиры</span>\r\n</div>\r\n\r\n<div class='row' *ngFor=\"let item of months\">\r\n    <span>{{item.monthNumber | number:'1.0-0'}}</span>\r\n    <span>{{item.canPay | number:'1.0-0'}}</span>\r\n    <span>{{item.mortPayBody | number:'1.0-0'}}</span>\r\n    <span>{{item.mortPaidBody | number:'1.0-0'}}</span>\r\n    <span>{{item.mortBodyRemain | number:'1.0-0'}}</span>\r\n    <span>{{item.mortPayInterest | number:'1.0-0'}}</span>\r\n    <span>{{item.mortPaidInterest | number:'1.0-0'}}</span>\r\n    <span>{{item.comFees | number:'1.0-0'}}</span>\r\n    <span>{{item.propTax | number:'1.0-0'}}</span>\r\n    <span class='totalLossColumn'>{{item.mortOverpay | number:'1.0-0'}}</span>\r\n    <span>{{item.investInterest | number:'1.0-0'}}</span>\r\n    <span>{{item.investAmount | number:'1.0-0'}}</span>\r\n    <span>{{item.rentPay | number:'1.0-0'}}</span>\r\n    <span class='totalLossColumn'>{{item.rentPaid | number:'1.0-0'}}</span>\r\n    <span>{{item.propPrice | number:'1.0-0'}}</span>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mort-block/mort-block.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mort-block/mort-block.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mort-panel\">\r\n    <mat-form-field>\r\n        <input matInput type='number' [(ngModel)]=\"settings.mortRate\" placeholder=\"Ставка по ипотеке, % в год\" />  \r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input matInput type='number' [(ngModel)]=\"settings.propTaxY\" placeholder=\"Налог, страховка, в год\" />\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input matInput type='number' [(ngModel)]=\"settings.comFeesM\" placeholder=\"Коммунальные платежи без счетчиков, мес.\" />\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input matInput type='number' [(ngModel)]=\"settings.comRateY\" placeholder=\"Удорожание коммуналки, % в год\" />\r\n        <mat-hint>Через 10 лет коммуналка будет {{settings.comFeesIn10Years | number:'1.0-0'}}</mat-hint>\r\n    </mat-form-field>\r\n    <button mat-flat-button color='primary' (click)='recalculate()'>Пересчитать</button>\r\n    <div class=\"results-panel\">\r\n        {{resultText}}\r\n    </div>\r\n    <button mat-button (click)='sendData()'>Показать график платежей</button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mort-vs-rent/mort-vs-rent.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mort-vs-rent/mort-vs-rent.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n    <div class=\"divBox\">\r\n        <h1>Ипотека или аренда?</h1>\r\n\r\n        <h2>Ипотека</h2>\r\n        <h2>Аренда</h2>\r\n\r\n        <div class=\"narrowBox\">\r\n            <mat-form-field>\r\n                <input matInput type='number' [(ngModel)]=\"settings.mortRateY\" placeholder=\"Ставка по ипотеке, % в год\" />  \r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput type='number' [(ngModel)]=\"settings.propTaxY\" placeholder=\"Налог, страховка, в год\" />\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput type='number' [(ngModel)]=\"settings.comFeesM\" placeholder=\"Коммунальные платежи без счетчиков, мес.\" />\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput type='number' [(ngModel)]=\"settings.comFeesInflationY\" placeholder=\"Удорожание коммуналки, % в год\" />\r\n                <mat-hint>Через 10 лет коммуналка будет {{settings.comFeesIn10Years | number:'1.0-0'}}</mat-hint>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"narrowBox\">\r\n            <mat-form-field>\r\n                <input matInput type='number' [(ngModel)]=\"settings.propPrice\" placeholder=\"Цена квартиры\"/>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput type='number' [(ngModel)]=\"settings.currMoney\" placeholder=\"Денег в наличии\"/>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput type='number' [(ngModel)]=\"settings.canPayM\" placeholder=\"Могу платить в месяц\"/>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput type='number' [(ngModel)]=\"settings.propInflationY\" placeholder=\"Удорожание квартиры, % в год\" />\r\n                <mat-hint>Через 10 лет квартира будет стоить {{settings.propPriceIn10Years | number:'1.0-0'}}</mat-hint>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput type='number' [(ngModel)]=\"settings.payInflationY\" placeholder=\"Увеличение платежа, % в год\" />\r\n                <mat-hint>Через 10 лет макс. платеж будет {{settings.canPayIn10Years | number:'1.0-0'}}</mat-hint>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"narrowBox\">\r\n            <mat-form-field>\r\n                <input matInput type='number' [(ngModel)]=\"settings.rentM\" placeholder=\"Цена аренды в месяц\" />\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput type='number' [(ngModel)]=\"settings.investRateY\" placeholder=\"Ставка по вкладу, % в год\" />\r\n                <mat-hint>Через 10 лет на вкладе будет {{settings.investmentIn10Years | number:'1.0-0'}}</mat-hint>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput type='number' [(ngModel)]=\"settings.rentInflationY\" placeholder=\"Удорожание аренды, % в год\" />\r\n                <mat-hint>Через 10 лет аренда будет {{settings.rentIn10Years | number:'1.0-0'}}</mat-hint>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div>Результат расчета ипотеки</div>\r\n        <div>Результат расчета аренды</div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/not-found-component/not-found-component.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/not-found-component/not-found-component.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Mcalc: 404 Not Found</h1>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/payment-table/payment-table.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/payment-table/payment-table.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='table-container'>\r\n    <table mat-table #table [dataSource]=\"dataSource\">\r\n        <ng-container *ngFor=\"let column of columnDefinitions\" matColumnDef=\"{{column.colDef}}\">\r\n            <th mat-header-cell *matHeaderCellDef> {{column.colHead}} </th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row[column.colDef]}} </td>\r\n        </ng-container>\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rent-block/rent-block.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rent-block/rent-block.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rent-panel\">\r\n    <mat-form-field>\r\n        <input matInput type='number' [(ngModel)]=\"settings.rentMonthCost[0]\" placeholder=\"Цена аренды в месяц\" />\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input matInput type='number' [(ngModel)]=\"settings.investRateY\" placeholder=\"Ставка по вкладу, % в год\" />\r\n        <mat-hint>Через 10 лет на вкладе будет {{InvestIn10Years | number:'1.0-0'}}</mat-hint>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input matInput type='number' [(ngModel)]=\"settings.rentYearRate\"\r\n            placeholder=\"Удорожание аренды, % в год\" />\r\n        <mat-hint>Через 10 лет аренда будет {{settings.rentIn10Years | number:'1.0-0'}}</mat-hint>\r\n    </mat-form-field>\r\n\r\n    <button mat-flat-button color='primary' (click)='recalculate()'>Пересчитать</button>\r\n    <div *ngIf=\"calculatedResult\">\r\n        <div class=\"results-panel\">{{resultText}}</div>\r\n    </div>\r\n    <button mat-button (click)='sendData()'>Показать график платежей</button>\r\n</div>"

/***/ }),

/***/ "./src/app/add-block-dialog/add-block-dialog.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/add-block-dialog/add-block-dialog.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n.options{\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWJsb2NrLWRpYWxvZy9hZGQtYmxvY2stZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYWRkLWJsb2NrLWRpYWxvZy9hZGQtYmxvY2stZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLm9wdGlvbnN7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/add-block-dialog/add-block-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/add-block-dialog/add-block-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: AddBlockDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBlockDialogComponent", function() { return AddBlockDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_block_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/block-service */ "./src/services/block-service.ts");
/* harmony import */ var src_models_base_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/base-block */ "./src/models/base-block.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");





let AddBlockDialogComponent = class AddBlockDialogComponent {
    constructor(blockService, dialogRef) {
        this.blockService = blockService;
        this.dialogRef = dialogRef;
    }
    onAddBlockClick(type) {
        this.blockService.addBlock(type);
        this.dialogRef.close();
    }
    addRent() { this.onAddBlockClick(src_models_base_block__WEBPACK_IMPORTED_MODULE_3__["BlockTypes"].Rent); }
    addMort() { this.onAddBlockClick(src_models_base_block__WEBPACK_IMPORTED_MODULE_3__["BlockTypes"].Mortgage); }
    ngOnInit() {
    }
};
AddBlockDialogComponent.ctorParameters = () => [
    { type: src_services_block_service__WEBPACK_IMPORTED_MODULE_2__["BlockService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_services_block_service__WEBPACK_IMPORTED_MODULE_2__["BLOCK_SERVICE_TOKEN"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }
];
AddBlockDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-block-dialog',
        template: __webpack_require__(/*! raw-loader!./add-block-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-block-dialog/add-block-dialog.component.html"),
        styles: [__webpack_require__(/*! ./add-block-dialog.component.css */ "./src/app/add-block-dialog/add-block-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_services_block_service__WEBPACK_IMPORTED_MODULE_2__["BLOCK_SERVICE_TOKEN"]))
], AddBlockDialogComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\tpadding: 10px;\t\r\n\tbackground: #FAFAFA;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0cGFkZGluZzogMTBweDtcdFxyXG5cdGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'mortgage-calculator';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _mort_vs_rent_mort_vs_rent_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mort-vs-rent/mort-vs-rent.component */ "./src/app/mort-vs-rent/mort-vs-rent.component.ts");
/* harmony import */ var _rent_block_rent_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rent-block/rent-block.component */ "./src/app/rent-block/rent-block.component.ts");
/* harmony import */ var src_services_input_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/input-data-service */ "./src/services/input-data-service.ts");
/* harmony import */ var _mcalc_old_mcalc_old_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mcalc-old/mcalc-old.component */ "./src/app/mcalc-old/mcalc-old.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./not-found-component/not-found-component.component */ "./src/app/not-found-component/not-found-component.component.ts");
/* harmony import */ var _main_calc_page_main_calc_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main-calc-page/main-calc-page.component */ "./src/app/main-calc-page/main-calc-page.component.ts");
/* harmony import */ var _column_block_column_block_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./column-block/column-block.component */ "./src/app/column-block/column-block.component.ts");
/* harmony import */ var _add_block_dialog_add_block_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-block-dialog/add-block-dialog.component */ "./src/app/add-block-dialog/add-block-dialog.component.ts");
/* harmony import */ var src_services_block_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/services/block-service */ "./src/services/block-service.ts");
/* harmony import */ var _block_block_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./block/block.component */ "./src/app/block/block.component.ts");
/* harmony import */ var _common_settings_panel_common_settings_panel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./common-settings-panel/common-settings-panel.component */ "./src/app/common-settings-panel/common-settings-panel.component.ts");
/* harmony import */ var _mort_block_mort_block_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mort-block/mort-block.component */ "./src/app/mort-block/mort-block.component.ts");
/* harmony import */ var _services_calculator_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../services/calculator-service */ "./src/services/calculator-service.ts");
/* harmony import */ var _payment_table_payment_table_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./payment-table/payment-table.component */ "./src/app/payment-table/payment-table.component.ts");
























const appRoutes = [
    {
        path: 'old',
        component: _mcalc_old_mcalc_old_component__WEBPACK_IMPORTED_MODULE_12__["McalcOldComponent"],
        data: { title: 'Старая версия' }
    },
    {
        path: 'calculator',
        component: _main_calc_page_main_calc_page_component__WEBPACK_IMPORTED_MODULE_15__["MainCalcPageComponent"]
    },
    {
        path: '',
        redirectTo: '/calculator',
        pathMatch: 'full'
    },
    {
        path: '404',
        component: _not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"]
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _mort_vs_rent_mort_vs_rent_component__WEBPACK_IMPORTED_MODULE_9__["MortVsRentComponent"],
            _rent_block_rent_block_component__WEBPACK_IMPORTED_MODULE_10__["RentBlockComponent"],
            _mcalc_old_mcalc_old_component__WEBPACK_IMPORTED_MODULE_12__["McalcOldComponent"],
            _not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"],
            _main_calc_page_main_calc_page_component__WEBPACK_IMPORTED_MODULE_15__["MainCalcPageComponent"],
            _column_block_column_block_component__WEBPACK_IMPORTED_MODULE_16__["ColumnBlockComponent"],
            _add_block_dialog_add_block_dialog_component__WEBPACK_IMPORTED_MODULE_17__["AddBlockDialogComponent"],
            _block_block_component__WEBPACK_IMPORTED_MODULE_19__["BlockComponent"],
            _common_settings_panel_common_settings_panel_component__WEBPACK_IMPORTED_MODULE_20__["CommonSettingsPanelComponent"],
            _mort_block_mort_block_component__WEBPACK_IMPORTED_MODULE_21__["MortBlockComponent"],
            _payment_table_payment_table_component__WEBPACK_IMPORTED_MODULE_23__["PaymentTableComponent"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(appRoutes),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"]
        ],
        entryComponents: [_add_block_dialog_add_block_dialog_component__WEBPACK_IMPORTED_MODULE_17__["AddBlockDialogComponent"]],
        providers: [
            { provide: src_services_input_data_service__WEBPACK_IMPORTED_MODULE_11__["INPUT_DATA_SERVICE_TOKEN"], useClass: src_services_input_data_service__WEBPACK_IMPORTED_MODULE_11__["InputDataService"] },
            { provide: src_services_block_service__WEBPACK_IMPORTED_MODULE_18__["BLOCK_SERVICE_TOKEN"], useClass: src_services_block_service__WEBPACK_IMPORTED_MODULE_18__["BlockService"] },
            { provide: _services_calculator_service__WEBPACK_IMPORTED_MODULE_22__["CALCULATOR_SERVICE_TOKEN"], useClass: _services_calculator_service__WEBPACK_IMPORTED_MODULE_22__["CalculatorService"] },
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"], useValue: {} },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/block/block.component.css":
/*!*******************************************!*\
  !*** ./src/app/block/block.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\r\n    margin-right: 10pt;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvY2svYmxvY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrL2Jsb2NrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/block/block.component.ts":
/*!******************************************!*\
  !*** ./src/app/block/block.component.ts ***!
  \******************************************/
/*! exports provided: BlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockComponent", function() { return BlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlockComponent = class BlockComponent {
    constructor() { }
    ngOnInit() {
    }
    checkType(blockType) {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BlockComponent.prototype, "blockType", void 0);
BlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-block',
        template: __webpack_require__(/*! raw-loader!./block.component.html */ "./node_modules/raw-loader/index.js!./src/app/block/block.component.html"),
        styles: [__webpack_require__(/*! ./block.component.css */ "./src/app/block/block.component.css")]
    })
], BlockComponent);



/***/ }),

/***/ "./src/app/column-block/column-block.component.css":
/*!*********************************************************!*\
  !*** ./src/app/column-block/column-block.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n\tdisplay: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n\tflex-grow: 1;\r\n\tmargin-right: 10px;\r\n\toverflow: auto;\r\n}\r\n.column{\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tflex-grow: 1;\r\n}\r\n.column-footer{\r\n\tdisplay: flex;\r\n\tjustify-content: stretch;\r\n\talign-items: stretch;\r\n\tpadding: 10px;\r\n}\r\n.column-footer button{\r\n\tflex-grow: 1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sdW1uLWJsb2NrL2NvbHVtbi1ibG9jay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtJQUNWLG1CQUFtQjtJQUNuQix1QkFBdUI7Q0FDMUIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixjQUFjO0FBQ2Y7QUFDQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isd0JBQXdCO0NBQ3hCLG9CQUFvQjtDQUNwQixhQUFhO0FBQ2Q7QUFDQTtDQUNDLFlBQVk7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbHVtbi1ibG9jay9jb2x1bW4tYmxvY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0ZmxleC1ncm93OiAxO1xyXG5cdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRvdmVyZmxvdzogYXV0bztcclxufVxyXG4uY29sdW1ue1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRmbGV4LWdyb3c6IDE7XHJcbn1cclxuLmNvbHVtbi1mb290ZXJ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcblx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblx0cGFkZGluZzogMTBweDtcclxufVxyXG4uY29sdW1uLWZvb3RlciBidXR0b257XHJcblx0ZmxleC1ncm93OiAxO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/column-block/column-block.component.ts":
/*!********************************************************!*\
  !*** ./src/app/column-block/column-block.component.ts ***!
  \********************************************************/
/*! exports provided: ColumnBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnBlockComponent", function() { return ColumnBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _add_block_dialog_add_block_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-block-dialog/add-block-dialog.component */ "./src/app/add-block-dialog/add-block-dialog.component.ts");
/* harmony import */ var src_services_block_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/block-service */ "./src/services/block-service.ts");





let ColumnBlockComponent = class ColumnBlockComponent {
    constructor(blockService, dialog) {
        this.blockService = blockService;
        this.dialog = dialog;
        this.blocks = [];
    }
    ngOnInit() {
        this.blockService.blocks.subscribe(b => this.blocks.push(b));
    }
    onAddBlockClick() {
        const dialogRef = this.dialog.open(_add_block_dialog_add_block_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddBlockDialogComponent"]);
    }
};
ColumnBlockComponent.ctorParameters = () => [
    { type: src_services_block_service__WEBPACK_IMPORTED_MODULE_4__["BlockService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_services_block_service__WEBPACK_IMPORTED_MODULE_4__["BLOCK_SERVICE_TOKEN"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
ColumnBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-column-block',
        template: __webpack_require__(/*! raw-loader!./column-block.component.html */ "./node_modules/raw-loader/index.js!./src/app/column-block/column-block.component.html"),
        styles: [__webpack_require__(/*! ./column-block.component.css */ "./src/app/column-block/column-block.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_services_block_service__WEBPACK_IMPORTED_MODULE_4__["BLOCK_SERVICE_TOKEN"]))
], ColumnBlockComponent);



/***/ }),

/***/ "./src/app/common-settings-panel/common-settings-panel.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/common-settings-panel/common-settings-panel.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n}\r\n.inputs-container{\r\n\tflex-grow: 1;\r\n}\r\n.input-field {\r\n\tmargin: 10px 10px;\r\n}\r\n.footer {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tpadding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLXNldHRpbmdzLXBhbmVsL2NvbW1vbi1zZXR0aW5ncy1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLFdBQVc7QUFDWjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixhQUFhO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21tb24tc2V0dGluZ3MtcGFuZWwvY29tbW9uLXNldHRpbmdzLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG4uaW5wdXRzLWNvbnRhaW5lcntcclxuXHRmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcblx0bWFyZ2luOiAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/common-settings-panel/common-settings-panel.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/common-settings-panel/common-settings-panel.component.ts ***!
  \**************************************************************************/
/*! exports provided: CommonSettingsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonSettingsPanelComponent", function() { return CommonSettingsPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_models_input_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/input-data */ "./src/models/input-data.ts");
/* harmony import */ var src_services_input_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/input-data-service */ "./src/services/input-data-service.ts");




let CommonSettingsPanelComponent = class CommonSettingsPanelComponent {
    constructor(inputDataService) {
        this.inputDataService = inputDataService;
        this.input = new src_models_input_data__WEBPACK_IMPORTED_MODULE_2__["InputData"]();
    }
    get canPayMonth() { return this.input.canPayM[0]; }
    set canPayMonth(value) { this.input.canPayM[0] = value; }
    ngOnInit() {
        this.applyInput();
    }
    applyInput() {
        this.inputDataService.push(this.input);
    }
};
CommonSettingsPanelComponent.ctorParameters = () => [
    { type: src_services_input_data_service__WEBPACK_IMPORTED_MODULE_3__["InputDataService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_services_input_data_service__WEBPACK_IMPORTED_MODULE_3__["INPUT_DATA_SERVICE_TOKEN"],] }] }
];
CommonSettingsPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-common-settings-panel',
        template: __webpack_require__(/*! raw-loader!./common-settings-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/common-settings-panel/common-settings-panel.component.html"),
        styles: [__webpack_require__(/*! ./common-settings-panel.component.css */ "./src/app/common-settings-panel/common-settings-panel.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_services_input_data_service__WEBPACK_IMPORTED_MODULE_3__["INPUT_DATA_SERVICE_TOKEN"]))
], CommonSettingsPanelComponent);



/***/ }),

/***/ "./src/app/main-calc-page/main-calc-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/main-calc-page/main-calc-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n}\r\n.column-container{\r\n\tdisplay: flex;\r\n\tpadding-top: 2vh;\r\n\tflex-direction: row;\r\n}\r\n.column{\r\n\twidth:400px;\r\n}\r\n.calc-table-container{\r\n\tdisplay: block;\r\n\twidth: 95%;\r\n\tjustify-content: stretch;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1jYWxjLXBhZ2UvbWFpbi1jYWxjLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7Q0FDWixzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLGNBQWM7Q0FDZCxVQUFVO0NBQ1Ysd0JBQXdCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1jYWxjLXBhZ2UvbWFpbi1jYWxjLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5jb2x1bW4tY29udGFpbmVye1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0cGFkZGluZy10b3A6IDJ2aDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbi5jb2x1bW57XHJcblx0d2lkdGg6NDAwcHg7XHJcbn1cclxuLmNhbGMtdGFibGUtY29udGFpbmVye1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiA5NSU7XHJcblx0anVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/main-calc-page/main-calc-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main-calc-page/main-calc-page.component.ts ***!
  \************************************************************/
/*! exports provided: MainCalcPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCalcPageComponent", function() { return MainCalcPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainCalcPageComponent = class MainCalcPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainCalcPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-calc-page',
        template: __webpack_require__(/*! raw-loader!./main-calc-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/main-calc-page/main-calc-page.component.html"),
        styles: [__webpack_require__(/*! ./main-calc-page.component.css */ "./src/app/main-calc-page/main-calc-page.component.css")]
    })
], MainCalcPageComponent);



/***/ }),

/***/ "./src/app/mcalc-old/mcalc-old.component.css":
/*!***************************************************!*\
  !*** ./src/app/mcalc-old/mcalc-old.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\tpadding: 10px;\t\r\n}\r\n.header,.row{\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(16, 100px);\r\n\tfont-size: 0.9rem;\r\n\tborder-top:1px #00000020 solid;\r\n}\r\n.header span, .row span{\r\n\tpadding: 5px;\r\n}\r\n.resultsText{\r\n\tpadding: 20px;\r\n\twhite-space: pre-wrap;\r\n}\r\n.totalLossColumn{\r\n\tcolor: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWNhbGMtb2xkL21jYWxjLW9sZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isd0NBQXdDO0NBQ3hDLGlCQUFpQjtDQUNqQiw4QkFBOEI7QUFDL0I7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBO0NBQ0MsYUFBYTtDQUNiLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0MsVUFBVTtBQUNYIiwiZmlsZSI6InNyYy9hcHAvbWNhbGMtb2xkL21jYWxjLW9sZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHRcclxufVxyXG4uaGVhZGVyLC5yb3d7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxNiwgMTAwcHgpO1xyXG5cdGZvbnQtc2l6ZTogMC45cmVtO1xyXG5cdGJvcmRlci10b3A6MXB4ICMwMDAwMDAyMCBzb2xpZDtcclxufVxyXG4uaGVhZGVyIHNwYW4sIC5yb3cgc3BhbntcclxuXHRwYWRkaW5nOiA1cHg7XHJcbn1cclxuLnJlc3VsdHNUZXh0e1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcblx0d2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcbi50b3RhbExvc3NDb2x1bW57XHJcblx0Y29sb3I6IHJlZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/mcalc-old/mcalc-old.component.ts":
/*!**************************************************!*\
  !*** ./src/app/mcalc-old/mcalc-old.component.ts ***!
  \**************************************************/
/*! exports provided: McalcOldComponent, MonthlyStats, Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McalcOldComponent", function() { return McalcOldComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthlyStats", function() { return MonthlyStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let McalcOldComponent = class McalcOldComponent {
    constructor() {
        this.title = 'mortgage-calculator';
        this.settings = new Settings();
        this.resultText = "";
    }
    ngOnInit() {
    }
    get months() {
        const result = [];
        let stat = null;
        this.resultText = "";
        do {
            stat = MonthlyStats.Create(stat, this.settings);
            result.push(stat);
        } while ((!stat.IsDone()) && (result.length < 360));
        const resCount = result.length;
        if (resCount > 360) {
            this.resultText = "Ипотека займет более 30 лет. Возможна ошибка в исходных данных.";
        }
        else {
            const lastRow = result[resCount - 1];
            const mortRow = result.find(a => a.mortBodyRemain == 0 && a.mortPayBody != 0 && a.mortPayInterest != 0);
            const investRow = result.find(a => a.investAmount >= a.propPrice);
            if (mortRow == undefined || investRow == undefined)
                this.resultText += "Не удается завершить расчет на основе заданных параметров";
            else {
                this.resultText = "Быстрее ";
                if (lastRow.mortPayBody == 0 && lastRow.mortPayInterest == 0)
                    this.resultText += "выплатить ипотеку";
                else
                    this.resultText += "накопить";
                this.resultText += ", ";
                if (Math.abs(mortRow.mortOverpay - investRow.rentPaid) <= (Math.min(mortRow.mortOverpay, investRow.rentPaid) * 0.05))
                    this.resultText += "расходы примерно равны\n";
                else if (mortRow.mortOverpay > investRow.rentPaid)
                    this.resultText += "выгоднее накопить.";
                else
                    this.resultText += "выгоднее взять ипотеку.";
                this.resultText += "\n\n";
                this.resultText += "Вы выплатите ипотеку за " + this.monthsToString(mortRow.monthNumber) + "  и переплатите " + mortRow.mortOverpay.toLocaleString(undefined, { maximumFractionDigits: 0 }) + "₽\n";
                this.resultText += "Вы накопите на квартиру за " + this.monthsToString(investRow.monthNumber) + "  и переплатите " + investRow.rentPaid.toLocaleString(undefined, { maximumFractionDigits: 0 }) + "₽\n";
                this.resultText += (mortRow.mortOverpay > investRow.rentPaid ? "Копить" : "Ипотека") + " дешевле на " + (Math.abs(mortRow.mortOverpay - investRow.rentPaid)).toLocaleString(undefined, { maximumFractionDigits: 0 }) + "₽";
            }
        }
        return result;
    }
    ;
    // Расчет величины аннуитетного платежа. Сумма, годовая ставка, срок в месяцах.
    calcAnnPayment(body, rateY, termM) {
        const rateM = rateY / 12;
        const precalc = Math.pow(1 + rateM, termM);
        return body * (rateM * precalc) / (precalc - 1);
    }
    monthsToString(months) {
        let result = "";
        const years = Math.floor(months / 12);
        if (years > 0)
            result += years + " лет";
        const monthsLeft = months - (years * 12);
        if (monthsLeft > 0)
            result += " " + monthsLeft + " месяцев";
        return result;
    }
    calcTerm(body, rate, payment) {
        const a = payment;
        const b = body * rate + payment;
        const c = Math.log(a / b) / Math.log(1 + rate);
        return c;
    }
};
McalcOldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mcalc-old',
        template: __webpack_require__(/*! raw-loader!./mcalc-old.component.html */ "./node_modules/raw-loader/index.js!./src/app/mcalc-old/mcalc-old.component.html"),
        styles: [__webpack_require__(/*! ./mcalc-old.component.css */ "./src/app/mcalc-old/mcalc-old.component.css")]
    })
], McalcOldComponent);

class MonthlyStats {
    static Create(prev, settings) {
        const result = new MonthlyStats();
        result.Calculate(prev, settings);
        return result;
    }
    Calculate(prev, settings) {
        if (prev == null) {
            this.Initialize(settings);
        }
        else {
            this.monthNumber = prev.monthNumber + 1;
            // Индексация
            this.canPay = prev.canPay * (1 + settings.payInflationM);
            this.propPrice = prev.propPrice * (1 + settings.propInflationM);
            this.comFees = prev.comFees * (1 + settings.comFeesInflationM);
            this.propTax = settings.propTaxM;
            // Расчет ипотеки
            this.mortPayInterest = prev.mortBodyRemain * settings.mortRateM;
            this.mortPayBody = Math.min(this.canPay - this.mortPayInterest - this.comFees - this.propTax, prev.mortBodyRemain);
            this.mortBodyRemain = prev.mortBodyRemain - this.mortPayBody;
            this.mortPaidBody = prev.mortPaidBody + this.mortPayBody;
            this.mortPaidInterest = prev.mortPaidInterest + this.mortPayInterest;
            this.mortOverpay = prev.mortOverpay + this.mortPayInterest + this.comFees + this.propTax;
            // Расчет аренды
            this.rentPay = prev.propPrice < prev.investAmount ? 0 : prev.rentPay * (1 + settings.rentInflationM);
            this.rentPaid = prev.rentPaid + this.rentPay;
            if (prev.propPrice < prev.investAmount && prev.rentPay != 0) {
                this.investInterest = (prev.investAmount - prev.propPrice) * settings.investRateM;
                this.investAmount = prev.investAmount - prev.propPrice + this.investInterest + (this.canPay - this.rentPay - this.propTax - this.comFees);
            }
            else {
                this.investInterest = prev.investAmount * settings.investRateM;
                this.investAmount = prev.investAmount + this.investInterest + (this.canPay - this.rentPay) + (prev.rentPay == 0 ? -this.propTax - this.comFees : 0);
            }
        }
    }
    Initialize(settings) {
        this.monthNumber = 1;
        this.canPay = settings.canPayM;
        this.mortPayInterest = (settings.propPrice - settings.currMoney) * settings.mortRateM;
        console.log(settings.propPrice - settings.currMoney);
        this.comFees = settings.comFeesM;
        this.propTax = settings.propTaxM;
        this.mortPayBody = settings.canPayM - this.mortPayInterest - this.comFees - this.propTax;
        this.mortBodyRemain = settings.propPrice - this.mortPayBody - settings.currMoney;
        this.mortPaidBody = this.mortPayBody;
        this.mortPaidInterest = this.mortPayInterest;
        this.rentPay = settings.rentM;
        this.rentPaid = this.rentPay;
        this.investInterest = settings.currMoney * settings.investRateM;
        this.investAmount = settings.currMoney + this.investInterest + (this.canPay - this.rentPay);
        this.propPrice = settings.propPrice;
        this.mortOverpay = this.mortPayInterest + this.comFees + this.propTax;
    }
    IsDone() {
        return this.mortBodyRemain <= 0 && this.investAmount >= this.propPrice;
    }
}
class Settings {
    constructor() {
        this.propPrice = 7000000; // цена квартиры
        this.currMoney = 1000000; // сейчас в наличии денег
        this.canPayM = 70000; // могу платить, в мес
        this.mortRateY = 10; // ставка по ипотеке, % в год
        this.investRateY = 6; // ставка по вкладу, % в год
        this.rentM = 35000; // цена аренды, в мес
        this.propInflationY = 2; // удорожание квартиры, % в год
        this.rentInflationY = 2; // удорожание аренды, % в год
        this.comFeesInflationY = 3; // удорожание коммуналки, % в год
        this.payInflationY = 0; // увеличение платежа, % в год
        this.comFeesM = 2500; // коммунальные платежи без счетчиков (фикс), в мес
        this.propTaxY = 40000; // налог, страховка, прочие платежи владения квартирой, в год
    }
    // Расчетные ежемесячные величины
    get propInflationM() { return this.calcYtoM(this.propInflationY); }
    get rentInflationM() { return this.calcYtoM(this.rentInflationY); }
    get payInflationM() { return this.calcYtoM(this.payInflationY); }
    get comFeesInflationM() { return this.calcYtoM(this.comFeesInflationY); }
    get investRateM() { return this.calcYtoM(this.investRateY); }
    get mortRateM() { return this.calcYtoM(this.mortRateY); }
    get propTaxM() { return this.propTaxY / 12; }
    // Расчетные подсказки
    get propPriceIn10Years() { return this.inflatePrice(this.propPrice, this.propInflationM, 120); }
    get rentIn10Years() { return this.inflatePrice(this.rentM, this.rentInflationM, 120); }
    get investmentIn10Years() { return this.inflatePrice(this.currMoney, this.investRateM, 120); }
    get canPayIn10Years() { return this.inflatePrice(this.canPayM, this.payInflationY / 100, 10); }
    get comFeesIn10Years() { return this.inflatePrice(this.comFeesM, this.comFeesInflationM, 120); }
    // Рассчитать увеличение суммы по начальной сумме, ставке за 1 период и числу периодов
    inflatePrice(price, rate, length) {
        return price * Math.pow(1 + rate, length);
    }
    calcYtoM(y) {
        return y / 12 / 100; // TODO: помесячное увеличение даст больший итог чем погодовое, так что ставки не равны
    }
}


/***/ }),

/***/ "./src/app/mort-block/mort-block.component.css":
/*!*****************************************************!*\
  !*** ./src/app/mort-block/mort-block.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mort-panel{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.results-panel{\r\n    margin: 10pt;\r\n    padding: 10pt;\r\n    background-color: #FAFBFC;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9ydC1ibG9jay9tb3J0LWJsb2NrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9tb3J0LWJsb2NrL21vcnQtYmxvY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3J0LXBhbmVse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5yZXN1bHRzLXBhbmVse1xyXG4gICAgbWFyZ2luOiAxMHB0O1xyXG4gICAgcGFkZGluZzogMTBwdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZCRkM7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/mort-block/mort-block.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mort-block/mort-block.component.ts ***!
  \****************************************************/
/*! exports provided: MortBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MortBlockComponent", function() { return MortBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_input_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/input-data-service */ "./src/services/input-data-service.ts");
/* harmony import */ var src_models_mort_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/mort-settings */ "./src/models/mort-settings.ts");
/* harmony import */ var src_services_calculator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/calculator-service */ "./src/services/calculator-service.ts");
/* harmony import */ var src_helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/helpers/сommon-helper */ "./src/helpers/сommon-helper.ts");






let MortBlockComponent = class MortBlockComponent {
    constructor(inputDataService, calculatorService) {
        this.inputDataService = inputDataService;
        this.calculatorService = calculatorService;
        this.settings = new src_models_mort_settings__WEBPACK_IMPORTED_MODULE_3__["MortSettings"]();
        this.displayedColumns = [{ colDef: "monthNo", colHead: "Месяц" },
            { colDef: "interest", colHead: "Уплата процентов" },
            { colDef: "payComFees", colHead: "Коммунальные платежи" },
            { colDef: "payTax", colHead: "Налоги" },
            { colDef: "payDebt", colHead: "Уплата долга" },
            { colDef: "debt", colHead: "Остаток долга" }];
    }
    get resultText() {
        return this.calculatedResult == undefined
            ? ""
            : this.calculatedResult.length < 1
                ? ""
                : "Выплата ипотеки займет " + src_helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_5__["CommonHelper"].monthsToString(this.calculatedResult.length);
    }
    ngOnInit() {
        this.dataSubscription = this.inputDataService.inputData.subscribe((d) => this.onDataChanged(d));
    }
    ngOnDestroy() {
        this.dataSubscription.unsubscribe();
    }
    recalculate() {
        this.calculatedResult = this.calculatorService.calculateMort(this.settings, 0);
    }
    onDataChanged(data) {
        this.input = data;
        this.recalculate();
    }
    //TODO: временно
    sendData() {
        this.calculatorService.setPaymentTableSource(this.calculatedResult, this.displayedColumns);
    }
};
MortBlockComponent.ctorParameters = () => [
    { type: src_services_input_data_service__WEBPACK_IMPORTED_MODULE_2__["InputDataService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_services_input_data_service__WEBPACK_IMPORTED_MODULE_2__["INPUT_DATA_SERVICE_TOKEN"],] }] },
    { type: src_services_calculator_service__WEBPACK_IMPORTED_MODULE_4__["CalculatorService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_services_calculator_service__WEBPACK_IMPORTED_MODULE_4__["CALCULATOR_SERVICE_TOKEN"],] }] }
];
MortBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mort-block',
        template: __webpack_require__(/*! raw-loader!./mort-block.component.html */ "./node_modules/raw-loader/index.js!./src/app/mort-block/mort-block.component.html"),
        styles: [__webpack_require__(/*! ./mort-block.component.css */ "./src/app/mort-block/mort-block.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_services_input_data_service__WEBPACK_IMPORTED_MODULE_2__["INPUT_DATA_SERVICE_TOKEN"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_services_calculator_service__WEBPACK_IMPORTED_MODULE_4__["CALCULATOR_SERVICE_TOKEN"]))
], MortBlockComponent);



/***/ }),

/***/ "./src/app/mort-vs-rent/mort-vs-rent.component.css":
/*!*********************************************************!*\
  !*** ./src/app/mort-vs-rent/mort-vs-rent.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: baseline;\r\n}\r\n\r\n.divBox {\r\n    display: grid;\r\n    grid-template-columns: repeat(6, 1fr); \r\n    width: 100%;\r\n    max-width: 1500px;\r\n}\r\n\r\n.narrowBox {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-column: span 2;\r\n    justify-content: stretch;\r\n    margin: 40px;\r\n}\r\n\r\nh1 {\r\n    grid-column: span 6;\r\n    align-content: center;\r\n    text-align: center;\r\n}\r\n\r\nh2 {\r\n    grid-column: span 3;\r\n    align-content: center;\r\n    text-align: center;\r\n}\r\n\r\ndiv {\r\n    grid-column: span 3;\r\n}\r\n\r\nmat-form-field {\r\n    margin: 0 0 20px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9ydC12cy1yZW50L21vcnQtdnMtcmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9tb3J0LXZzLXJlbnQvbW9ydC12cy1yZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi5kaXZCb3gge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDE1MDBweDtcclxufVxyXG5cclxuLm5hcnJvd0JveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgICBtYXJnaW46IDQwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDY7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDM7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiAzO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/mort-vs-rent/mort-vs-rent.component.ts":
/*!********************************************************!*\
  !*** ./src/app/mort-vs-rent/mort-vs-rent.component.ts ***!
  \********************************************************/
/*! exports provided: MortVsRentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MortVsRentComponent", function() { return MortVsRentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MortVsRentComponent = class MortVsRentComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MortVsRentComponent.prototype, "settings", void 0);
MortVsRentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mort-vs-rent',
        template: __webpack_require__(/*! raw-loader!./mort-vs-rent.component.html */ "./node_modules/raw-loader/index.js!./src/app/mort-vs-rent/mort-vs-rent.component.html"),
        styles: [__webpack_require__(/*! ./mort-vs-rent.component.css */ "./src/app/mort-vs-rent/mort-vs-rent.component.css")]
    })
], MortVsRentComponent);



/***/ }),

/***/ "./src/app/not-found-component/not-found-component.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/not-found-component/not-found-component.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC1jb21wb25lbnQvbm90LWZvdW5kLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/not-found-component/not-found-component.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/not-found-component/not-found-component.component.ts ***!
  \**********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found-component',
        template: __webpack_require__(/*! raw-loader!./not-found-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/not-found-component/not-found-component.component.html"),
        styles: [__webpack_require__(/*! ./not-found-component.component.css */ "./src/app/not-found-component/not-found-component.component.css")]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/payment-table/payment-table.component.css":
/*!***********************************************************!*\
  !*** ./src/app/payment-table/payment-table.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-container {\r\n    height: 400px;\r\n    overflow: auto;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC10YWJsZS9wYXltZW50LXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQtdGFibGUvcGF5bWVudC10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/payment-table/payment-table.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/payment-table/payment-table.component.ts ***!
  \**********************************************************/
/*! exports provided: PaymentTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentTableComponent", function() { return PaymentTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_calculator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/calculator-service */ "./src/services/calculator-service.ts");



let PaymentTableComponent = class PaymentTableComponent {
    constructor(calculatorService) {
        this.calculatorService = calculatorService;
    }
    get displayedColumns() { return this.columnDefinitions ? this.columnDefinitions.map(e => e.colDef) : null; }
    ngOnInit() {
        this.dataSubscription = this.calculatorService.paymentTableData.subscribe((d) => this.onDataChanged(d));
    }
    ngOnDestroy() {
        this.dataSubscription.unsubscribe();
        this.columnDefinitions.slice();
    }
    onDataChanged(d) {
        this.dataSource = d.dataSource;
        this.columnDefinitions = d.columnDefinitions;
    }
};
PaymentTableComponent.ctorParameters = () => [
    { type: src_services_calculator_service__WEBPACK_IMPORTED_MODULE_2__["CalculatorService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_services_calculator_service__WEBPACK_IMPORTED_MODULE_2__["CALCULATOR_SERVICE_TOKEN"],] }] }
];
PaymentTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-table',
        template: __webpack_require__(/*! raw-loader!./payment-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/payment-table/payment-table.component.html"),
        styles: [__webpack_require__(/*! ./payment-table.component.css */ "./src/app/payment-table/payment-table.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_services_calculator_service__WEBPACK_IMPORTED_MODULE_2__["CALCULATOR_SERVICE_TOKEN"]))
], PaymentTableComponent);



/***/ }),

/***/ "./src/app/rent-block/rent-block.component.css":
/*!*****************************************************!*\
  !*** ./src/app/rent-block/rent-block.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rent-panel {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.results-panel{\r\n    margin: 10pt;\r\n    padding: 10pt;\r\n    background-color: #FAFBFC;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVudC1ibG9jay9yZW50LWJsb2NrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9yZW50LWJsb2NrL3JlbnQtYmxvY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZW50LXBhbmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucmVzdWx0cy1wYW5lbHtcclxuICAgIG1hcmdpbjogMTBwdDtcclxuICAgIHBhZGRpbmc6IDEwcHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQkZDO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/rent-block/rent-block.component.ts":
/*!****************************************************!*\
  !*** ./src/app/rent-block/rent-block.component.ts ***!
  \****************************************************/
/*! exports provided: RentBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentBlockComponent", function() { return RentBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_input_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/input-data-service */ "./src/services/input-data-service.ts");
/* harmony import */ var _models_rent_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/rent-settings */ "./src/models/rent-settings.ts");
/* harmony import */ var _helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/сommon-helper */ "./src/helpers/сommon-helper.ts");
/* harmony import */ var _services_calculator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/calculator-service */ "./src/services/calculator-service.ts");






let RentBlockComponent = class RentBlockComponent {
    constructor(inputDataService, calculatorService) {
        this.inputDataService = inputDataService;
        this.calculatorService = calculatorService;
        this.settings = new _models_rent_settings__WEBPACK_IMPORTED_MODULE_3__["RentSettings"]();
        this.displayedColumns = [{ colDef: "monthNo", colHead: "Месяц" },
            { colDef: "payRent", colHead: "Уплата аренды" },
            { colDef: "interest", colHead: "Капитализация процентов" },
            { colDef: "addToInvest", colHead: "Внесено на вклад" },
            { colDef: "totalDeposit", colHead: "Остаток по вкладу" }];
    }
    get resultText() {
        return this.calculatedResult == undefined
            ? ""
            : this.calculatedResult.length < 1
                ? ""
                : "Накопите на квартиру за " + _helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_4__["CommonHelper"].monthsToString(this.calculatedResult.length);
    }
    ngOnInit() {
        this.dataSubscription = this.inputDataService.inputData.subscribe((d) => this.onDataChanges(d));
    }
    ngOnDestroy() {
        this.dataSubscription.unsubscribe();
    }
    get InvestIn10Years() { return this.input == null ? 0 : _helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_4__["CommonHelper"].inflatePrice(this.input.currMoney, this.settings.investRateMFrac, 120); }
    onDataChanges(data) {
        this.input = data;
        this.recalculate();
    }
    recalculate() {
        this.calculatedResult = this.calculatorService.calulateRent(this.settings, 0);
    }
    //TODO: временно
    sendData() {
        this.calculatorService.setPaymentTableSource(this.calculatedResult, this.displayedColumns);
    }
};
RentBlockComponent.ctorParameters = () => [
    { type: src_services_input_data_service__WEBPACK_IMPORTED_MODULE_2__["InputDataService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_services_input_data_service__WEBPACK_IMPORTED_MODULE_2__["INPUT_DATA_SERVICE_TOKEN"],] }] },
    { type: _services_calculator_service__WEBPACK_IMPORTED_MODULE_5__["CalculatorService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_services_calculator_service__WEBPACK_IMPORTED_MODULE_5__["CALCULATOR_SERVICE_TOKEN"],] }] }
];
RentBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rent-block',
        template: __webpack_require__(/*! raw-loader!./rent-block.component.html */ "./node_modules/raw-loader/index.js!./src/app/rent-block/rent-block.component.html"),
        styles: [__webpack_require__(/*! ./rent-block.component.css */ "./src/app/rent-block/rent-block.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_services_input_data_service__WEBPACK_IMPORTED_MODULE_2__["INPUT_DATA_SERVICE_TOKEN"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_calculator_service__WEBPACK_IMPORTED_MODULE_5__["CALCULATOR_SERVICE_TOKEN"]))
], RentBlockComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/helpers/settings-helper.ts":
/*!****************************************!*\
  !*** ./src/helpers/settings-helper.ts ***!
  \****************************************/
/*! exports provided: SettingsHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsHelper", function() { return SettingsHelper; });
/* harmony import */ var _variable_settings_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variable-settings-calculator */ "./src/helpers/variable-settings-calculator.ts");
/* harmony import */ var _ommon_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./сommon-helper */ "./src/helpers/сommon-helper.ts");


class SettingsHelper {
    constructor(localMonth, globalMonth) {
        this.localMonth = localMonth;
        this.globalMonth = globalMonth;
    }
    // Рассчитать увеличение суммы по начальной сумме, ставке за 1 период (дробь) и числу периодов
    inflatePrice(price, rateFrac) {
        return _ommon_helper__WEBPACK_IMPORTED_MODULE_1__["CommonHelper"].inflatePrice(price, rateFrac, this.localMonth);
    }
    getCurrentPay(pay, inflationRate) {
        let value = this.getByGlobalMonth(pay);
        return _ommon_helper__WEBPACK_IMPORTED_MODULE_1__["CommonHelper"].inflateYearly(value.result, inflationRate, this.globalMonth - value.month);
    }
    getCurrentRent(rent, inflationRate) {
        let value = this.getByLocalMonth(rent);
        return _ommon_helper__WEBPACK_IMPORTED_MODULE_1__["CommonHelper"].inflateYearly(value.result, inflationRate, this.localMonth - value.month);
    }
    getByLocalMonth(dictionary) { return this.currentValue(dictionary, this.localMonth); }
    getByGlobalMonth(dictionary) { return this.currentValue(dictionary, this.globalMonth); }
    //Вытаскивает текущую месячную цену из словаря
    currentValue(dictionary, month) {
        return _variable_settings_calculator__WEBPACK_IMPORTED_MODULE_0__["VariableSettingsCalculator"].currentValue(dictionary, month ? month : this.localMonth);
    }
}
SettingsHelper.ctorParameters = () => [
    { type: Number },
    { type: Number }
];


/***/ }),

/***/ "./src/helpers/variable-settings-calculator.ts":
/*!*****************************************************!*\
  !*** ./src/helpers/variable-settings-calculator.ts ***!
  \*****************************************************/
/*! exports provided: VariableSettingsCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableSettingsCalculator", function() { return VariableSettingsCalculator; });
class VariableSettingsCalculator {
    static currentValue(dictionary, index) {
        const keys = Object.keys(dictionary);
        return keys.indexOf(`${index}`) >= 0 ? { result: dictionary[index], month: index } : this.currentValue(dictionary, --index);
    }
}


/***/ }),

/***/ "./src/helpers/сommon-helper.ts":
/*!**************************************!*\
  !*** ./src/helpers/сommon-helper.ts ***!
  \**************************************/
/*! exports provided: CommonHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonHelper", function() { return CommonHelper; });
class CommonHelper {
    // Рассчитать увеличение суммы по начальной сумме, ставке за 1 период (дробь) и числу периодов
    static inflatePrice(price, rateFrac, length) {
        return price * Math.pow(1 + rateFrac, length);
    }
    // перевод годовой ставки в месячную дробь
    static yearRateToMonthlyFrac(rate) {
        return rate / 12 / 100;
    }
    // перевод эффективной годовой ставки в номинальную месячную
    static yearEffRateToMonthlyFrac(effRate) {
        return Math.pow(1 + (effRate / 100), 1 / 12) - 1;
    }
    // Расчет значения в заданном месяце при увеличении раз в год на заданную ставку.
    static inflateYearly(amount, rate, months) {
        return amount * Math.pow(1 + (rate / 100), Math.floor(months / 12));
    }
    // Получить сумму процентов за месяц по годовой ставке
    static getMonthInterest(amount, rate) {
        return amount * this.yearRateToMonthlyFrac(rate);
    }
    static monthsToString(months) {
        const years = Math.floor(months / 12);
        const singles = years - 10 * Math.floor(years / 10);
        let result = "";
        if (years > 0) {
            const yearString = (years > 10 && years < 20)
                ? "лет"
                : singles == 1
                    ? "год"
                    : (singles > 1 && singles < 5)
                        ? "года"
                        : "лет";
            result += years + " " + yearString;
        }
        const singleMonths = months - 12 * years;
        if (singleMonths > 0) {
            if (years > 0) {
                result += " ";
            }
            result += singleMonths + " "
                + (singleMonths == 1
                    ? "месяц"
                    : singleMonths < 5
                        ? "месяца"
                        : "месяцев");
        }
        return result;
    }
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/models/base-block.ts":
/*!**********************************!*\
  !*** ./src/models/base-block.ts ***!
  \**********************************/
/*! exports provided: BlockTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockTypes", function() { return BlockTypes; });
var BlockTypes;
(function (BlockTypes) {
    BlockTypes[BlockTypes["Mortgage"] = 0] = "Mortgage";
    BlockTypes[BlockTypes["Rent"] = 1] = "Rent";
})(BlockTypes || (BlockTypes = {}));


/***/ }),

/***/ "./src/models/input-data.ts":
/*!**********************************!*\
  !*** ./src/models/input-data.ts ***!
  \**********************************/
/*! exports provided: InputData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputData", function() { return InputData; });
/* harmony import */ var _helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helpers/сommon-helper */ "./src/helpers/сommon-helper.ts");

class InputData {
    constructor() {
        this.currMoney = 1000000; // сейчас в наличии денег
        this.canPayM = { 0: 70000 }; // могу платить, в мес
        this.mortRateY = 3; // ставка по ипотеке, % в год
        this.investRateY = 3; // ставка по вкладу, % в год
        this.propInflationY = 2; // удорожание квартиры, % в год
        this.rentInflationY = 2; // удорожание аренды, % в год
        this.comFeesInflationY = 3; // удорожание коммуналки, % в год
        this.payInflationY = 0; // увеличение платежа, % в год
        this.flatPrice = 7000000; //цена квартиры
    }
    get propPriceIn10Years() { return _helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_0__["CommonHelper"].inflateYearly(this.flatPrice, this.propInflationY, 120); }
    get canPayIn10Years() { return _helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_0__["CommonHelper"].inflateYearly(this.canPayM[0], this.payInflationY, 120); }
}


/***/ }),

/***/ "./src/models/mort-settings.ts":
/*!*************************************!*\
  !*** ./src/models/mort-settings.ts ***!
  \*************************************/
/*! exports provided: MortSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MortSettings", function() { return MortSettings; });
/* harmony import */ var _helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/сommon-helper */ "./src/helpers/сommon-helper.ts");

class MortSettings {
    constructor() {
        this.propPrice = 7000000; // цена квартиры
        this.mortRate = 6; // ставка по ипотеке
        this.comFeesM = 3500; // коммунальные платежи без счетчиков (фикс), в мес
        this.propTaxY = 30000; // налог, страховка, прочие платежи владения квартирой, в год
        this.comRateY = 2; // удорожание коммуналки, % в год
    }
    get comFeesIn10Years() { return _helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_0__["CommonHelper"].inflateYearly(this.comFeesM, this.comRateY, 120); }
}


/***/ }),

/***/ "./src/models/rent-settings.ts":
/*!*************************************!*\
  !*** ./src/models/rent-settings.ts ***!
  \*************************************/
/*! exports provided: RentSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentSettings", function() { return RentSettings; });
/* harmony import */ var src_helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/helpers/сommon-helper */ "./src/helpers/сommon-helper.ts");

class RentSettings {
    constructor() {
        this.rentMonthCost = { [0]: 30000 }; // Стоимость месячной аренды
        this.rentYearRate = 2; // Годовая ставка удорожания аренды
        this.investRateY = 6; // Ставка по влкаду в год
    }
    get investRateMFrac() { return src_helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_0__["CommonHelper"].yearRateToMonthlyFrac(this.investRateY); }
    get rentMonthRate() { return src_helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_0__["CommonHelper"].yearRateToMonthlyFrac(this.rentYearRate); }
    get rentIn10Years() { return src_helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_0__["CommonHelper"].inflateYearly(this.rentMonthCost[0], this.rentYearRate, 120); }
}


/***/ }),

/***/ "./src/services/block-service.ts":
/*!***************************************!*\
  !*** ./src/services/block-service.ts ***!
  \***************************************/
/*! exports provided: BLOCK_SERVICE_TOKEN, BlockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_SERVICE_TOKEN", function() { return BLOCK_SERVICE_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockService", function() { return BlockService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


const BLOCK_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('block_service');
class BlockService {
    constructor() {
        this._blocks = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    get blocks() { return this._blocks.asObservable(); }
    addBlock(blockType) { this._blocks.next({ type: blockType }); }
}


/***/ }),

/***/ "./src/services/calculator-service.ts":
/*!********************************************!*\
  !*** ./src/services/calculator-service.ts ***!
  \********************************************/
/*! exports provided: CALCULATOR_SERVICE_TOKEN, CalculatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALCULATOR_SERVICE_TOKEN", function() { return CALCULATOR_SERVICE_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorService", function() { return CalculatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _input_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-data-service */ "./src/services/input-data-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/helpers/сommon-helper */ "./src/helpers/сommon-helper.ts");
/* harmony import */ var src_helpers_settings_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/helpers/settings-helper */ "./src/helpers/settings-helper.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






const CALCULATOR_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('calculator_service');
let CalculatorService = class CalculatorService {
    constructor(inputService) {
        this.inputService = inputService;
        // TOOD: переместить в правильное расположение
        this.paymentTableData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        inputService.inputData.subscribe(data => this.inputData = data);
    }
    //#region Rent
    calulateRent(rentSettings, startMonthNo) {
        return this.calculatePaymentTable(rentSettings, startMonthNo, [], this.makeRentRow, this.shouldMakeRentRow);
    }
    // Расчет строки графика накопление+аренда
    makeRentRow(rentSettings, inputData, prevRow, monthNo, globalMonthNo) {
        const settingsHelper = new src_helpers_settings_helper__WEBPACK_IMPORTED_MODULE_4__["SettingsHelper"](monthNo, globalMonthNo);
        const rentAfterInflate = settingsHelper.getCurrentRent(rentSettings.rentMonthCost, rentSettings.rentYearRate);
        const prevDeposit = prevRow ? prevRow.totalDeposit : inputData.currMoney;
        const interest = src_helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_3__["CommonHelper"].getMonthInterest(prevDeposit, rentSettings.investRateY);
        const addToInvest = settingsHelper.getCurrentPay(inputData.canPayM, inputData.payInflationY) - rentAfterInflate;
        const totalDeposit = prevDeposit + interest + addToInvest;
        let newRow = {
            totalMonthNo: globalMonthNo,
            monthNo: monthNo,
            payRent: rentAfterInflate,
            interest: interest,
            addToInvest: addToInvest,
            totalDeposit: totalDeposit
        };
        return newRow;
    }
    shouldMakeRentRow(row, inputData) {
        return row ? row.totalDeposit < inputData.flatPrice : true;
    }
    //#endregion Rent
    //#region Mortgage
    calculateMort(mortSettings, startMonthNo) {
        return this.calculatePaymentTable(mortSettings, startMonthNo, [], this.makeMortRow, this.shouldMakeMortRow);
    }
    makeMortRow(mortSettings, inputData, prevRow, monthNo, globalMonthNo) {
        const settingsHelper = new src_helpers_settings_helper__WEBPACK_IMPORTED_MODULE_4__["SettingsHelper"](monthNo, globalMonthNo);
        const prevDebt = prevRow ? prevRow.debt : inputData.flatPrice - inputData.currMoney;
        const interest = src_helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_3__["CommonHelper"].getMonthInterest(prevDebt, mortSettings.mortRate);
        const comFees = src_helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_3__["CommonHelper"].inflateYearly(mortSettings.comFeesM, mortSettings.comRateY, monthNo);
        const tax = mortSettings.propTaxY / 12;
        const payDebt = Math.min(prevDebt, settingsHelper.getCurrentPay(inputData.canPayM, inputData.payInflationY) - interest - comFees - tax);
        const newDebt = prevDebt - payDebt;
        let newRow = {
            monthNo: monthNo,
            interest: interest,
            payComFees: comFees,
            payTax: tax,
            payDebt: payDebt,
            debt: newDebt
        };
        return newRow;
    }
    shouldMakeMortRow(row, inputData) {
        return row ? row.debt > 0 : true;
    }
    //#endregion Mortgage
    calculatePaymentTable(settings, startingMonthNo, rows, makeRowFunc, checkFinalFunc) {
        let currMonth = 0;
        let totalMonth = startingMonthNo;
        let lastRow = null;
        do {
            lastRow = makeRowFunc(settings, this.inputData, lastRow, currMonth, totalMonth);
            rows.push(lastRow);
            currMonth++;
            totalMonth++;
        } while (checkFinalFunc(lastRow, this.inputData));
        return rows;
    }
    setPaymentTableSource(data, columnDefinitions) {
        this.paymentTableData.next({ dataSource: data, columnDefinitions: columnDefinitions });
    }
};
CalculatorService.ctorParameters = () => [
    { type: _input_data_service__WEBPACK_IMPORTED_MODULE_1__["InputDataService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_input_data_service__WEBPACK_IMPORTED_MODULE_1__["INPUT_DATA_SERVICE_TOKEN"],] }] }
];
CalculatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_input_data_service__WEBPACK_IMPORTED_MODULE_1__["INPUT_DATA_SERVICE_TOKEN"]))
], CalculatorService);



/***/ }),

/***/ "./src/services/input-data-service.ts":
/*!********************************************!*\
  !*** ./src/services/input-data-service.ts ***!
  \********************************************/
/*! exports provided: INPUT_DATA_SERVICE_TOKEN, InputDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT_DATA_SERVICE_TOKEN", function() { return INPUT_DATA_SERVICE_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDataService", function() { return InputDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_models_input_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/input-data */ "./src/models/input-data.ts");




const INPUT_DATA_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('INPUT_DATA_SERVICE');
let InputDataService = class InputDataService {
    constructor() {
        this.inputData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new src_models_input_data__WEBPACK_IMPORTED_MODULE_3__["InputData"]());
    }
    push(data) { this.inputData.next(data); }
};
InputDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], InputDataService);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sshamov\source\repos\ncalc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map