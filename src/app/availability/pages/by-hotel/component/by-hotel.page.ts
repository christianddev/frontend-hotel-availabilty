import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { SelectItem } from 'src/app/shared/components/select/interfaces/select.interfaces';

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

  hotels: SelectItem[] = [
    {
      key: 'AA',
      value: 'AA',
    },
    {
      key: 'BB',
      value: 'BB',
    },
    {
      key: 'CC',
      value: 'CC',
    },
  ];
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.form);
  }
}
