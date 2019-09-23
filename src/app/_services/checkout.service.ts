import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { Checkout } from '../_models/checkout';
import { Injectable } from '@angular/core';
import { PaginatedResult } from '../_models/pagination';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  baseUrl = environment.apiUrl + 'checkouts/';
  private checkout = new Subject<Checkout>();

  constructor(private http: HttpClient) {}

  getCheckout(checkoutId: number): Observable<Checkout> {
    return this.http.get<Checkout>(this.baseUrl + checkoutId);
  }

  getCheckouts(): Observable<Checkout[]> {
    return this.http.get<Checkout[]>(this.baseUrl);
  }

  getCheckoutsForMember(userId: number): Observable<Checkout[]> {
    return this.http.get<Checkout[]>(this.baseUrl + 'user/' + userId);
  }

  searchCheckouts(searchString: string): Observable<Checkout[]> {
    return this.http.get<Checkout[]>(
      this.baseUrl + '/search?SearchString=' + searchString
    );
  }

  returnAsset(id: number) {
    return this.http.put(this.baseUrl + id, {});
  }

  getCheckoutsForAsset(assetId: number): Observable<Checkout[]> {
    return this.http.get<Checkout[]>(
      this.baseUrl + 'asset/' + assetId
    );
  }

  checkoutAsset(checkout: Checkout) {
    return this.http.post(this.baseUrl, checkout);
  }

  getNewCheckout(): Observable<Checkout> {
    return this.checkout.asObservable();
  }

  sendNewCheckout(checkout: Checkout) {
    this.checkout.next(checkout);
  }

  getPaginatedAuthors(
    page?,
    itemsPerPage?
  ): Observable<PaginatedResult<Checkout[]>> {
    const paginatedResult: PaginatedResult<Checkout[]> = new PaginatedResult<
      Checkout[]
    >();

    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append('pagenumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    return this.http
      .get<Checkout[]>(this.baseUrl + '/pagination', {
        observe: 'response',
        params
      })
      .pipe(
        map(response => {
          paginatedResult.result = response.body;
          if (response.headers.get('Pagination') != null) {
            paginatedResult.pagination = JSON.parse(
              response.headers.get('Pagination')
            );
          }
          return paginatedResult;
        })
      );
  }
}
