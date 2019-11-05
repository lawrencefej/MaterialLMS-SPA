import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { BasketComponent } from '../main/basket/basket/basket.component';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HasRoleDirective } from '../_directives/has-role.directive';
import { MaterialModule } from '../material.module';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { PreventUnsavedComponent } from './prevent-unsaved/prevent-unsaved.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { RouterModule } from '@angular/router';
import { ServerErrorComponent } from './error-pages/server-error/server-error.component';

@NgModule({
  exports: [
    AppRoutingModule,
    BasketComponent,
    CommonModule,
    ConfirmDialogComponent,
    FlexLayoutModule,
    FormsModule,
    HasRoleDirective,
    MaterialModule,
    NotFoundComponent,
    PhoneNumberPipe,
    PreventUnsavedComponent,
    ProgressSpinnerComponent,
    ReactiveFormsModule,
    ServerErrorComponent,
  ],
  declarations: [
    BasketComponent,
    ConfirmDialogComponent,
    HasRoleDirective,
    NotFoundComponent,
    PhoneNumberPipe,
    PreventUnsavedComponent,
    ProgressSpinnerComponent,
    ServerErrorComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  entryComponents: [
    ConfirmDialogComponent,
    PreventUnsavedComponent,
  ]
})
export class SharedModule {}
