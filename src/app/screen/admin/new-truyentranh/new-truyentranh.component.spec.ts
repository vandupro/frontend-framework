import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTruyentranhComponent } from './new-truyentranh.component';

describe('NewTruyentranhComponent', () => {
  let component: NewTruyentranhComponent;
  let fixture: ComponentFixture<NewTruyentranhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTruyentranhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTruyentranhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
