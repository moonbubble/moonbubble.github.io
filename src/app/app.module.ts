import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpreadComponent } from './spread/spread.component';
import { SquareComponent } from './square/square.component';
import { ColorpickerComponent } from './colorpicker/colorpicker.component';
import { SquareNumberComponent } from './square-number/square-number.component';
import { ColorChipComponent } from './colorpicker/color-chip/color-chip.component';
import { MenuComponent } from './menu/menu.component';
import { ColorsToNumberComponent } from './colors-to-number/colors-to-number.component';
import { NumberToColorsComponent } from './number-to-colors/number-to-colors.component';
import { FormsModule } from '@angular/forms';
import { PossibilitiesComponent } from './possibilities/possibilities.component';

@NgModule({
  declarations: [
    AppComponent,
    SpreadComponent,
    SquareComponent,
    ColorpickerComponent,
    SquareNumberComponent,
    ColorChipComponent,
    MenuComponent,
    ColorsToNumberComponent,
    NumberToColorsComponent,
    PossibilitiesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
