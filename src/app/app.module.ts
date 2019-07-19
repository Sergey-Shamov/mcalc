import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatListModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MortVsRentComponent } from './mort-vs-rent/mort-vs-rent.component';
import { RentBlockComponent } from './rent-block/rent-block.component';
import { INPUT_DATA_SERVICE_TOKEN, InputDataService } from 'src/services/input-data-service';

@NgModule({
  declarations: [
    AppComponent,
    MortVsRentComponent,
    RentBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [{provide:INPUT_DATA_SERVICE_TOKEN, useClass:InputDataService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
