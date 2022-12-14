import { Component } from '@angular/core';
import { colors } from '../colors';
import { PossibilityService } from '../possibility.service';

@Component({
  selector: 'app-colors-to-number',
  templateUrl: './colors-to-number.component.html',
  styleUrls: ['./colors-to-number.component.css'],
})
export class ColorsToNumberComponent {
  squareNumber: number = 0;
  colors: Color[] = [...colors];
  squareColors: Color[] = [];

  constructor(private possibilityService: PossibilityService) {}

  setNumber = (colors: Color[]): void => {
    this.squareNumber = this.possibilityService.convertColorsToNumber(colors);
  };

  addSquareColor = (color: Color): void => {
    if (this.squareColors.length === 4) {
      this.squareColors = [];
    }

    this.squareColors.push(color);

    if (this.squareColors.length === 4) {
      this.setNumber(this.squareColors);
      this.colors = this.colors.map((color) => {
        return {
          ...color,
          chosen: false,
        };
      });
    }
  };

  turnSquareLeft(): void {
    let squareToBeTurned = [...this.squareColors];

    const firstColor = squareToBeTurned.shift();
    if (firstColor) {
      squareToBeTurned.push(firstColor);
    }

    this.squareColors = [...squareToBeTurned];

    if (this.squareColors.length === 4) {
      this.setNumber(this.squareColors);
    }
  }

  isTurningPossible(): boolean {
    return this.squareColors.length === 4;
  }
}
