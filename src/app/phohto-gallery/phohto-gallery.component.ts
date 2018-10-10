import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
@Component({
  selector: 'phohto-gallery',
  templateUrl: './phohto-gallery.component.html',
  styleUrls: ['./phohto-gallery.component.css'],
  animations: [
    trigger('photoState', [
      state('move', style({
        transform: 'translateX(-100%)',
      })),
      state('enlarge',   style({
        transform: 'scale(1.5)',
      })),
      state('spin',   style({
        transform: 'rotateY(180deg) rotateZ(90deg)',
      })),
      transition('* => move',
      animate('2000ms', keyframes([
        style({transform: 'translateX(0)    rotateY(0)',        offset: 0}),
        style({transform: 'translateX(50%)  rotateY(90deg)',    offset: 0.33}),
        style({transform: 'translateY(-75%) rotateY(180deg)',   offset: 0.66}),
        style({transform: 'translateX(-100%)',                  offset: 1.0})
      ])
    ))    ])
  ]
})
export class PhohtoGalleryComponent {
position:string;
photoURL="https://www.petmd.com/sites/default/files/fish-that-can-live-in-bowl.jpg";
  constructor() { }
  changePosition(newPosition:string)
  {
    this.position=newPosition;
  }
  logAnimation($event) {
    console.log(`${this.position} animation ${$event.phaseName}`)
  }
}
