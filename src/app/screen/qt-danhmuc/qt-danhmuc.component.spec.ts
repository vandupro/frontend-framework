import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtDanhmucComponent } from './qt-danhmuc.component';

describe('QtDanhmucComponent', () => {
  let component: QtDanhmucComponent;
  let fixture: ComponentFixture<QtDanhmucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QtDanhmucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QtDanhmucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
