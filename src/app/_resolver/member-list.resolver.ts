import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { MemberService } from './../_services/member.service';
import { NotificationService } from '../_services/notification.service';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../_models/user';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
  pageNumber = 1;
  pageSize = 5;

  constructor(
    private memberService: MemberService,
    private router: Router,
    private notify: NotificationService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    return this.memberService
      .getPaginatedMembers(this.pageNumber, this.pageSize, '', '', '')
      .pipe(
        catchError(() => {
          this.notify.error('Problem retrieving data');
          this.router.navigate(['/memberSearch']);
          return of(null);
        })
      );
  }
}
