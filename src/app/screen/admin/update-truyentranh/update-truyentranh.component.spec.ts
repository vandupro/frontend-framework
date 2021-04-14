import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTruyentranhComponent } from './update-truyentranh.component';

describe('UpdateTruyentranhComponent', () => {
  let component: UpdateTruyentranhComponent;
  let fixture: ComponentFixture<UpdateTruyentranhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTruyentranhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTruyentranhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
