import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-chip',
  templateUrl: './color-chip.component.html',
  styleUrls: ['./color-chip.component.css'],
})
export class ColorChipComponent implements OnInit {
  @Input()
  callbackFunction: ((color: Color) => void) | undefined = undefined;

  @Input()
  color: Color | null = null;

  constructor() {}

  ngOnInit(): void {}
}
