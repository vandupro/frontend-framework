import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTacgiaComponent } from './new-tacgia.component';

describe('NewTacgiaComponent', () => {
  let component: NewTacgiaComponent;
  let fixture: ComponentFixture<NewTacgiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTacgiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTacgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
