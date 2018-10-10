import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,query,stagger
} from '@angular/animations';
@Component({
  selector: 'animation-list',
  templateUrl: './animation-list.component.html',
  styleUrls: ['./animation-list.component.css'],
  animations: [
    trigger('photosAnimation', [
      transition('* => *', [
        query('img',style({ transform: 'translateX(-100%)'})),
        query('img',
          stagger('600ms', [
            animate('900ms', style({ transform: 'translateX(0)' }))
        ]))
      ])
    ])
  ]
})
export class AnimationListComponent {
  photo="https://www.petmd.com/sites/default/files/fish-that-can-live-in-bowl.jpg";

  constructor() { }

  ngOnInit() {
  }

}
