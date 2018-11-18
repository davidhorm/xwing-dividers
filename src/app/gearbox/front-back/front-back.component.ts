import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-front-back',
  templateUrl: './front-back.component.html',
  styleUrls: ['./front-back.component.css']
})
export class FrontBackComponent implements OnInit {

  @Input() factionIcon: string;
  @Input() shipIcon: string;
  @Input() pilotNames: string[];

  constructor() { }

  ngOnInit() {
  }

}
