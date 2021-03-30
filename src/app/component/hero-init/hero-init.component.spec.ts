import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInitComponent } from './hero-init.component';

describe('HeroInitComponent', () => {
  let component: HeroInitComponent;
  let fixture: ComponentFixture<HeroInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
