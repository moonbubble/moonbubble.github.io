import { Injectable } from '@angular/core';
import { colors as colorList } from './colors';

@Injectable({
  providedIn: 'root',
})
export class PossibilityService {
  constructor() {}

  convertColorsToNumber(colors: Color[]): number {
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

  convertNumberToColors(inputNumber: number): Color[] {
    let colors = [...colorList];
    let convertedSquare: Color[] = [];

    let firstColor: Color;
    let secondColor: Color;
    let thirdColor: Color;
    let fourthColor: Color;

    // -- FIRST COLOR
    for (let f = 0; f < 7; f++) {
      const firstStart = 1 + f * 120;
      const firstEnd = firstStart + 119;
      if (this.checkBetweenNumbers(inputNumber, firstStart, firstEnd)) {
        firstColor = colors[f];
        convertedSquare.push(firstColor);
        colors.splice(f, 1);
        console.log('real first', firstColor);
        console.log('real colors', colors);

        // -- SECOND COLOR
        for (let s = 0; s < 6; s++) {
          const secondStart = firstStart + s * 20;
          const secondEnd = secondStart + 19;

          if (this.checkBetweenNumbers(inputNumber, secondStart, secondEnd)) {
            secondColor = colors[s];
            convertedSquare.push(secondColor);
            colors.splice(s, 1);
            console.log('real second', secondColor);
            console.log('real colors', colors);

            // -- THIRD COLOR
            for (let t = 0; t < 5; t++) {
              const thirdStart = secondStart + t * 4;
              const thirdEnd = thirdStart + 3;
              if (this.checkBetweenNumbers(inputNumber, thirdStart, thirdEnd)) {
                thirdColor = colors[t];
                convertedSquare.push(thirdColor);
                colors.splice(t, 1);
                console.log('real third', thirdColor);
                console.log('real colors', colors);

                // -- FOURTH COLOR
                for (let u = 0; u < 4; u++) {
                  const fourthStart = thirdStart + u * 1;
                  const fourthEnd = fourthStart;
                  if (
                    this.checkBetweenNumbers(
                      inputNumber,
                      fourthStart,
                      fourthEnd
                    )
                  ) {
                    fourthColor = colors[u];
                    convertedSquare.push(fourthColor);
                    colors.splice(u, 1);
                    console.log('real fourth', fourthColor);
                    console.log('real colors', colors);

                    break;
                  }
                }

                break;
              }
            }

            break;
          }
        }

        break;
      }
    }

    if (convertedSquare.length === 4) {
      return convertedSquare;
    }

    return [];
  }

  checkBetweenNumbers(
    numberToCheck: number,
    startNumber: number,
    endNumber: number
  ): boolean {
    if (numberToCheck >= startNumber && numberToCheck <= endNumber) {
      return true;
    }

    return false;
  }
}
