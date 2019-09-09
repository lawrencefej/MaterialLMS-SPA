import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Checkout } from '../_models/checkout';
import { CheckoutService } from '../_services/checkout.service';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CheckoutDetailResolver implements Resolve<Checkout> {
  constructor(
    private checkoutService: CheckoutService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Checkout> {
    return this.checkoutService.getCheckout(route.params['id']).pipe(
      catchError(error => {
        // this.alertify.error('Problem retrieving data');
        this.router.navigate(['/members']);
        return of(null);
      })
    );
  }
}
