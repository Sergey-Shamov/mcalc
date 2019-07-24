import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatListModule, MatButtonModule, MatDialogModule, MAT_DIALOG_DATA, MatCardModule, MatTableModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MortVsRentComponent } from './mort-vs-rent/mort-vs-rent.component';
import { RentBlockComponent } from './rent-block/rent-block.component';
import { INPUT_DATA_SERVICE_TOKEN, InputDataService } from 'src/services/input-data-service';
import { McalcOldComponent } from './mcalc-old/mcalc-old.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found-component/not-found-component.component';
import { MainCalcPageComponent } from './main-calc-page/main-calc-page.component';
import { ColumnBlockComponent } from './column-block/column-block.component';
import { AddBlockDialogComponent } from './add-block-dialog/add-block-dialog.component';
import { BlockService, BLOCK_SERVICE_TOKEN } from 'src/services/block-service';
import { BlockComponent } from './block/block.component';
import { CommonSettingsPanelComponent } from './common-settings-panel/common-settings-panel.component';
import { MortBlockComponent } from './mort-block/mort-block.component';
import { CalculatorService, CALCULATOR_SERVICE_TOKEN } from '../services/calculator-service';
import { PaymentTableComponent } from './payment-table/payment-table.component';

const appRoutes: Routes = [
  {
    path: 'old',
    component: McalcOldComponent,
    data: { title: 'Старая версия' }
  },
  {
    path: 'calculator',
    component: MainCalcPageComponent
  },
  {
    path: '',
    redirectTo: '/calculator',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MortVsRentComponent,
    RentBlockComponent,
    McalcOldComponent,
    NotFoundComponent,
    MainCalcPageComponent,
    ColumnBlockComponent,
    AddBlockDialogComponent,
    BlockComponent,
    CommonSettingsPanelComponent,
    MortBlockComponent,
    PaymentTableComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatTableModule
  ],
  entryComponents: [AddBlockDialogComponent],
  providers: [
    { provide: INPUT_DATA_SERVICE_TOKEN, useClass: InputDataService },
    { provide: BLOCK_SERVICE_TOKEN, useClass: BlockService },
    { provide: CALCULATOR_SERVICE_TOKEN, useClass: CalculatorService },
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
