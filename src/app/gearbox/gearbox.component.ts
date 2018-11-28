import { Component, OnInit } from '@angular/core';
import { GearboxSize } from './shared/gearbox-size.model';
import { GEARBOX_SIZE } from './shared/gearbox-size.service';
import { Ship } from "./shared/ship.model";
import { ShipService } from './shared/ship.service';
import { FACTIONS } from './shared/faction.services';
import { Faction } from './shared/faction.model';
import { Product } from './shared/product.model';
import { Pilot } from './shared/pilot.model';

@Component({
  selector: 'app-gearbox',
  templateUrl: './gearbox.component.html',
  styleUrls: ['./gearbox.component.css'],
  providers: [ ShipService ]
})
export class GearboxComponent implements OnInit {

  /** The depth (mm) of the box with the plastic stand stand, pegs, movement dial, and single ship token. */
  defaultDepth: number = 16;

  /** The depth (mm) of a single ship token. */
  shipTokenDepth: number = 2;

  /** The depth (mm) of the gearbox that will change based on the number of ship tokens. */
  depth: number;

  /** List of factions to show in the Faction dropdown. */
  factionCollection: Faction[] = FACTIONS;

  /** Faction selected in the Faction dropdown. */
  selectedFaction: Faction;

  /** All the ships defined in the ship-data.json. */
  allShipCollection: Ship[];

  /** List of ships to show in the Ship dropdown. */
  filteredShipCollection: Ship[];

  /** Ship selected in the Ship dropdown. */
  selectedShip: Ship;

  /** Size of the selected ship. */
  selectedGearboxSize: GearboxSize;

  /** Product selected in the Product dropdown. */
  selectedProduct: Product;

  /** Selected Pilot Names to print on box. */
  selectedPilotNames: Set<string> = new Set();

  /** The number of ship tokens. Most products will have a set number, but the Conversion Kits will have a dynamic number. */
  numberOfTokens: number;

  constructor(private shipService: ShipService) { 
    this.selectedFaction = FACTIONS[0];
    this.selectedGearboxSize = GEARBOX_SIZE[0];
    this.depth = this.defaultDepth;
  }

  ngOnInit() {
    this.getShipData();
  }

  /** Load ship-data.json into this.shipColection */
  getShipData(): void {
    this.shipService.getShipData()
      .subscribe((shipData: Ship[]) => {
        this.allShipCollection = shipData;
        this.onSelectedFactionChange();
      });
  }

  onSelectedFactionChange(): void {
    this.filteredShipCollection = this.allShipCollection.filter(ship => ship.faction === this.selectedFaction.name);
    this.selectedShip = this.filteredShipCollection[0];
    this.onSelectedShipChange();
  }

  onSelectedShipChange(): void {
    this.selectedProduct = this.selectedShip.products[0];
    this.onSelectedProductChange();
    this.setSelectedGearboxSize();
  }

  onSelectedProductChange(): void {
    this.setSelectedPilotNames();
  }

  onSelectedShipTokensChange(selected: any[]): void {
    let pilots: Pilot[] = [];

    selected.forEach(shipToken => {
      pilots.push(shipToken.value[0]);
      pilots.push(shipToken.value[1]);
    });
    
    pilots.sort((a,b) => {
      return b.initiative - a.initiative || a.name.localeCompare(b.name);
    })
    
    this.selectedPilotNames.clear();
    pilots.forEach(pilot => {
      this.selectedPilotNames.add(pilot.name);
    });

    this.numberOfTokens = selected.length;
    this.setDepth();
  }

  /** Set the Width and Height of the box based on the selected ship. */
  setSelectedGearboxSize(): void {
    this.selectedGearboxSize = GEARBOX_SIZE.filter( size => size.name === this.selectedShip.size)[0];
  }

  /** Set the depth of the gearbox based on number of ship tokens. */
  setDepth(): void {
    let extraTokens = Math.max(this.numberOfTokens - 1, 0);

    this.depth = (extraTokens * this.shipTokenDepth) + this.defaultDepth;
  }

  /** Set the selected pilot names. By default, the product will have set names. But Conversion Kits can allow customizable list. */
  setSelectedPilotNames(): void {
    this.selectedPilotNames.clear();

    if (this.selectedProduct.pilotNames !== undefined) {
      this.selectedPilotNames = new Set(this.selectedProduct.pilotNames);
      this.numberOfTokens = this.selectedProduct.numberOfTokens;
    }
    else if (this.selectedProduct.shipTokens !== undefined) {
      this.selectedProduct.shipTokens.forEach(shipToken => {
        this.selectedPilotNames.add(shipToken[0].name);
        this.selectedPilotNames.add(shipToken[1].name);
      });

      this.numberOfTokens = this.selectedProduct.shipTokens.length;
    }

    this.setDepth();
  }

  getRotateTableStyle() {
    let newHeight = this.depth*3 + this.selectedGearboxSize.height;

    return {
      'transform': `rotate(90deg) translateX(-${newHeight}mm)`,
      'transform-origin': 'left bottom',
      'height': `${newHeight}mm`
    };
  }

  getTopSideFlapStyle(side: string) {
    let buffer = 3;

    return {
      'height': `${this.depth-buffer}mm`, 
      'border-top-left-radius': side === "left" ? `${this.depth-buffer}mm`: null,
      'border-top-right-radius': side === "right" ? `${this.depth-buffer}mm`: null,
      'margin-top': `${buffer}mm`
    };
  }
}
