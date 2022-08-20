import { Component } from '@angular/core';
import { PossibilityService } from '../possibility.service';

@Component({
  selector: 'app-number-to-colors',
  templateUrl: './number-to-colors.component.html',
  styleUrls: ['./number-to-colors.component.css'],
})
export class NumberToColorsComponent {
  outputColors: string = '';
  inputNumber: number | undefined = undefined;

  constructor(private possibilityService: PossibilityService) {}

  convertNumberToColors() {
    if (this.inputNumber) {
      this.possibilityService.convertNumberToColors(this.inputNumber);
    }
  }
}
