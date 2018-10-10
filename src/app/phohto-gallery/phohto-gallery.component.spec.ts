import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhohtoGalleryComponent } from './phohto-gallery.component';

describe('PhohtoGalleryComponent', () => {
  let component: PhohtoGalleryComponent;
  let fixture: ComponentFixture<PhohtoGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhohtoGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhohtoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
