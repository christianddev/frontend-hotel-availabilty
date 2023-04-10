import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import { ApiResponse } from '../../../interfaces/';
import { Hotel, RoomsAvailability } from '../interfaces/';
import { SelectItem } from '../../../../shared/modules';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private apiHotelsUrl = environment.apiHotelsUrl;
  private apiAvailabilityUrl = environment.apiAvailabilityUrl;

  constructor(private httpClient: HttpClient) {}

  private getRequest<T>(url: string) {
    return this.httpClient.get<T>(url).pipe(catchError(() => of<T>()));
  }

  getHotels(): Observable<SelectItem[] | undefined> {
    return this.getRequest<ApiResponse<Hotel[]>>(`${this.apiHotelsUrl}`).pipe(
      map((response: ApiResponse<Hotel[]>) => {
        const items: SelectItem[] = [];
        if (response?.data?.hotels) {
          for (const hotel of response.data?.hotels) {
            items.push({ key: hotel.code, name: hotel.name });
          }
        }
        return items;
      })
    );
  }

  searchAvailability(
    hotelCode: string,
    checkInDate: string,
    checkOutDate: string
  ): Observable<RoomsAvailability | undefined> {
    return this.getRequest<ApiResponse<RoomsAvailability>>(
      `${this.apiAvailabilityUrl}/${hotelCode}/${checkInDate}/${checkOutDate}`
    ).pipe(
      map(
        (response: ApiResponse<RoomsAvailability>) =>
          response?.data?.rooms ?? undefined
      )
    );
  }
}
