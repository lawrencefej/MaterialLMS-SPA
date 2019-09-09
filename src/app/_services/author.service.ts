import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Author } from '../_models/author';
import { LibraryAsset } from '../_models/libraryAsset';
import { PaginatedResult } from '../_models/pagination';
import { Checkout } from '../_models/checkout';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  baseUrl = environment.apiUrl + 'author/';

  constructor(private http: HttpClient) {}

  getAuthor(id): Observable<Author> {
    return this.http.get<Author>(this.baseUrl + id);
  }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.baseUrl);
  }

  searchAuthors(searchString): Observable<Author[]> {
    return this.http.get<Author[]>(
      this.baseUrl + 'search?SearchString=' + searchString
    );
  }

  updateAuthors(author: Author) {
    return this.http.put(this.baseUrl, author);
  }

  getAssetForAuthor(authorId: number): Observable<LibraryAsset[]> {
    return this.http.get<LibraryAsset[]>(
      environment.apiUrl + 'catalog/author/' + authorId
    );
  }

  addAuthor(author: Author) {
    return this.http.post(this.baseUrl, author);
  }

  getPaginatedAuthors(
    page?,
    itemsPerPage?
  ): Observable<PaginatedResult<Author[]>> {
    const paginatedResult: PaginatedResult<Author[]> = new PaginatedResult<
      Author[]
    >();

    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append('pagenumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    return this.http
      .get<Checkout[]>(this.baseUrl + 'pagination', {
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
