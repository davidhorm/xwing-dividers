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
  defaultDepth: Number = 16;
  shipTokenDepth: Number = 2;
  depth: Number;

  constructor() { 
    this.selectedGearboxSize = GEARBOX_SIZE[0];
    this.depth = this.defaultDepth;
  }

  ngOnInit() {
  }

}
