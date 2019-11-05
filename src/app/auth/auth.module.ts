import { AuthRoutingModule } from './auth.routing';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    ForgotPasswordComponent,
    LoginComponent,
    ResetPasswordComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    AuthRoutingModule,
  ],
  exports: [
    ForgotPasswordComponent,
    LoginComponent,
    ResetPasswordComponent
  ]
})
export class AuthModule { }
