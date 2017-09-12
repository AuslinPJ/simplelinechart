import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ChartModule} from 'primeng/primeng';
import {DataTable, Column, Calendar, UIChart} from 'primeng/primeng';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      ChartModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
