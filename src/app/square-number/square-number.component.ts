import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square-number',
  templateUrl: './square-number.component.html',
  styleUrls: ['./square-number.component.css'],
})
export class SquareNumberComponent implements OnInit {
  @Input()
  squareNumber: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
