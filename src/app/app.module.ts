import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AdminListResolver } from './_resolver/admin-list.resolver';
import { AdminModule } from './main/admin/admin.module';
import { AdminService } from './_services/admin.service';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './shared/layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AssetDetailResolver } from './_resolver/asset-detail.resolver';
import { AssetListResolver } from './_resolver/asset-list.resolver';
import { AssetModule } from './main/libraryAssets/asset.module';
import { AssetService } from './_services/asset.service';
import { AuthGuard } from './_guards/auth.guard';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './_services/auth.service';
import { AuthorAssetResolver } from './_resolver/author-asset.resolver';
import { AuthorListResolver } from './_resolver/author-list.resolver';
import { AuthorModule } from './main/author/author.module';
import { AuthorService } from './_services/author.service';
import { BasketService } from './_services/basket.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CheckoutDetailResolver } from './_resolver/checkout-detail.resolver';
import { CheckoutListResolver } from './_resolver/checkout-list.resolver';
import { CheckoutModule } from './main/checkout/checkout.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ErrorInterceptor } from './_services/error.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { LayoutModule } from '@angular/cdk/layout';
import { LoaderInterceptor } from './_services/loader-interceptor';
import { LoaderService } from './_services/loader.service';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { MemberListResolver } from './_resolver/member-list.resolver';
import { MemberModule } from './main/member/member.module';
import { MemberService } from './_services/member.service';
import { NavigationModule } from './shared/navigation/navigation.module';
import { NgModule } from '@angular/core';
import { NotificationService } from './_services/notification.service';
import { PhotoService } from './_services/photo.service';
import { ReportService } from './_services/report.service';
import { UserModule } from './main/user/user.module';
import { UserProfileResolver } from './_resolver/user-profile.resolver';
import { UserService } from './_services/user.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  exports: [],
  declarations: [
    AppComponent,
    // ServerErrorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    AdminModule,
    AppLayoutModule,
    MemberModule,
    AssetModule,
    CheckoutModule,
    AuthorModule,
    DashboardModule,
    UserModule,
    AuthModule,
    NavigationModule,
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
    CheckoutDetailResolver,
    CheckoutListResolver,
    LoaderService,
    MemberDetailResolver,
    MemberListResolver,
    MemberService,
    NotificationService,
    PhotoService,
    ReportService,
    UserProfileResolver,
    UserService,
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
