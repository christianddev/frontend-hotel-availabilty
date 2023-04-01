import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByHotelPage } from './by-hotel.page';

describe('ByHotelPage', () => {
  let component: ByHotelPage;
  let fixture: ComponentFixture<ByHotelPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ByHotelPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByHotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
