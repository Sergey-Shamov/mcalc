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

module.exports = "<div>\n\t Выберите тип блока\n</div>\n\n<div class='options'>\n\n\t<button mat-button color='primary' (click)='addMort()'>Ипотека</button>\n\t<button mat-button color='primary' (click)='addRent()'>Накопление</button>\n\n</div>"

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

module.exports = "<app-mort-vs-rent [settings]=\"settings\"></app-mort-vs-rent>        \n     \n<div class='resultsText'>{{resultText}}</div>\n\n\n<div class='header'>\n    <span>номер месяца</span>\n    <span>можно потратить</span>\n    <span>платеж в тело кредита</span>\n    <span>выплачено из тела кредита</span>\n    <span>остаток тела кредита</span>\n    <span>платеж в счет процентов</span>\n    <span>выплачено процентов</span>\n    <span>коммуналка</span>\n    <span>налоги</span>\n    <span>переплата при ипотеке</span>\n    <span>получено процентами по вкладу</span>\n    <span>сумма на вкладе</span>\n    <span>аренда за месяц</span>\n    <span>переплата при аренде</span>\n    <span>цена квартиры</span>\n</div>\n\n<div class='row' *ngFor=\"let item of months\">\n    <span>{{item.monthNumber | number:'1.0-0'}}</span>\n    <span>{{item.canPay | number:'1.0-0'}}</span>\n    <span>{{item.mortPayBody | number:'1.0-0'}}</span>\n    <span>{{item.mortPaidBody | number:'1.0-0'}}</span>\n    <span>{{item.mortBodyRemain | number:'1.0-0'}}</span>\n    <span>{{item.mortPayInterest | number:'1.0-0'}}</span>\n    <span>{{item.mortPaidInterest | number:'1.0-0'}}</span>\n    <span>{{item.comFees | number:'1.0-0'}}</span>\n    <span>{{item.propTax | number:'1.0-0'}}</span>\n    <span class='totalLossColumn'>{{item.mortOverpay | number:'1.0-0'}}</span>\n    <span>{{item.investInterest | number:'1.0-0'}}</span>\n    <span>{{item.investAmount | number:'1.0-0'}}</span>\n    <span>{{item.rentPay | number:'1.0-0'}}</span>\n    <span class='totalLossColumn'>{{item.rentPaid | number:'1.0-0'}}</span>\n    <span>{{item.propPrice | number:'1.0-0'}}</span>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mort-block/mort-block.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mort-block/mort-block.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mort-panel\">\n    <mat-form-field>\n        <input matInput type='number' [(ngModel)]=\"settings.mortRate\" placeholder=\"Ставка по ипотеке, % в год\" />  \n    </mat-form-field>\n    <mat-form-field>\n        <input matInput type='number' [(ngModel)]=\"settings.propTaxY\" placeholder=\"Налог, страховка, в год\" />\n    </mat-form-field>\n    <mat-form-field>\n        <input matInput type='number' [(ngModel)]=\"settings.comFeesM\" placeholder=\"Коммунальные платежи без счетчиков, мес.\" />\n    </mat-form-field>\n    <mat-form-field>\n        <input matInput type='number' [(ngModel)]=\"settings.comRateY\" placeholder=\"Удорожание коммуналки, % в год\" />\n        <mat-hint>Через 10 лет коммуналка будет {{settings.comFeesIn10Years | number:'1.0-0'}}</mat-hint>\n    </mat-form-field>\n    <button mat-flat-button color='primary' (click)='recalculate()'>Пересчитать</button>\n    <div class=\"results-panel\">\n        {{resultText}}\n    </div>\n    <button mat-button (click)='sendData()'>Показать график платежей</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mort-vs-rent/mort-vs-rent.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mort-vs-rent/mort-vs-rent.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"divBox\">\n        <h1>Ипотека или аренда?</h1>\n\n        <h2>Ипотека</h2>\n        <h2>Аренда</h2>\n\n        <div class=\"narrowBox\">\n            <mat-form-field>\n                <input matInput type='number' [(ngModel)]=\"settings.mortRateY\" placeholder=\"Ставка по ипотеке, % в год\" />  \n            </mat-form-field>\n            <mat-form-field>\n                <input matInput type='number' [(ngModel)]=\"settings.propTaxY\" placeholder=\"Налог, страховка, в год\" />\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput type='number' [(ngModel)]=\"settings.comFeesM\" placeholder=\"Коммунальные платежи без счетчиков, мес.\" />\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput type='number' [(ngModel)]=\"settings.comFeesInflationY\" placeholder=\"Удорожание коммуналки, % в год\" />\n                <mat-hint>Через 10 лет коммуналка будет {{settings.comFeesIn10Years | number:'1.0-0'}}</mat-hint>\n            </mat-form-field>\n        </div>\n\n        <div class=\"narrowBox\">\n            <mat-form-field>\n                <input matInput type='number' [(ngModel)]=\"settings.propPrice\" placeholder=\"Цена квартиры\"/>\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput type='number' [(ngModel)]=\"settings.currMoney\" placeholder=\"Денег в наличии\"/>\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput type='number' [(ngModel)]=\"settings.canPayM\" placeholder=\"Могу платить в месяц\"/>\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput type='number' [(ngModel)]=\"settings.propInflationY\" placeholder=\"Удорожание квартиры, % в год\" />\n                <mat-hint>Через 10 лет квартира будет стоить {{settings.propPriceIn10Years | number:'1.0-0'}}</mat-hint>\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput type='number' [(ngModel)]=\"settings.payInflationY\" placeholder=\"Увеличение платежа, % в год\" />\n                <mat-hint>Через 10 лет макс. платеж будет {{settings.canPayIn10Years | number:'1.0-0'}}</mat-hint>\n            </mat-form-field>\n        </div>\n\n        <div class=\"narrowBox\">\n            <mat-form-field>\n                <input matInput type='number' [(ngModel)]=\"settings.rentM\" placeholder=\"Цена аренды в месяц\" />\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput type='number' [(ngModel)]=\"settings.investRateY\" placeholder=\"Ставка по вкладу, % в год\" />\n                <mat-hint>Через 10 лет на вкладе будет {{settings.investmentIn10Years | number:'1.0-0'}}</mat-hint>\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput type='number' [(ngModel)]=\"settings.rentInflationY\" placeholder=\"Удорожание аренды, % в год\" />\n                <mat-hint>Через 10 лет аренда будет {{settings.rentIn10Years | number:'1.0-0'}}</mat-hint>\n            </mat-form-field>\n        </div>\n\n        <div>Результат расчета ипотеки</div>\n        <div>Результат расчета аренды</div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/not-found-component/not-found-component.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/not-found-component/not-found-component.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>404 Not Found</h1>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/payment-table/payment-table.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/payment-table/payment-table.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='table-container'>\n    <table mat-table #table [dataSource]=\"dataSource\">\n        <ng-container *ngFor=\"let column of columnDefinitions\" matColumnDef=\"{{column.colDef}}\">\n            <th mat-header-cell *matHeaderCellDef> {{column.colHead}} </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row[column.colDef]}} </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_block_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/block-service */ "./src/services/block-service.ts");
/* harmony import */ var src_models_base_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/base-block */ "./src/models/base-block.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");





var AddBlockDialogComponent = /** @class */ (function () {
    function AddBlockDialogComponent(blockService, dialogRef) {
        this.blockService = blockService;
        this.dialogRef = dialogRef;
    }
    AddBlockDialogComponent.prototype.onAddBlockClick = function (type) {
        this.blockService.addBlock(type);
        this.dialogRef.close();
    };
    AddBlockDialogComponent.prototype.addRent = function () { this.onAddBlockClick(src_models_base_block__WEBPACK_IMPORTED_MODULE_3__["BlockTypes"].Rent); };
    AddBlockDialogComponent.prototype.addMort = function () { this.onAddBlockClick(src_models_base_block__WEBPACK_IMPORTED_MODULE_3__["BlockTypes"].Mortgage); };
    AddBlockDialogComponent.prototype.ngOnInit = function () {
    };
    AddBlockDialogComponent.ctorParameters = function () { return [
        { type: src_services_block_service__WEBPACK_IMPORTED_MODULE_2__["BlockService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_services_block_service__WEBPACK_IMPORTED_MODULE_2__["BLOCK_SERVICE_TOKEN"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }
    ]; };
    AddBlockDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-block-dialog',
            template: __webpack_require__(/*! raw-loader!./add-block-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-block-dialog/add-block-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-block-dialog.component.css */ "./src/app/add-block-dialog/add-block-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_services_block_service__WEBPACK_IMPORTED_MODULE_2__["BLOCK_SERVICE_TOKEN"]))
    ], AddBlockDialogComponent);
    return AddBlockDialogComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mortgage-calculator';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mort_vs_rent_mort_vs_rent_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mort-vs-rent/mort-vs-rent.component */ "./src/app/mort-vs-rent/mort-vs-rent.component.ts");
/* harmony import */ var _rent_block_rent_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rent-block/rent-block.component */ "./src/app/rent-block/rent-block.component.ts");
/* harmony import */ var src_services_input_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/input-data-service */ "./src/services/input-data-service.ts");
/* harmony import */ var _mcalc_old_mcalc_old_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mcalc-old/mcalc-old.component */ "./src/app/mcalc-old/mcalc-old.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
























var appRoutes = [
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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlockComponent = /** @class */ (function () {
    function BlockComponent() {
    }
    BlockComponent.prototype.ngOnInit = function () {
    };
    BlockComponent.prototype.checkType = function (blockType) {
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
    return BlockComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_block_dialog_add_block_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-block-dialog/add-block-dialog.component */ "./src/app/add-block-dialog/add-block-dialog.component.ts");
/* harmony import */ var src_services_block_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/block-service */ "./src/services/block-service.ts");





var ColumnBlockComponent = /** @class */ (function () {
    function ColumnBlockComponent(blockService, dialog) {
        this.blockService = blockService;
        this.dialog = dialog;
        this.blocks = [];
    }
    ColumnBlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blockService.blocks.subscribe(function (b) { return _this.blocks.push(b); });
    };
    ColumnBlockComponent.prototype.onAddBlockClick = function () {
        var dialogRef = this.dialog.open(_add_block_dialog_add_block_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddBlockDialogComponent"]);
    };
    ColumnBlockComponent.ctorParameters = function () { return [
        { type: src_services_block_service__WEBPACK_IMPORTED_MODULE_4__["BlockService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_services_block_service__WEBPACK_IMPORTED_MODULE_4__["BLOCK_SERVICE_TOKEN"],] }] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    ColumnBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-column-block',
            template: __webpack_require__(/*! raw-loader!./column-block.component.html */ "./node_modules/raw-loader/index.js!./src/app/column-block/column-block.component.html"),
            styles: [__webpack_require__(/*! ./column-block.component.css */ "./src/app/column-block/column-block.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_services_block_service__WEBPACK_IMPORTED_MODULE_4__["BLOCK_SERVICE_TOKEN"]))
    ], ColumnBlockComponent);
    return ColumnBlockComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_models_input_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/input-data */ "./src/models/input-data.ts");
/* harmony import */ var src_services_input_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/input-data-service */ "./src/services/input-data-service.ts");




var CommonSettingsPanelComponent = /** @class */ (function () {
    function CommonSettingsPanelComponent(inputDataService) {
        this.inputDataService = inputDataService;
        this.input = new src_models_input_data__WEBPACK_IMPORTED_MODULE_2__["InputData"]();
    }
    Object.defineProperty(CommonSettingsPanelComponent.prototype, "canPayMonth", {
        get: function () { return this.input.canPayM[0]; },
        set: function (value) { this.input.canPayM[0] = value; },
        enumerable: true,
        configurable: true
    });
    CommonSettingsPanelComponent.prototype.ngOnInit = function () {
        this.applyInput();
    };
    CommonSettingsPanelComponent.prototype.applyInput = function () {
        this.inputDataService.push(this.input);
    };
    CommonSettingsPanelComponent.ctorParameters = function () { return [
        { type: src_services_input_data_service__WEBPACK_IMPORTED_MODULE_3__["InputDataService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_services_input_data_service__WEBPACK_IMPORTED_MODULE_3__["INPUT_DATA_SERVICE_TOKEN"],] }] }
    ]; };
    CommonSettingsPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-common-settings-panel',
            template: __webpack_require__(/*! raw-loader!./common-settings-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/common-settings-panel/common-settings-panel.component.html"),
            styles: [__webpack_require__(/*! ./common-settings-panel.component.css */ "./src/app/common-settings-panel/common-settings-panel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_services_input_data_service__WEBPACK_IMPORTED_MODULE_3__["INPUT_DATA_SERVICE_TOKEN"]))
    ], CommonSettingsPanelComponent);
    return CommonSettingsPanelComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainCalcPageComponent = /** @class */ (function () {
    function MainCalcPageComponent() {
    }
    MainCalcPageComponent.prototype.ngOnInit = function () {
    };
    MainCalcPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-calc-page',
            template: __webpack_require__(/*! raw-loader!./main-calc-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/main-calc-page/main-calc-page.component.html"),
            styles: [__webpack_require__(/*! ./main-calc-page.component.css */ "./src/app/main-calc-page/main-calc-page.component.css")]
        })
    ], MainCalcPageComponent);
    return MainCalcPageComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var McalcOldComponent = /** @class */ (function () {
    function McalcOldComponent() {
        this.title = 'mortgage-calculator';
        this.settings = new Settings();
        this.resultText = "";
    }
    McalcOldComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(McalcOldComponent.prototype, "months", {
        get: function () {
            var result = [];
            var stat = null;
            this.resultText = "";
            do {
                stat = MonthlyStats.Create(stat, this.settings);
                result.push(stat);
            } while ((!stat.IsDone()) && (result.length < 360));
            var resCount = result.length;
            if (resCount > 360) {
                this.resultText = "Ипотека займет более 30 лет. Возможна ошибка в исходных данных.";
            }
            else {
                var lastRow = result[resCount - 1];
                var mortRow = result.find(function (a) { return a.mortBodyRemain == 0 && a.mortPayBody != 0 && a.mortPayInterest != 0; });
                var investRow = result.find(function (a) { return a.investAmount >= a.propPrice; });
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
        },
        enumerable: true,
        configurable: true
    });
    ;
    // Расчет величины аннуитетного платежа. Сумма, годовая ставка, срок в месяцах.
    McalcOldComponent.prototype.calcAnnPayment = function (body, rateY, termM) {
        var rateM = rateY / 12;
        var precalc = Math.pow(1 + rateM, termM);
        return body * (rateM * precalc) / (precalc - 1);
    };
    McalcOldComponent.prototype.monthsToString = function (months) {
        var result = "";
        var years = Math.floor(months / 12);
        if (years > 0)
            result += years + " лет";
        var monthsLeft = months - (years * 12);
        if (monthsLeft > 0)
            result += " " + monthsLeft + " месяцев";
        return result;
    };
    McalcOldComponent.prototype.calcTerm = function (body, rate, payment) {
        var a = payment;
        var b = body * rate + payment;
        var c = Math.log(a / b) / Math.log(1 + rate);
        return c;
    };
    McalcOldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mcalc-old',
            template: __webpack_require__(/*! raw-loader!./mcalc-old.component.html */ "./node_modules/raw-loader/index.js!./src/app/mcalc-old/mcalc-old.component.html"),
            styles: [__webpack_require__(/*! ./mcalc-old.component.css */ "./src/app/mcalc-old/mcalc-old.component.css")]
        })
    ], McalcOldComponent);
    return McalcOldComponent;
}());

var MonthlyStats = /** @class */ (function () {
    function MonthlyStats() {
    }
    MonthlyStats.Create = function (prev, settings) {
        var result = new MonthlyStats();
        result.Calculate(prev, settings);
        return result;
    };
    MonthlyStats.prototype.Calculate = function (prev, settings) {
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
    };
    MonthlyStats.prototype.Initialize = function (settings) {
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
    };
    MonthlyStats.prototype.IsDone = function () {
        return this.mortBodyRemain <= 0 && this.investAmount >= this.propPrice;
    };
    return MonthlyStats;
}());

var Settings = /** @class */ (function () {
    function Settings() {
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
    Object.defineProperty(Settings.prototype, "propInflationM", {
        // Расчетные ежемесячные величины
        get: function () { return this.calcYtoM(this.propInflationY); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Settings.prototype, "rentInflationM", {
        get: function () { return this.calcYtoM(this.rentInflationY); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Settings.prototype, "payInflationM", {
        get: function () { return this.calcYtoM(this.payInflationY); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Settings.prototype, "comFeesInflationM", {
        get: function () { return this.calcYtoM(this.comFeesInflationY); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Settings.prototype, "investRateM", {
        get: function () { return this.calcYtoM(this.investRateY); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Settings.prototype, "mortRateM", {
        get: function () { return this.calcYtoM(this.mortRateY); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Settings.prototype, "propTaxM", {
        get: function () { return this.propTaxY / 12; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Settings.prototype, "propPriceIn10Years", {
        // Расчетные подсказки
        get: function () { return this.inflatePrice(this.propPrice, this.propInflationM, 120); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Settings.prototype, "rentIn10Years", {
        get: function () { return this.inflatePrice(this.rentM, this.rentInflationM, 120); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Settings.prototype, "investmentIn10Years", {
        get: function () { return this.inflatePrice(this.currMoney, this.investRateM, 120); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Settings.prototype, "canPayIn10Years", {
        get: function () { return this.inflatePrice(this.canPayM, this.payInflationY / 100, 10); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Settings.prototype, "comFeesIn10Years", {
        get: function () { return this.inflatePrice(this.comFeesM, this.comFeesInflationM, 120); },
        enumerable: true,
        configurable: true
    });
    // Рассчитать увеличение суммы по начальной сумме, ставке за 1 период и числу периодов
    Settings.prototype.inflatePrice = function (price, rate, length) {
        return price * Math.pow(1 + rate, length);
    };
    Settings.prototype.calcYtoM = function (y) {
        return y / 12 / 100; // TODO: помесячное увеличение даст больший итог чем погодовое, так что ставки не равны
    };
    return Settings;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_input_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/input-data-service */ "./src/services/input-data-service.ts");
/* harmony import */ var src_models_mort_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/mort-settings */ "./src/models/mort-settings.ts");
/* harmony import */ var src_services_calculator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/calculator-service */ "./src/services/calculator-service.ts");
/* harmony import */ var src_helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/helpers/сommon-helper */ "./src/helpers/сommon-helper.ts");






var MortBlockComponent = /** @class */ (function () {
    function MortBlockComponent(inputDataService, calculatorService) {
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
    Object.defineProperty(MortBlockComponent.prototype, "resultText", {
        get: function () {
            return this.calculatedResult == undefined
                ? ""
                : this.calculatedResult.length < 1
                    ? ""
                    : "Выплата ипотеки займет " + src_helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_5__["CommonHelper"].monthsToString(this.calculatedResult.length);
        },
        enumerable: true,
        configurable: true
    });
    MortBlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSubscription = this.inputDataService.inputData.subscribe(function (d) { return _this.onDataChanged(d); });
    };
    MortBlockComponent.prototype.ngOnDestroy = function () {
        this.dataSubscription.unsubscribe();
    };
    MortBlockComponent.prototype.recalculate = function () {
        this.calculatedResult = this.calculatorService.calculateMort(this.settings, 0);
    };
    MortBlockComponent.prototype.onDataChanged = function (data) {
        this.input = data;
        this.recalculate();
    };
    //TODO: временно
    MortBlockComponent.prototype.sendData = function () {
        this.calculatorService.setPaymentTableSource(this.calculatedResult, this.displayedColumns);
    };
    MortBlockComponent.ctorParameters = function () { return [
        { type: src_services_input_data_service__WEBPACK_IMPORTED_MODULE_2__["InputDataService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_services_input_data_service__WEBPACK_IMPORTED_MODULE_2__["INPUT_DATA_SERVICE_TOKEN"],] }] },
        { type: src_services_calculator_service__WEBPACK_IMPORTED_MODULE_4__["CalculatorService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_services_calculator_service__WEBPACK_IMPORTED_MODULE_4__["CALCULATOR_SERVICE_TOKEN"],] }] }
    ]; };
    MortBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mort-block',
            template: __webpack_require__(/*! raw-loader!./mort-block.component.html */ "./node_modules/raw-loader/index.js!./src/app/mort-block/mort-block.component.html"),
            styles: [__webpack_require__(/*! ./mort-block.component.css */ "./src/app/mort-block/mort-block.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_services_input_data_service__WEBPACK_IMPORTED_MODULE_2__["INPUT_DATA_SERVICE_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_services_calculator_service__WEBPACK_IMPORTED_MODULE_4__["CALCULATOR_SERVICE_TOKEN"]))
    ], MortBlockComponent);
    return MortBlockComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MortVsRentComponent = /** @class */ (function () {
    function MortVsRentComponent() {
    }
    MortVsRentComponent.prototype.ngOnInit = function () {
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
    return MortVsRentComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found-component',
            template: __webpack_require__(/*! raw-loader!./not-found-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/not-found-component/not-found-component.component.html"),
            styles: [__webpack_require__(/*! ./not-found-component.component.css */ "./src/app/not-found-component/not-found-component.component.css")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_calculator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/calculator-service */ "./src/services/calculator-service.ts");



var PaymentTableComponent = /** @class */ (function () {
    function PaymentTableComponent(calculatorService) {
        this.calculatorService = calculatorService;
    }
    Object.defineProperty(PaymentTableComponent.prototype, "displayedColumns", {
        get: function () { return this.columnDefinitions ? this.columnDefinitions.map(function (e) { return e.colDef; }) : null; },
        enumerable: true,
        configurable: true
    });
    PaymentTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSubscription = this.calculatorService.paymentTableData.subscribe(function (d) { return _this.onDataChanged(d); });
    };
    PaymentTableComponent.prototype.ngOnDestroy = function () {
        this.dataSubscription.unsubscribe();
        this.columnDefinitions.slice();
    };
    PaymentTableComponent.prototype.onDataChanged = function (d) {
        this.dataSource = d.dataSource;
        this.columnDefinitions = d.columnDefinitions;
    };
    PaymentTableComponent.ctorParameters = function () { return [
        { type: src_services_calculator_service__WEBPACK_IMPORTED_MODULE_2__["CalculatorService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_services_calculator_service__WEBPACK_IMPORTED_MODULE_2__["CALCULATOR_SERVICE_TOKEN"],] }] }
    ]; };
    PaymentTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-table',
            template: __webpack_require__(/*! raw-loader!./payment-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/payment-table/payment-table.component.html"),
            styles: [__webpack_require__(/*! ./payment-table.component.css */ "./src/app/payment-table/payment-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_services_calculator_service__WEBPACK_IMPORTED_MODULE_2__["CALCULATOR_SERVICE_TOKEN"]))
    ], PaymentTableComponent);
    return PaymentTableComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_input_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/input-data-service */ "./src/services/input-data-service.ts");
/* harmony import */ var _models_rent_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/rent-settings */ "./src/models/rent-settings.ts");
/* harmony import */ var _helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/сommon-helper */ "./src/helpers/сommon-helper.ts");
/* harmony import */ var _services_calculator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/calculator-service */ "./src/services/calculator-service.ts");






var RentBlockComponent = /** @class */ (function () {
    function RentBlockComponent(inputDataService, calculatorService) {
        this.inputDataService = inputDataService;
        this.calculatorService = calculatorService;
        this.settings = new _models_rent_settings__WEBPACK_IMPORTED_MODULE_3__["RentSettings"]();
        this.displayedColumns = [{ colDef: "monthNo", colHead: "Месяц" },
            { colDef: "payRent", colHead: "Уплата аренды" },
            { colDef: "interest", colHead: "Капитализация процентов" },
            { colDef: "addToInvest", colHead: "Внесено на вклад" },
            { colDef: "totalDeposit", colHead: "Остаток по вкладу" }];
    }
    Object.defineProperty(RentBlockComponent.prototype, "resultText", {
        get: function () {
            return this.calculatedResult == undefined
                ? ""
                : this.calculatedResult.length < 1
                    ? ""
                    : "Накопите на квартиру за " + _helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_4__["CommonHelper"].monthsToString(this.calculatedResult.length);
        },
        enumerable: true,
        configurable: true
    });
    RentBlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSubscription = this.inputDataService.inputData.subscribe(function (d) { return _this.onDataChanges(d); });
    };
    RentBlockComponent.prototype.ngOnDestroy = function () {
        this.dataSubscription.unsubscribe();
    };
    Object.defineProperty(RentBlockComponent.prototype, "InvestIn10Years", {
        get: function () { return this.input == null ? 0 : _helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_4__["CommonHelper"].inflatePrice(this.input.currMoney, this.settings.investRateMFrac, 120); },
        enumerable: true,
        configurable: true
    });
    RentBlockComponent.prototype.onDataChanges = function (data) {
        this.input = data;
        this.recalculate();
    };
    RentBlockComponent.prototype.recalculate = function () {
        this.calculatedResult = this.calculatorService.calulateRent(this.settings, 0);
    };
    //TODO: временно
    RentBlockComponent.prototype.sendData = function () {
        this.calculatorService.setPaymentTableSource(this.calculatedResult, this.displayedColumns);
    };
    RentBlockComponent.ctorParameters = function () { return [
        { type: src_services_input_data_service__WEBPACK_IMPORTED_MODULE_2__["InputDataService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_services_input_data_service__WEBPACK_IMPORTED_MODULE_2__["INPUT_DATA_SERVICE_TOKEN"],] }] },
        { type: _services_calculator_service__WEBPACK_IMPORTED_MODULE_5__["CalculatorService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_services_calculator_service__WEBPACK_IMPORTED_MODULE_5__["CALCULATOR_SERVICE_TOKEN"],] }] }
    ]; };
    RentBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rent-block',
            template: __webpack_require__(/*! raw-loader!./rent-block.component.html */ "./node_modules/raw-loader/index.js!./src/app/rent-block/rent-block.component.html"),
            styles: [__webpack_require__(/*! ./rent-block.component.css */ "./src/app/rent-block/rent-block.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_services_input_data_service__WEBPACK_IMPORTED_MODULE_2__["INPUT_DATA_SERVICE_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_calculator_service__WEBPACK_IMPORTED_MODULE_5__["CALCULATOR_SERVICE_TOKEN"]))
    ], RentBlockComponent);
    return RentBlockComponent;
}());



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
var environment = {
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


var SettingsHelper = /** @class */ (function () {
    function SettingsHelper(localMonth, globalMonth) {
        this.localMonth = localMonth;
        this.globalMonth = globalMonth;
    }
    // Рассчитать увеличение суммы по начальной сумме, ставке за 1 период (дробь) и числу периодов
    SettingsHelper.prototype.inflatePrice = function (price, rateFrac) {
        return _ommon_helper__WEBPACK_IMPORTED_MODULE_1__["CommonHelper"].inflatePrice(price, rateFrac, this.localMonth);
    };
    SettingsHelper.prototype.getCurrentPay = function (pay, inflationRate) {
        var value = this.getByGlobalMonth(pay);
        return _ommon_helper__WEBPACK_IMPORTED_MODULE_1__["CommonHelper"].inflateYearly(value.result, inflationRate, this.globalMonth - value.month);
    };
    SettingsHelper.prototype.getCurrentRent = function (rent, inflationRate) {
        var value = this.getByLocalMonth(rent);
        return _ommon_helper__WEBPACK_IMPORTED_MODULE_1__["CommonHelper"].inflateYearly(value.result, inflationRate, this.localMonth - value.month);
    };
    SettingsHelper.prototype.getByLocalMonth = function (dictionary) { return this.currentValue(dictionary, this.localMonth); };
    SettingsHelper.prototype.getByGlobalMonth = function (dictionary) { return this.currentValue(dictionary, this.globalMonth); };
    //Вытаскивает текущую месячную цену из словаря
    SettingsHelper.prototype.currentValue = function (dictionary, month) {
        return _variable_settings_calculator__WEBPACK_IMPORTED_MODULE_0__["VariableSettingsCalculator"].currentValue(dictionary, month ? month : this.localMonth);
    };
    SettingsHelper.ctorParameters = function () { return [
        { type: Number },
        { type: Number }
    ]; };
    return SettingsHelper;
}());



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
var VariableSettingsCalculator = /** @class */ (function () {
    function VariableSettingsCalculator() {
    }
    VariableSettingsCalculator.currentValue = function (dictionary, index) {
        var keys = Object.keys(dictionary);
        return keys.indexOf("" + index) >= 0 ? { result: dictionary[index], month: index } : this.currentValue(dictionary, --index);
    };
    return VariableSettingsCalculator;
}());



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
var CommonHelper = /** @class */ (function () {
    function CommonHelper() {
    }
    // Рассчитать увеличение суммы по начальной сумме, ставке за 1 период (дробь) и числу периодов
    CommonHelper.inflatePrice = function (price, rateFrac, length) {
        return price * Math.pow(1 + rateFrac, length);
    };
    // перевод годовой ставки в месячную дробь
    CommonHelper.yearRateToMonthlyFrac = function (rate) {
        return rate / 12 / 100;
    };
    // перевод эффективной годовой ставки в номинальную месячную
    CommonHelper.yearEffRateToMonthlyFrac = function (effRate) {
        return Math.pow(1 + (effRate / 100), 1 / 12) - 1;
    };
    // Расчет значения в заданном месяце при увеличении раз в год на заданную ставку.
    CommonHelper.inflateYearly = function (amount, rate, months) {
        return amount * Math.pow(1 + (rate / 100), Math.floor(months / 12));
    };
    // Получить сумму процентов за месяц по годовой ставке
    CommonHelper.getMonthInterest = function (amount, rate) {
        return amount * this.yearRateToMonthlyFrac(rate);
    };
    CommonHelper.monthsToString = function (months) {
        var years = Math.floor(months / 12);
        var singles = years - 10 * Math.floor(years / 10);
        var result = "";
        if (years > 0) {
            var yearString = (years > 10 && years < 20)
                ? "лет"
                : singles == 1
                    ? "год"
                    : (singles > 1 && singles < 5)
                        ? "года"
                        : "лет";
            result += years + " " + yearString;
        }
        var singleMonths = months - 12 * years;
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
    };
    return CommonHelper;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


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

var InputData = /** @class */ (function () {
    function InputData() {
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
    Object.defineProperty(InputData.prototype, "propPriceIn10Years", {
        get: function () { return _helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_0__["CommonHelper"].inflateYearly(this.flatPrice, this.propInflationY, 120); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputData.prototype, "canPayIn10Years", {
        get: function () { return _helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_0__["CommonHelper"].inflateYearly(this.canPayM[0], this.payInflationY, 120); },
        enumerable: true,
        configurable: true
    });
    return InputData;
}());



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

var MortSettings = /** @class */ (function () {
    function MortSettings() {
        this.propPrice = 7000000; // цена квартиры
        this.mortRate = 6; // ставка по ипотеке
        this.comFeesM = 3500; // коммунальные платежи без счетчиков (фикс), в мес
        this.propTaxY = 30000; // налог, страховка, прочие платежи владения квартирой, в год
        this.comRateY = 2; // удорожание коммуналки, % в год
    }
    Object.defineProperty(MortSettings.prototype, "comFeesIn10Years", {
        get: function () { return _helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_0__["CommonHelper"].inflateYearly(this.comFeesM, this.comRateY, 120); },
        enumerable: true,
        configurable: true
    });
    return MortSettings;
}());



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

var RentSettings = /** @class */ (function () {
    function RentSettings() {
        var _a;
        this.rentMonthCost = (_a = {}, _a[0] = 30000, _a); // Стоимость месячной аренды
        this.rentYearRate = 2; // Годовая ставка удорожания аренды
        this.investRateY = 6; // Ставка по влкаду в год
    }
    Object.defineProperty(RentSettings.prototype, "investRateMFrac", {
        get: function () { return src_helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_0__["CommonHelper"].yearRateToMonthlyFrac(this.investRateY); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RentSettings.prototype, "rentMonthRate", {
        get: function () { return src_helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_0__["CommonHelper"].yearRateToMonthlyFrac(this.rentYearRate); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RentSettings.prototype, "rentIn10Years", {
        get: function () { return src_helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_0__["CommonHelper"].inflateYearly(this.rentMonthCost[0], this.rentYearRate, 120); },
        enumerable: true,
        configurable: true
    });
    return RentSettings;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var BLOCK_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('block_service');
var BlockService = /** @class */ (function () {
    function BlockService() {
        this._blocks = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    Object.defineProperty(BlockService.prototype, "blocks", {
        get: function () { return this._blocks.asObservable(); },
        enumerable: true,
        configurable: true
    });
    BlockService.prototype.addBlock = function (blockType) { this._blocks.next({ type: blockType }); };
    return BlockService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/helpers/сommon-helper */ "./src/helpers/сommon-helper.ts");
/* harmony import */ var src_helpers_settings_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/helpers/settings-helper */ "./src/helpers/settings-helper.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var CALCULATOR_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('calculator_service');
var CalculatorService = /** @class */ (function () {
    function CalculatorService(inputService) {
        var _this = this;
        this.inputService = inputService;
        // TOOD: переместить в правильное расположение
        this.paymentTableData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        inputService.inputData.subscribe(function (data) { return _this.inputData = data; });
    }
    //#region Rent
    CalculatorService.prototype.calulateRent = function (rentSettings, startMonthNo) {
        return this.calculatePaymentTable(rentSettings, startMonthNo, [], this.makeRentRow, this.shouldMakeRentRow);
    };
    // Расчет строки графика накопление+аренда
    CalculatorService.prototype.makeRentRow = function (rentSettings, inputData, prevRow, monthNo, globalMonthNo) {
        var settingsHelper = new src_helpers_settings_helper__WEBPACK_IMPORTED_MODULE_4__["SettingsHelper"](monthNo, globalMonthNo);
        var rentAfterInflate = settingsHelper.getCurrentRent(rentSettings.rentMonthCost, rentSettings.rentYearRate);
        var prevDeposit = prevRow ? prevRow.totalDeposit : inputData.currMoney;
        var interest = src_helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_3__["CommonHelper"].getMonthInterest(prevDeposit, rentSettings.investRateY);
        var addToInvest = settingsHelper.getCurrentPay(inputData.canPayM, inputData.payInflationY) - rentAfterInflate;
        var totalDeposit = prevDeposit + interest + addToInvest;
        var newRow = {
            totalMonthNo: globalMonthNo,
            monthNo: monthNo,
            payRent: rentAfterInflate,
            interest: interest,
            addToInvest: addToInvest,
            totalDeposit: totalDeposit
        };
        return newRow;
    };
    CalculatorService.prototype.shouldMakeRentRow = function (row, inputData) {
        return row ? row.totalDeposit < inputData.flatPrice : true;
    };
    //#endregion Rent
    //#region Mortgage
    CalculatorService.prototype.calculateMort = function (mortSettings, startMonthNo) {
        return this.calculatePaymentTable(mortSettings, startMonthNo, [], this.makeMortRow, this.shouldMakeMortRow);
    };
    CalculatorService.prototype.makeMortRow = function (mortSettings, inputData, prevRow, monthNo, globalMonthNo) {
        var settingsHelper = new src_helpers_settings_helper__WEBPACK_IMPORTED_MODULE_4__["SettingsHelper"](monthNo, globalMonthNo);
        var prevDebt = prevRow ? prevRow.debt : inputData.flatPrice - inputData.currMoney;
        var interest = src_helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_3__["CommonHelper"].getMonthInterest(prevDebt, mortSettings.mortRate);
        var comFees = src_helpers_ommon_helper__WEBPACK_IMPORTED_MODULE_3__["CommonHelper"].inflateYearly(mortSettings.comFeesM, mortSettings.comRateY, monthNo);
        var tax = mortSettings.propTaxY / 12;
        var payDebt = Math.min(prevDebt, settingsHelper.getCurrentPay(inputData.canPayM, inputData.payInflationY) - interest - comFees - tax);
        var newDebt = prevDebt - payDebt;
        var newRow = {
            monthNo: monthNo,
            interest: interest,
            payComFees: comFees,
            payTax: tax,
            payDebt: payDebt,
            debt: newDebt
        };
        return newRow;
    };
    CalculatorService.prototype.shouldMakeMortRow = function (row, inputData) {
        return row ? row.debt > 0 : true;
    };
    //#endregion Mortgage
    CalculatorService.prototype.calculatePaymentTable = function (settings, startingMonthNo, rows, makeRowFunc, checkFinalFunc) {
        var currMonth = 0;
        var totalMonth = startingMonthNo;
        var lastRow = null;
        do {
            lastRow = makeRowFunc(settings, this.inputData, lastRow, currMonth, totalMonth);
            rows.push(lastRow);
            currMonth++;
            totalMonth++;
        } while (checkFinalFunc(lastRow, this.inputData));
        return rows;
    };
    CalculatorService.prototype.setPaymentTableSource = function (data, columnDefinitions) {
        this.paymentTableData.next({ dataSource: data, columnDefinitions: columnDefinitions });
    };
    CalculatorService.ctorParameters = function () { return [
        { type: _input_data_service__WEBPACK_IMPORTED_MODULE_1__["InputDataService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_input_data_service__WEBPACK_IMPORTED_MODULE_1__["INPUT_DATA_SERVICE_TOKEN"],] }] }
    ]; };
    CalculatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_input_data_service__WEBPACK_IMPORTED_MODULE_1__["INPUT_DATA_SERVICE_TOKEN"]))
    ], CalculatorService);
    return CalculatorService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_models_input_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/input-data */ "./src/models/input-data.ts");




var INPUT_DATA_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('INPUT_DATA_SERVICE');
var InputDataService = /** @class */ (function () {
    function InputDataService() {
        this.inputData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new src_models_input_data__WEBPACK_IMPORTED_MODULE_3__["InputData"]());
    }
    InputDataService.prototype.push = function (data) { this.inputData.next(data); };
    InputDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], InputDataService);
    return InputDataService;
}());



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
//# sourceMappingURL=main-es5.js.map