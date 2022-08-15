import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.css'],
})
export class ColorpickerComponent {
  colorCollect: Color[] = [];

  @Input()
  colors: Color[] = [];

  @Input()
  callBackFunction: ((arr: Color[]) => void) | undefined = undefined;

  @Output() newSquareColorEvent = new EventEmitter<Color>();

  addNewSquareColor = (color: Color): void => {
    console.log('choosing...', color);
    this.newSquareColorEvent.emit(color);
  };
}
