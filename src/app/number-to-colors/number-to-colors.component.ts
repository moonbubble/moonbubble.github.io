import { Component, OnInit } from '@angular/core';
import { PossibilityService } from '../possibility.service';

@Component({
  selector: 'app-number-to-colors',
  templateUrl: './number-to-colors.component.html',
  styleUrls: ['./number-to-colors.component.css'],
})
export class NumberToColorsComponent implements OnInit {
  outputColors: string = '';

  constructor(private possibilityService: PossibilityService) {}

  ngOnInit(): void {
    // geel licht blauw koraal
    this.possibilityService.convertNumberToColors();
  }
}
