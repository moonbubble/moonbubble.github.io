import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PossibilityService {
  constructor() {}

  convertColorsToPossibility(colors: Color[]): number {
    const squareIndices = colors.map((color) => color.index);

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
    if (sum <= 0) {
      return 0;
    }

    return sum;
  }
}
