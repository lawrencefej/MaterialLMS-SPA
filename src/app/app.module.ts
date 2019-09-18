import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddAdminComponent } from './main/admin/add-admin/add-admin.component';
import { AddAssetComponent } from './main/libraryAssets/add-asset/add-asset.component';
import { AddAuthorComponent } from './main/author/add-author/add-author.component';
import { AdminService } from './_services/admin.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AssetDetailResolver } from './_resolver/asset-detail.resolver';
import { AssetListResolver } from './_resolver/asset-list.resolver';
import { AssetService } from './_services/asset.service';
import { AuthGuard } from './_guards/auth.guard';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './_services/auth.service';
import { AuthorAssetResolver } from './_resolver/author-asset.resolver';
import { AuthorListResolver } from './_resolver/author-list.resolver';
import { AuthorService } from './_services/author.service';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CheckoutDetailResolver } from './_resolver/checkout-detail.resolver';
import { CheckoutListResolver } from './_resolver/checkout-list.resolver';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ErrorinterceptorProvider } from './_services/error.interceptor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HasRoleDirective } from './_directives/hasRole.directive';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { LayoutModule } from '@angular/cdk/layout';
import { MainModule } from './main/main.module';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { MemberEditComponent } from './main/member/member-edit/member-edit.component';
import { MemberListResolver } from './_resolver/member-list.resolver';
import { MemberService } from './_services/member.service';
import { NgModule } from '@angular/core';
import { NotificationService } from './_services/notification.service';
import { PhotoService } from './_services/photo.service';
import { PreventUnsavedComponent } from './shared/prevent-unsaved/prevent-unsaved.component';
import { ReportService } from './_services/report.service';
import { ResponsiveNavComponent } from './core/responsive-nav/responsive-nav.component';
import { SharedModule } from './shared/shared.module';
import { ShortcloseNavComponent } from './shortclose-nav/shortclose-nav.component';
import { TestComponent } from './core/test/test.component';
import { UserService } from './_services/user.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    HasRoleDirective,
    ResponsiveNavComponent,
    ShortcloseNavComponent,
    TestComponent,
    DataTableComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    LayoutModule,
    MainModule,
    ReactiveFormsModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/auth/']
      }
    })
  ],
  providers: [
    AuthService,
    ErrorinterceptorProvider,
    AssetService,
    AdminService,
    AuthGuard,
    UserService,
    AuthorService,
    ReportService,
    AssetDetailResolver,
    AssetListResolver,
    MemberListResolver,
    MemberDetailResolver,
    CheckoutListResolver,
    CheckoutDetailResolver,
    AuthorListResolver,
    AuthorAssetResolver,
    PhotoService,
    MemberService,
    NotificationService
  ],
  entryComponents: [
    MemberEditComponent,
    AddAuthorComponent,
    AddAssetComponent,
    AddAdminComponent,
    ConfirmDialogComponent,
    PreventUnsavedComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
