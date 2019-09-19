import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { PreventUnsavedComponent } from '../shared/prevent-unsaved/prevent-unsaved.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(public snackBar: MatSnackBar, private dialog: MatDialog) {}
  action = 'Dismiss';

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'bottom',
    politeness: 'assertive'
  };

  success(message: string) {
    this.config.panelClass = ['notification', 'success'];
    this.snackBar.open(message, this.action, this.config);
  }

  error(message: string) {
    this.action.fontcolor('black');
    this.config.panelClass = ['notification', 'error'];
    this.snackBar.open(message, this.action, this.config);
  }

  warn(message: string) {
    this.config.panelClass = ['notification', 'warn'];
    this.snackBar.open(message, this.action, this.config);
  }

  message(message: string) {
    this.config.panelClass = ['notification', 'message'];
    this.snackBar.open(message, this.action, this.config);
  }

  confirm(msg: string) {
    return this.dialog.open(ConfirmDialogComponent, {
      width: '340px',
      disableClose: true,
      data: {
        message: msg
      }
    });
  }

  discardDialog(msg: string) {
    this.dialog.open(PreventUnsavedComponent, {
      width: '340px'
    });
  }
}
