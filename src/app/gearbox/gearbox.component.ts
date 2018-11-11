import { Component, OnInit } from '@angular/core';
import { GearboxSize } from './gearbox-size.model';
import { GEARBOX_SIZE } from './gearbox-size.service';

@Component({
  selector: 'app-gearbox',
  templateUrl: './gearbox.component.html',
  styleUrls: ['./gearbox.component.css']
})
export class GearboxComponent implements OnInit {

  selectedGearboxSize: GearboxSize;
  defaultDepth: number = 16;
  shipTokenDepth: number = 2;
  depth: number;

  constructor() { 
    this.selectedGearboxSize = GEARBOX_SIZE[0];
    this.depth = this.defaultDepth;
  }

  rotateTable() {
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

  ngOnInit() {
  }

}
