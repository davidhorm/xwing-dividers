import { Component, OnInit } from '@angular/core';
import { UpgradeCardTypes, FactionTypes } from './shared/card-type.service';
import { CardType } from './shared/card-type.model';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent implements OnInit {

  /** The list of faction types in the dropdown. */
  factionTypes: CardType[] = FactionTypes;

  /** The selected faction type. Default to none. */
  selectedFactionType: CardType;

  /** The list of upgrade card types in the dropdown. */
  upgradeCardTypes: CardType[] = UpgradeCardTypes;

  /** The selected upgrade card type. */
  selectedUpgradeCardType: CardType;
  
  /** The caddy length in millimeters. */
  caddyLength: number;

  /** The caddy label. */
  caddyLabel: string;
  
  constructor() { }

  ngOnInit() {
    this.selectedUpgradeCardType = this.upgradeCardTypes[0];
    this.onSelectionChange();
  }

  onSelectionChange() {
    if(this.selectedUpgradeCardType !== undefined || this.selectedFactionType !== undefined) {
      this.caddyLength = this.selectedUpgradeCardType.defaultLength || this.selectedFactionType.defaultLength;

      let factionText: string = this.selectedFactionType !== undefined ? this.selectedFactionType.title : "";
      let upgradeCardTypeText: string = this.selectedUpgradeCardType !== undefined ? this.selectedUpgradeCardType.title : "";

      this.caddyLabel = `${factionText} ${upgradeCardTypeText}`;
    }
    else {
      this.caddyLabel = "";
    }
  }
}
