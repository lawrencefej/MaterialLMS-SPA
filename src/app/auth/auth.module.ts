import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ForgotPasswordComponent,
    LoginComponent,
    ResetPasswordComponent
  ],
  imports: [
    SharedModule,

  ],
  exports: [
    ForgotPasswordComponent,
    LoginComponent,
    ResetPasswordComponent
  ]
})
export class AuthModule { }
