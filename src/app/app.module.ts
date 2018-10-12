import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PopoverComponent } from './popover/popover.component';
import { AnimationListComponent } from './animation-list/animation-list.component';
import { PhohtoGalleryComponent } from './phohto-gallery/phohto-gallery.component';
import { SlideComponent } from './slide/slide.component';


@NgModule({
  declarations: [
    AppComponent,
    PopoverComponent,
    AnimationListComponent,
    PhohtoGalleryComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
