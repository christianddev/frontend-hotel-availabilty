import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  templateUrl: './by-hotel.page.html',
  styleUrls: ['./by-hotel.page.less'],
})
export class ByHotelPage {
  form: FormGroup = this.fb.group({
    hotelName: new FormControl('', [Validators.required]),
    checkIn: [new Date(), [Validators.required]],
    checkOut: [new Date(), [Validators.required]],
  });

  hotels: string[] = ['hotel-a', 'hotel-b', 'hotel-c'];
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.form);
  }
}
