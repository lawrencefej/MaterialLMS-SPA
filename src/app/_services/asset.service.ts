import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LibraryAsset } from '../_models/libraryAsset';
import { PaginatedResult } from '../_models/pagination';
import { HttpParams, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  baseUrl = environment.apiUrl + 'catalog/';

  constructor(private http: HttpClient) {}

  getAssets(): Observable<LibraryAsset[]> {
    return this.http.get<LibraryAsset[]>(this.baseUrl);
  }

  getAsset(id): Observable<LibraryAsset> {
    return this.http.get<LibraryAsset>(this.baseUrl + id);
  }

  searchAsset(name): Observable<LibraryAsset[]> {
    return this.http.get<LibraryAsset[]>(
      this.baseUrl + 'search?SearchString=' + name
    );
  }

  getAssetForAuthor(authorId: number): Observable<LibraryAsset> {
    return this.http.get<LibraryAsset>(this.baseUrl + 'author/' + authorId);
  }

  addAuthor(asset: LibraryAsset) {
    return this.http.post(this.baseUrl, asset);
  }

  updateAsset(id: number, asset: LibraryAsset) {
    return this.http.put(this.baseUrl, asset);
  }

  getPaginatedAssets(
    page?,
    itemsPerPage?
  ): Observable<PaginatedResult<LibraryAsset[]>> {
    const paginatedResult: PaginatedResult<
      LibraryAsset[]
    > = new PaginatedResult<LibraryAsset[]>();

    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append('pagenumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    return this.http
      .get<LibraryAsset[]>(this.baseUrl + 'pagination', {
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

  deleteAsset(assetId: number) {
    return this.http.delete(this.baseUrl + assetId);
  }
}
