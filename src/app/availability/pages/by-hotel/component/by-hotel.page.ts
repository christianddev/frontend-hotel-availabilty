import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { SelectItem } from '../../../../shared/modules/select/interfaces/select.interfaces';
import { HotelService } from '../services/hotel.service';

@Component({
  templateUrl: './by-hotel.page.html',
  styleUrls: ['./by-hotel.page.less'],
})
export class ByHotelPage implements OnInit {
  form: FormGroup = this.fb.group({
    hotelName: new FormControl('', [Validators.required]),
    checkIn: [new Date(), [Validators.required]],
    checkOut: [new Date(), [Validators.required]],
  });

  hotels: SelectItem[] = [];
  constructor(private fb: FormBuilder, private hotelService: HotelService) {}

  ngOnInit(): void {
    this.hotelService.searchHotels().subscribe(res => {
      if (res) {
        this.hotels = res;
      }
    });
  }

  onSubmit() {
    console.log(this.form);
  }
}
