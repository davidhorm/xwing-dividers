import { Component, OnInit } from '@angular/core';
import { CARD_TYPES } from './shared/card-type.service';
import { CardType } from './shared/card-type.model';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent implements OnInit {
  /**
   * The list of card types in the dropdown.
   */
  cardTypes: CardType[] = CARD_TYPES;

  /**
   * The selected card type. Default to the first item in the dropdown.
   */
  selectedCardType: CardType = this.cardTypes[0];
  
  /**
   * The caddy length in millimeters. Default to the first item in the dropdown.
   */
  caddyLength: number = this.cardTypes[0].defaultLength;
  
  constructor() { }

  ngOnInit() {
  }
}
