import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

import { Checkout } from '../_models/checkout';
import { CheckoutService } from '../_services/checkout.service';
import { Injectable } from '@angular/core';
import { NotificationService } from '../_services/notification.service';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class CheckoutDetailResolver implements Resolve<Checkout> {
  constructor(
    private checkoutService: CheckoutService,
    private router: Router,
    private notify: NotificationService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Checkout> {
    return this.checkoutService.getCheckout(route.params.id).pipe(
      catchError(error => {
        this.notify.error('Problem retrieving data');
        this.router.navigate(['/members']);
        return of(null);
      })
    );
  }
}
