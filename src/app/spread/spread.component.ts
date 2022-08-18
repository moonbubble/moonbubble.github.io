import { Component } from '@angular/core';
import { PossibilityService } from '../possibility.service';

@Component({
  selector: 'app-spread',
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.css'],
})
export class SpreadComponent {
  squareNumber: number = 0;
  menu: Menu = 1;
  colors: Color[] = [
    {
      name: 'geel',
      index: 0,
      backgroundColor: 'bg-amber-400',
      chosen: false,
    },
    {
      name: 'koraal',
      index: 1,
      backgroundColor: 'bg-rose-500',
      chosen: false,
    },
    {
      name: 'rood',
      index: 2,
      backgroundColor: 'bg-red-700',
      chosen: false,
    },
    {
      name: 'wit',
      index: 3,
      backgroundColor: 'bg-teal-300',
      chosen: false,
    },
    {
      name: 'licht',
      index: 4,
      backgroundColor: 'bg-lime-400',
      chosen: false,
    },
    {
      name: 'beige',
      index: 5,
      backgroundColor: 'bg-stone-300',
      chosen: false,
    },
    {
      name: 'blauw',
      index: 6,
      backgroundColor: 'bg-slate-600',
      chosen: false,
    },
  ];

  squareColors: Color[] = [];

  constructor(private possibilityService: PossibilityService) {}

  ngOnInit(): void {}

  // TODO: Maak dat je van getal naar kleur kunt
  // TODO: Schoon de calculatePossibility functie op
  // TODO: Maak dat je kleuren kunt invullen en dan een lijst krijgt met de mogelijkheden waar die combinatie van kleuren in zit

  setPossibility = (colors: Color[]): void => {
    this.squareNumber =
      this.possibilityService.convertColorsToPossibility(colors);
  };

  addSquareColor(color: Color) {
    if (this.squareColors.length === 4) {
      this.squareColors = [];
    }

    this.squareColors.push(color);

    if (this.squareColors.length === 4) {
      this.setPossibility(this.squareColors);
      this.colors = this.colors.map((color) => {
        return {
          ...color,
          chosen: false,
        };
      });
    }
  }

  changeMenu = (menu: Menu): void => {
    this.menu = menu;
  };
}
