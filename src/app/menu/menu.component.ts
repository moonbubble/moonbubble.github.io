import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input()
  changeMenu: (menu: Menu) => void = () => {};

  @Input()
  colors: Color[] = [];

  constructor() {}

  ngOnInit(): void {}
}
