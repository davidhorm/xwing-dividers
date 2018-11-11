import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  constructor() { }

  @Input() shipName:string;
  @Input() boxSide:string;
  @Input() boxDepth:number;
  @Input() sideWidth:number;

  getSideStyle() {
    let padding = 3;
    let transformStyle = this.getTransform();

    return {
      'padding': `${padding}mm`,
      'height': `${this.boxDepth - (padding * 2)}mm`,
      'width': `${this.sideWidth - (padding * 2)}mm`,
      'transform-origin': 'top left',
      'transform': `${transformStyle}`,
      'position': 'absolute'
    };
  }

  getTransform():string {
    if(this.boxSide === 'top') {
      return "rotate(180deg) translate(-100%, -50%)";
    }
    else if (this.boxSide === 'left') {
      return "rotate(90deg) translate(-50%, -100%)";
    }
    else if (this.boxSide === 'right') {
      return "rotate(-90deg) translate(-50%)";
    }
    else if (this.boxSide === 'bottom') {
      return "rotate(0deg) translate(0, -50%)";
    }
    else {
      return null;
    }
  }
  
  ngOnInit() {
  }

}
