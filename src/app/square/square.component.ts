import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent {
  possibility: number = 0;
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

  ngOnInit(): void {
    this.setPossibility([
      this.colors[6],
      this.colors[5],
      this.colors[4],
      this.colors[3],
    ]);
  }

  // TODO: Maak dat je kan aanklikken welke kleur je wilt in welke volgorde
  // TODO: Maak dat je van getal naar kleur kunt
  // TODO: Schoon de calculatePossibility functie op

  public setPossibility(colorsArray: Color[]): void {
    this.possibility = this.calculatePossibility(colorsArray);
  }

  private calculatePossibility(colorsArray: Color[]): number {
    const squareIndices = colorsArray.map((colorObject) => colorObject.index);

    let sum = 0;

    for (let i = 0; i < 4; i++) {
      if (i === 0) {
        sum += squareIndices[i] * 120 + 1;
      }
      if (i === 1) {
        sum += squareIndices[i] * 20;

        if (squareIndices[0] < squareIndices[i]) {
          sum -= 20;
        }
      }
      if (i === 2) {
        sum += squareIndices[i] * 4;

        if (squareIndices[0] < squareIndices[i]) {
          sum -= 4;
        }
        if (squareIndices[1] < squareIndices[i]) {
          sum -= 4;
        }
      }
      if (i === 3) {
        sum += squareIndices[i] * 1;

        if (squareIndices[0] < squareIndices[i]) {
          sum -= 1;
        }
        if (squareIndices[1] < squareIndices[i]) {
          sum -= 1;
        }
        if (squareIndices[2] < squareIndices[i]) {
          sum -= 1;
        }
      }
    }
    console.log('sum', sum);

    return sum;
  }
}
