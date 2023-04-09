import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiResponse } from 'src/app/availability/interfaces/api-response.interface';
import { Hotel, HotelsResponse } from '../interfaces/hotel.interface';
import { SelectItem } from 'src/app/shared/modules';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  // private apiHotelsUrl = environment.apiHotelsUrl;
  private apiHotelsUrl = '/api/v1/hotels';

  constructor(private httpClient: HttpClient) {}

  private getRequest<T>(url: string) {
    return this.httpClient.get<T>(url).pipe(catchError(() => of([])));
  }

  searchHotels(): Observable<SelectItem[] | undefined> {
    return this.getRequest<any>(`${this.apiHotelsUrl}`).pipe(
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
}
