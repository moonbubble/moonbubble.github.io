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

  choose(color: Color) {
    // if (this.colorCollect.length === 4) {
    //   this.colorCollect = [];
    // }
    // console.log(color);
    // this.colorCollect.push(color);
    // console.log("this.colorCollect", this.colorCollect);
    // if (this.colorCollect.length === 4 && this.callBackFunction) {
    //   this.callBackFunction(this.colorCollect);
    // }

    this.addNewSquareColor(color);
  }

  addNewSquareColor(color: Color) {
    this.newSquareColorEvent.emit(color);
  }
}
