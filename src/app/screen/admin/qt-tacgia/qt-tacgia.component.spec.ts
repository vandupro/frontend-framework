import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtTacgiaComponent } from './qt-tacgia.component';

describe('QtTacgiaComponent', () => {
  let component: QtTacgiaComponent;
  let fixture: ComponentFixture<QtTacgiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QtTacgiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QtTacgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
