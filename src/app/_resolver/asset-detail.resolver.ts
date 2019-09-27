import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AssetService } from '../_services/asset.service';
import { Injectable } from '@angular/core';
import { LibraryAsset } from '../_models/libraryAsset';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AssetDetailResolver implements Resolve<LibraryAsset> {
  constructor(
    private assetService: AssetService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<LibraryAsset> {
    return this.assetService.getAsset(route.params.id).pipe(
      catchError(error => {
        // this.alertify.error('Problem retrieving data');
        this.router.navigate(['/catalog']);
        return of(null);
      })
    );
  }
}
