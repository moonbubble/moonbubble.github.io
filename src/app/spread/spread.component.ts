import { Component } from '@angular/core';
import { PossibilityService } from '../possibility.service';

@Component({
  selector: 'app-spread',
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.css'],
})
export class SpreadComponent {
  squareNumber: number = 0;
  colors: Color[] = [
    {
      name: 'geel',
      index: 0,
      backgroundColor: 'bg-amber-300',
    },
    {
      name: 'koraal',
      index: 1,
      backgroundColor: 'bg-red-400',
    },
    {
      name: 'rood',
      index: 2,
      backgroundColor: 'bg-rose-700',
    },
    {
      name: 'wit',
      index: 3,
      backgroundColor: 'bg-cyan-300',
    },
    {
      name: 'licht',
      index: 4,
      backgroundColor: 'bg-lime-200',
    },
    {
      name: 'beige',
      index: 5,
      backgroundColor: 'bg-stone-400',
    },
    {
      name: 'blauw',
      index: 6,
      backgroundColor: 'bg-slate-700',
    },
  ];

  squareColors: Color[] = [];

  constructor(private possibilityService: PossibilityService) {}

  ngOnInit(): void {}

  // TODO: Maak dat je kan aanklikken welke kleur je wilt in welke volgorde
  // TODO: Maak dat je van getal naar kleur kunt
  // TODO: Schoon de calculatePossibility functie op

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
    }
  }
}
