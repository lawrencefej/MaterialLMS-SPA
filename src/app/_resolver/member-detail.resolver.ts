import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { MemberService } from './../_services/member.service';
import { NotificationService } from '../_services/notification.service';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../_models/user';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class MemberDetailResolver implements Resolve<User> {
  constructor(private memberService: MemberService, private router: Router, private notify: NotificationService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.memberService.getMember(route.params.id).pipe(
      catchError(error => {
        this.notify.error('Problem retrieving data');
        this.router.navigate(['/members']);
        return of(null);
      })
    );
  }
}
