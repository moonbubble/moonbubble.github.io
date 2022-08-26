import { Component } from '@angular/core';
import { PossibilityService } from '../possibility.service';

@Component({
  selector: 'app-number-to-colors',
  templateUrl: './number-to-colors.component.html',
  styleUrls: ['./number-to-colors.component.css'],
})
export class NumberToColorsComponent {
  inputNumber: number | undefined = undefined;
  squareColors: Color[] = [];
  covertedNumber: number | undefined = undefined;

  constructor(private possibilityService: PossibilityService) {}

  isInputNumberValid(): boolean {
    if (this.inputNumber) {
      if (this.inputNumber > 0 && this.inputNumber <= 840) {
        return true;
      }
    }

    return false;
  }

  convertNumberToColors() {
    if (this.inputNumber && this.isInputNumberValid()) {
      this.squareColors = this.possibilityService.convertNumberToColors(
        this.inputNumber
      );

      this.covertedNumber = this.inputNumber;
    }

    if (!this.isInputNumberValid()) {
    }
  }
}
