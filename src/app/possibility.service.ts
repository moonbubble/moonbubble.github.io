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

  convertNumberToColors() {
    let colors = [...colorList];
    const inputNumber = 241;
    // rood geel koraal wit

    // -----  FIRST COLOR
    let firstColor: Color;
    let secondColor: Color;
    let thirdColor: Color;
    let fourthColor: Color;

    if (this.checkBetweenNumbers(inputNumber, 1, 120)) {
      firstColor = colors[0];
    }
    if (this.checkBetweenNumbers(inputNumber, 121, 240)) {
      firstColor = colors[1];
    }
    if (this.checkBetweenNumbers(inputNumber, 241, 360)) {
      firstColor = colors[2];
      colors.splice(2, 1);
      console.log('firstColor', firstColor);
      console.log('colors', colors);

      if (this.checkBetweenNumbers(inputNumber, 241, 260)) {
        secondColor = colors[0];
        colors.splice(0, 1);
        console.log('secondColor', secondColor);
        console.log('colors', colors);

        if (this.checkBetweenNumbers(inputNumber, 241, 244)) {
          thirdColor = colors[0];
          colors.splice(0, 1);
          console.log('thirdColor', thirdColor);
          console.log('colors', colors);

          if (this.checkBetweenNumbers(inputNumber, 241, 241)) {
            fourthColor = colors[0];
          }
          if (this.checkBetweenNumbers(inputNumber, 242, 242)) {
            fourthColor = colors[1];
          }
          if (this.checkBetweenNumbers(inputNumber, 243, 243)) {
            fourthColor = colors[2];
          }
          if (this.checkBetweenNumbers(inputNumber, 244, 244)) {
            fourthColor = colors[3];
            console.log('fourtColor', fourthColor);
            console.log('çolors', colors);
          }
        }
        if (this.checkBetweenNumbers(inputNumber, 245, 248)) {
          thirdColor = colors[1];
        }
        if (this.checkBetweenNumbers(inputNumber, 249, 252)) {
          thirdColor = colors[2];
        }
        if (this.checkBetweenNumbers(inputNumber, 253, 256)) {
          thirdColor = colors[3];
        }
        if (this.checkBetweenNumbers(inputNumber, 257, 260)) {
          thirdColor = colors[4];
        }
      }
      if (this.checkBetweenNumbers(inputNumber, 261, 280)) {
        secondColor = colors[1];
      }
      if (this.checkBetweenNumbers(inputNumber, 281, 300)) {
        secondColor = colors[2];
      }
      if (this.checkBetweenNumbers(inputNumber, 301, 320)) {
        secondColor = colors[3];
      }
      if (this.checkBetweenNumbers(inputNumber, 321, 340)) {
        secondColor = colors[4];
      }
      if (this.checkBetweenNumbers(inputNumber, 341, 360)) {
        secondColor = colors[5];
      }
    }
    if (this.checkBetweenNumbers(inputNumber, 361, 480)) {
      firstColor = colors[3];
    }
    if (this.checkBetweenNumbers(inputNumber, 481, 600)) {
      firstColor = colors[4];
    }
    if (this.checkBetweenNumbers(inputNumber, 601, 720)) {
      firstColor = colors[5];
    }
    if (this.checkBetweenNumbers(inputNumber, 721, 840)) {
      firstColor = colors[6];
    }

    // -----  SECOND COLOR
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
