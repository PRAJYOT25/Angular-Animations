import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group
} from '@angular/animations';
@Component({
  selector: 'slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  animations:[
    trigger('flyInOut',[
      transition('void => *',[
        style({transform:'translateX(-100%)'}),
        animate('1s')
      ]),
      transition('* => void',[
        animate('1s',style({transform:'translateX(100%)'}))
      ])      
    ])
  ]
})
export class SlideComponent implements OnInit {
showDiv:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  toggleDiv(){
    this.showDiv=!this.showDiv;
  }
}
