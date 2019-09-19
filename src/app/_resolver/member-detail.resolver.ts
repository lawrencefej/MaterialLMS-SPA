import { MemberService } from './../_services/member.service';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MemberDetailResolver implements Resolve<User> {
  constructor(private memberService: MemberService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.memberService.getMember(route.params['id']).pipe(
      catchError(error => {
        // this.alertify.error('Problem retrieving data');
        this.router.navigate(['/members']);
        return of(null);
      })
    );
  }
}
