import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './navigation/footer/footer.component';
import { HeaderComponent } from './navigation/header/header.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { MaterialModule } from '../material.module';
import { NavComponent } from './navigation/nav/nav.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { PreventUnsavedComponent } from './prevent-unsaved/prevent-unsaved.component';
import { RouterModule } from '@angular/router';
import { ServerErrorComponent } from './error-pages/server-error/server-error.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    DashboardLayoutComponent,
    DefaultLayoutComponent,
    FooterComponent,
    HeaderComponent,
    LoginLayoutComponent,
    NotFoundComponent,
    PreventUnsavedComponent,
    ServerErrorComponent,
    SidebarComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ConfirmDialogComponent,
    DashboardLayoutComponent,
    DefaultLayoutComponent,
    FooterComponent,
    HeaderComponent,
    LoginLayoutComponent,
    NotFoundComponent,
    PreventUnsavedComponent,
    ServerErrorComponent,
    SidebarComponent,
    FlexLayoutModule,
    NavComponent,
  ]
})
export class SharedModule {}
