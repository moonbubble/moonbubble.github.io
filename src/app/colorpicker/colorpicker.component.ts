import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.css'],
})
export class ColorpickerComponent {
  @Input()
  colors: Color[] = [];

  @Input()
  chooseColor: ((color: Color) => void) | undefined = undefined;
}
