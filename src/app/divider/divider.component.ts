import { Component, OnInit } from '@angular/core';
import { CARDTYPES } from '../shared/card-types';
import { CardType } from '../shared/card-type.model';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent implements OnInit {
  cardTypes: CardType[] = CARDTYPES;
  selectedCardType = this.cardTypes[0]; //auto select the first item

  constructor() { }

  ngOnInit() {
  }
}
