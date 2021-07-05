import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardspinnerComponent } from './cardspinner.component';

describe('CardspinnerComponent', () => {
  let component: CardspinnerComponent;
  let fixture: ComponentFixture<CardspinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardspinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
