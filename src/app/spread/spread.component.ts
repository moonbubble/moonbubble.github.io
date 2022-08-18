import { Component } from '@angular/core';
import { PossibilityService } from '../possibility.service';

@Component({
  selector: 'app-spread',
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.css'],
})
export class SpreadComponent {
  menu: Menu = 1;

  // TODO: Maak dat je van getal naar kleur kunt
  // TODO: Schoon de calculatePossibility functie op
  // TODO: Maak dat je kleuren kunt invullen en dan een lijst krijgt met de mogelijkheden waar die combinatie van kleuren in zit

  changeMenu = (menu: Menu): void => {
    this.menu = menu;
  };
}
