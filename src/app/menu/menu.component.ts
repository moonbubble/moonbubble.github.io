import { Component, Input, OnInit } from '@angular/core';
import { colors } from '../colors';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input()
  changeMenu: (menu: Menu) => void = () => {};

  colors: Color[] = [...colors];

  constructor() {}

  ngOnInit(): void {}
}
