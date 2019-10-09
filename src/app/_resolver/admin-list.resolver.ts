import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AdminService } from '../_services/admin.service';
import { Injectable } from '@angular/core';
import { NotificationService } from '../_services/notification.service';
import { User } from '../_models/user';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AdminListResolver implements Resolve<User[]> {
  constructor(private adminService: AdminService, private notify: NotificationService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    return this.adminService.getAdmins().pipe(
      catchError(() => {
        this.notify.error('Problem retrieving data');
        this.router.navigate(['/memberSearch']);
        return of(null);
      })
    );
  }
}
