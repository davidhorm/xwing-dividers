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

    let topMargin = 4.5;
    let horizontalMargin = 3;
    let bottomMargin = 1.5;
    let maxHeight = this.boxHeight - topMargin - bottomMargin;

    return {
      'font-size': '3.2mm',
      'margin': `${topMargin}mm ${horizontalMargin}mm ${bottomMargin}mm`,
      'max-height': `${maxHeight}mm`,
      'overflow-y': 'hidden'
    };
  }
}
