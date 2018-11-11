import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  constructor() { }

  @Input() shipName:string;
  @Input() side:string;
  @Input() boxDepth:number;
  @Input() sideWidth:number;

  getSideStyle() {
    let padding = 3;

    return {
      'padding': `${padding}mm`,
      'height': `${this.boxDepth - (padding * 2)}mm`,
      'width': `${this.sideWidth - (padding * 2)}mm`,
      'transform': `${this.getTransform()}`
    };
  }

  getTransform() {
    if(this.side === 'top') {
      return "rotate(180deg) translate(-100%, -50%);";
    }
    else if (this.side === 'left') {
      return "rotate(90deg) translate(-50%, -100%);";
    }
    else if (this.side === 'right') {
      return "rotate(-90deg) translate(-50%);";
    }
    else if (this.side === 'bottom') {
      return "rotate(0deg) translate(0, -50%);";
    }
  }
  
  ngOnInit() {
  }

}
