import { Component, OnInit } from '@angular/core';
import { CARDTYPES } from '../shared/card-types';
import { CardType } from '../shared/card-type.model';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent implements OnInit {
  /**
   * The list of card types in the dropdown.
   */
  cardTypes: CardType[] = CARDTYPES;

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
