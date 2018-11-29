import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-front-back',
  templateUrl: './front-back.component.html',
  styleUrls: ['./front-back.component.css']
})
export class FrontBackComponent implements OnInit {
  
  @Input() boxHeight: number;
  @Input() pilotNames: string[];

  constructor() { }

  ngOnInit() {
  }

  getOuterDivStyle() {

    let margin = 3;
    let maxHeight = this.boxHeight - (margin * 2);

    return {
      'font-size': '3.2mm',
      'margin': `${margin}mm`,
      'max-height': `${maxHeight}mm`,
      'overflow-y': 'hidden'
    };
  }
}
