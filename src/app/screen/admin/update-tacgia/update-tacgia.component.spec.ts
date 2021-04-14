import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTacgiaComponent } from './update-tacgia.component';

describe('UpdateTacgiaComponent', () => {
  let component: UpdateTacgiaComponent;
  let fixture: ComponentFixture<UpdateTacgiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTacgiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTacgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
