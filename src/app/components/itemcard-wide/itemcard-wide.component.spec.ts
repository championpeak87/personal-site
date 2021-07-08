import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcardWideComponent } from './itemcard-wide.component';

describe('ItemcardWideComponent', () => {
  let component: ItemcardWideComponent;
  let fixture: ComponentFixture<ItemcardWideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemcardWideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemcardWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
