import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AdminComponent } from './main/admin/admin/admin.component';
import { AdminListResolver } from './_resolver/admin-list.resolver';
import { AdminService } from './_services/admin.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AssetComponent } from './main/libraryAssets/asset/asset.component';
import { AssetDetailResolver } from './_resolver/asset-detail.resolver';
import { AssetListResolver } from './_resolver/asset-list.resolver';
import { AssetService } from './_services/asset.service';
import { AuthGuard } from './_guards/auth.guard';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './_services/auth.service';
import { AuthorAssetResolver } from './_resolver/author-asset.resolver';
import { AuthorComponent } from './main/author/author/author.component';
import { AuthorListResolver } from './_resolver/author-list.resolver';
import { AuthorService } from './_services/author.service';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { BasketService } from './_services/basket.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CanDeactivateGuard } from './_guards/can-deactivate.guard';
import { CheckoutDetailResolver } from './_resolver/checkout-detail.resolver';
import { CheckoutListResolver } from './_resolver/checkout-list.resolver';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ErrorInterceptor } from './_services/error.interceptor';
import { HasRoleDirective } from './_directives/hasRole.directive';
import { JwtModule } from '@auth0/angular-jwt';
import { LayoutModule } from '@angular/cdk/layout';
import { LoaderInterceptor } from './_services/loader-interceptor';
import { LoaderService } from './_services/loader.service';
import { MainModule } from './main/main.module';
import { MemberComponent } from './main/member/member/member.component';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
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
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    DashboardModule,
    HttpClientModule,
    LayoutModule,
    MainModule,
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
    AdminService,
    AdminListResolver,
    AssetDetailResolver,
    AssetListResolver,
    AssetService,
    AuthGuard,
    AuthorAssetResolver,
    AuthorListResolver,
    AuthorService,
    AuthService,
    BasketService,
    CanDeactivateGuard,
    CheckoutDetailResolver,
    CheckoutListResolver,
    // ErrorinterceptorProvider,
    LoaderService,
    MemberDetailResolver,
    MemberListResolver,
    MemberService,
    NotificationService,
    PhotoService,
    ReportService,
    UserService,
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  entryComponents: [
    AdminComponent,
    AssetComponent,
    AuthorComponent,
    ConfirmDialogComponent,
    MemberComponent,
    PreventUnsavedComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
