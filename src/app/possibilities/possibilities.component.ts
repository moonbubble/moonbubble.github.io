import { Component, OnInit } from '@angular/core';
import { PossibilityService } from '../possibility.service';

@Component({
  selector: 'app-possibilities',
  templateUrl: './possibilities.component.html',
  styleUrls: ['./possibilities.component.css'],
})
export class PossibilitiesComponent implements OnInit {
  constructor(private possibilityService: PossibilityService) {}

  ngOnInit(): void {
    this.possibilityService.calculatePossibilities();
  }
}
