import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtComicComponent } from './qt-comic.component';

describe('QtComicComponent', () => {
  let component: QtComicComponent;
  let fixture: ComponentFixture<QtComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QtComicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QtComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
