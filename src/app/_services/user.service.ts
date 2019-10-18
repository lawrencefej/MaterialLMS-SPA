import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedResult } from '../_models/pagination';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl + 'user/';

  constructor(private http: HttpClient) {}

  getUser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + id);
  }

  getMemberByCardNumber(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'card/' + id);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  searchMembers(searchString): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'search?SearchString=' + searchString);
  }

  advancedMemberSearch(params: any): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + params);
  }

  updateUser(id: number, user: User) {
    return this.http.put(this.baseUrl + id, user);
  }

  deleteUser(memberId: number) {
    return this.http.delete(this.baseUrl + memberId);
  }

  AddMember(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  getPaginatedMembers(page?, itemsPerPage?): Observable<PaginatedResult<User[]>> {
    const paginatedResult: PaginatedResult<User[]> = new PaginatedResult<User[]>();

    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append('pagenumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    return this.http.get<User[]>(this.baseUrl + 'pagination', { observe: 'response', params }).pipe(
      map(response => {
        paginatedResult.result = response.body;
        if (response.headers.get('Pagination') != null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      })
    );
  }
}
