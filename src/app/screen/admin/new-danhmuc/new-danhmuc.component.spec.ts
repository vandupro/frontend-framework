import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDanhmucComponent } from './new-danhmuc.component';

describe('NewDanhmucComponent', () => {
  let component: NewDanhmucComponent;
  let fixture: ComponentFixture<NewDanhmucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDanhmucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDanhmucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
