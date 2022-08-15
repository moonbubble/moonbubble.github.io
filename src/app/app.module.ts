import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpreadComponent } from './spread/spread.component';
import { SquareComponent } from './square/square.component';
import { ColorpickerComponent } from './colorpicker/colorpicker.component';
import { SquareNumberComponent } from './square-number/square-number.component';

@NgModule({
  declarations: [
    AppComponent,
    SpreadComponent,
    SquareComponent,
    ColorpickerComponent,
    SquareNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
