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
    },
    {
      name: 'koraal',
      index: 1,
    },
    {
      name: 'rood',
      index: 2,
    },
    {
      name: 'wit',
      index: 3,
    },
    {
      name: 'licht',
      index: 4,
    },
    {
      name: 'beige',
      index: 5,
    },
    {
      name: 'blauw',
      index: 6,
    },
  ];

  constructor(private possibilityService: PossibilityService) {}

  ngOnInit(): void {}

  // TODO: Maak dat je kan aanklikken welke kleur je wilt in welke volgorde
  // TODO: Maak dat je van getal naar kleur kunt
  // TODO: Schoon de calculatePossibility functie op

  public setPossibility = (colors: Color[]): void => {
    this.squareNumber =
      this.possibilityService.convertColorsToPossibility(colors);
  };
}
