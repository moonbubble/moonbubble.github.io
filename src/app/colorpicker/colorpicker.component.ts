import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.css'],
})
export class ColorpickerComponent {
  @Input()
  colors: Color[] = [];

  @Input()
  callBackFunction: ((arr: Color[]) => void) | undefined = undefined;

  @Output() newSquareColorEvent = new EventEmitter<Color>();

  addNewSquareColor = (color: Color): void => {
    this.newSquareColorEvent.emit(color);
  };
}
