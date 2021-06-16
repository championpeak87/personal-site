import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNameComponent } from './header-name.component';

describe('HeaderNameComponent', () => {
  let component: HeaderNameComponent;
  let fixture: ComponentFixture<HeaderNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
