import { Injectable } from '@angular/core';
import { colors as colorList, colors } from './colors';

@Injectable({
  providedIn: 'root',
})
export class PossibilityService {
  constructor() {}

  // TODO: Opschonen
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

  // TODO: Opschonen
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

  calculatePossibilities() {
    let input = [[...colors][2]];

    input.forEach((element) => {
      this.calculatePossibilitiesPerColor(element);
    });

    console.log('input', input);
  }

  calculatePossibilitiesPerColor(color: Color) {
    for (let position = 1; position <= 4; position++) {
      if (position === 1) {
        console.log('position is 1');

        // 1 - 120
        const start = 1 + 120 * color.index;
        const end = 120 + 120 * color.index;
        const range = [...Array(end - start + 1).keys()].map((x) => x + start);
        console.log('range', range);
      }

      if (position === 2) {
        console.log('position is 2');
        let secondrange: number[] = [];

        // if i is kleiner, dan is hij altijd 2e, rood
        // if i = gelijk, dan is hij niet
        // if i is groter, dan is hij altijd 3e, rood
        for (let i = 0; i < 7; i++) {
          if (i < color.index) {
            // 21-40
            // 141-160
            const secondstart = 1 + 20 * (color.index - 1) + 120 * i;
            const secondend = 20 + 20 * (color.index - 1) + 120 * i;
            let range = [...Array(secondend - secondstart + 1).keys()].map(
              (x) => x + secondstart
            );
            secondrange.push(...range);
          }

          if (i > color.index) {
            // 401-420
            // 521-540
            // 641-660
            // 761-780
            const secondstart = 1 + 20 * color.index + 120 * i; // 360 + 40 + 1 = 401
            const secondend = 20 + 20 * color.index + 120 * i; // 360 + 40 + 20 = 420
            let range = [...Array(secondend - secondstart + 1).keys()].map(
              (x) => x + secondstart
            );
            secondrange.push(...range);
          }
        }

        console.log('range 2', secondrange);
      }

      // if (position === 3) {
      //   console.log('position is 3');
      //   let thirdrange: number[] = [];

      //   for (let i = 0; i < 7; i++) {
      //     for (let j = 0; j < 6; j++) {
      //       if (i > color.index && j < color.index) {
      //         const start = 1 + 4 * (color.index - 1) + 20 * j + 120 * i;
      //         const end = 4 + 4 * (color.index - 1) + 20 * j + 120 * i;
      //         let range = [...Array(end - start + 1).keys()].map(
      //           (x) => x + start
      //         );
      //         thirdrange.push(...range);
      //       }
      //     }
      //   }

      //   console.log('range 3', thirdrange);
      // }
    }
  }
}
