import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

import { getDateFormatted, SelectItem } from '../../../../shared';
import { HotelService } from '../services/';
import { Breakdown, Rates, RoomsAvailability } from '../interfaces';

@Component({
  templateUrl: './by-hotel.page.html',
  styleUrls: ['./by-hotel.page.less'],
})
export class ByHotelPage implements OnInit {
  form: FormGroup = this.fb.group({
    hotel: new FormControl('', [Validators.required]),
    checkIn: [new Date(), [Validators.required]],
    checkOut: [new Date(), [Validators.required]],
  });

  hotels: SelectItem[] = [];
  rooms: RoomsAvailability = {};
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private hotelService: HotelService) {}

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe(res => {
      if (res) {
        this.hotels = res;
      }
    });
  }

  onSubmit() {
    const { hotel, checkIn, checkOut } = this.form.value;
    const checkInFormatted = getDateFormatted(checkIn);
    const checkOutFormatted = getDateFormatted(checkOut);
    this.isLoading = true;
    this.hotelService
      .searchAvailability(hotel?.key, checkInFormatted, checkOutFormatted)
      .subscribe(response => {
        if (response) {
          this.rooms = response;
        }
        this.isLoading = false;
      });
  }

  getKeys(room: RoomsAvailability | Rates | Breakdown) {
    return Object.keys(room);
  }
}
