import { Injectable, NgZone } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(public snackBar: MatSnackBar, private zone: NgZone) {}
  action = 'Dismiss';

  success(message: string) {
    this.snackBar.open(message, this.action, {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

  error(message: string) {
    this.snackBar.open(message, this.action, {
      duration: 3000,
      panelClass: ['error-snackbar']
    });
  }

  warning(message: string) {
    this.snackBar.open(message, this.action, {
      duration: 3000,
      panelClass: ['warning-snackbar']
    });
  }

  message(message: string) {
    this.snackBar.open(message, this.action, {
      duration: 3000,
      panelClass: ['message-snackbar']
    });
  }
}
