import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  baseUrl = environment.apiUrl + 'member/';

  constructor(private http: HttpClient) {}

  getMember(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + id);
  }

  getMemberByCardNumber(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'card/' + id);
  }

  advancedMemberSearch(params: any): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + params);
  }

  updateMember(user: User) {
    return this.http.put(this.baseUrl, user);
  }

  deleteMember(memberId: number) {
    return this.http.delete(this.baseUrl + memberId);
  }

  AddMember(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  getPaginatedMembers(
    page?,
    itemsPerPage?
  ): Observable<PaginatedResult<User[]>> {
    const paginatedResult: PaginatedResult<User[]> = new PaginatedResult<
      User[]
    >();

    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append('pagenumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    return this.http
      .get<User[]>(this.baseUrl + 'pagination', {
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
