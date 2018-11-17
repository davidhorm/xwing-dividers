import { Component, OnInit } from '@angular/core';
import { GearboxSize } from './shared/gearbox-size.model';
import { GEARBOX_SIZE } from './shared/gearbox-size.service';
import { Ship } from "./shared/ship.model";
import { ShipService } from './shared/ship.service';
import { FACTIONS } from './shared/faction.services';
import { Faction } from './shared/faction.model';
import { Product } from './shared/product.model';

@Component({
  selector: 'app-gearbox',
  templateUrl: './gearbox.component.html',
  styleUrls: ['./gearbox.component.css'],
  providers: [ ShipService ]
})
export class GearboxComponent implements OnInit {

  selectedGearboxSize: GearboxSize;
  defaultDepth: number = 16;
  shipTokenDepth: number = 2;
  depth: number;

  factionCollection: Faction[] = FACTIONS;
  selectedFaction: Faction;

  allShipCollection: Ship[];
  filteredShipCollection: Ship[];
  selectedShip: Ship;

  selectedProduct: Product;

  constructor(private shipService: ShipService) { 
    this.selectedFaction = FACTIONS[0];
    this.selectedGearboxSize = GEARBOX_SIZE[0];
    this.depth = this.defaultDepth;
  }

  ngOnInit() {
    this.getShipData();
  }

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
