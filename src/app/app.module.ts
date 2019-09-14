import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddAdminComponent } from './main/admin/add-admin/add-admin.component';
import { AddAssetComponent } from './main/libraryAssets/add-asset/add-asset.component';
import { AddAuthorComponent } from './main/author/add-author/add-author.component';
import { AdminPanelComponent } from './main/admin/admin-panel/admin-panel.component';
import { AdminService } from './_services/admin.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AssetCheckoutComponent } from './main/libraryAssets/asset-checkout/asset-checkout.component';
import { AssetDetailComponent } from './main/libraryAssets/asset-detail/asset-detail.component';
import { AssetDetailResolver } from './_resolver/asset-detail.resolver';
import { AssetListComponent } from './main/libraryAssets/asset-list/asset-list.component';
import { AssetListResolver } from './_resolver/asset-list.resolver';
import { AssetService } from './_services/asset.service';
import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './_services/auth.service';
import { AuthorAssetComponent } from './main/author/author-asset/author-asset.component';
import { AuthorAssetResolver } from './_resolver/author-asset.resolver';
import { AuthorListComponent } from './main/author/author-list/author-list.component';
import { AuthorListResolver } from './_resolver/author-list.resolver';
import { AuthorService } from './_services/author.service';
import { BarChartComponent } from './dashboard/charts/bar-chart/bar-chart.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CheckoutAssetComponent } from './main/checkout/checkout-asset/checkout-asset.component';
import { CheckoutDetailResolver } from './_resolver/checkout-detail.resolver';
import { CheckoutListComponent } from './main/checkout/checkout-list/checkout-list.component';
import { CheckoutListResolver } from './_resolver/checkout-list.resolver';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './core/confirm-dialog/confirm-dialog.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ErrorinterceptorProvider } from './_services/error.interceptor';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { HasRoleDirective } from './_directives/hasRole.directive';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { LayoutModule } from '@angular/cdk/layout';
import { LineChartComponent } from './dashboard/charts/line-chart/line-chart.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MemberAdvancedSearchComponent } from './main/member/member-advanced-search/member-advanced-search.component';
import { MemberCheckoutsComponent } from './main/member/member-checkouts/member-checkouts.component';
import { MemberDetailComponent } from './main/member/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { MemberEditComponent } from './main/member/member-edit/member-edit.component';
import { MemberHistoryComponent } from './main/member/member-history/member-history.component';
import { MemberListComponent } from './main/member/member-list/member-list.component';
import { MemberListResolver } from './_resolver/member-list.resolver';
import { MemberSearchComponent } from './main/member/member-search/member-search.component';
import { MemberService } from './_services/member.service';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './core/error-pages/not-found/not-found.component';
import { NotificationService } from './_services/notification.service';
import { PhotoService } from './_services/photo.service';
import { PieChartComponent } from './dashboard/charts/pie-chart/pie-chart.component';
import { PreventUnsavedComponent } from './core/prevent-unsaved/prevent-unsaved.component';
import { ReportService } from './_services/report.service';
import { ReportsPanelComponent } from './dashboard/reports-panel/reports-panel.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ResponsiveNavComponent } from './core/responsive-nav/responsive-nav.component';
import { ServerErrorComponent } from './core/error-pages/server-error/server-error.component';
import { ShortcloseNavComponent } from './shortclose-nav/shortclose-nav.component';
import { TestComponent } from './core/test/test.component';
import { UserService } from './_services/user.service';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AddAdminComponent,
      AddAssetComponent,
      AddAuthorComponent,
      AdminPanelComponent,
      AppComponent,
      AssetCheckoutComponent,
      AssetDetailComponent,
      AssetListComponent,
      AuthorAssetComponent,
      AuthorListComponent,
      BarChartComponent,
      BaseLayoutComponent,
      CheckoutAssetComponent,
      CheckoutListComponent,
      ConfirmDialogComponent,
      ForgotPasswordComponent,
      HasRoleDirective,
      LineChartComponent,
      LoginComponent,
      LoginLayoutComponent,
      MemberAdvancedSearchComponent,
      MemberCheckoutsComponent,
      MemberDetailComponent,
      MemberEditComponent,
      MemberHistoryComponent,
      MemberListComponent,
      MemberSearchComponent,
      NotFoundComponent,
      PieChartComponent,
      PreventUnsavedComponent,
      ReportsPanelComponent,
      ResetPasswordComponent,
      ResponsiveNavComponent,
      ServerErrorComponent,
      ShortcloseNavComponent,
      TestComponent,
      DataTableComponent,
   ],
   imports: [
      AppRoutingModule,
      BrowserAnimationsModule,
      BrowserModule,
      CommonModule,
      FormsModule,
      HttpClientModule,
      LayoutModule,
      MatAutocompleteModule,
      MatButtonModule,
      MatCardModule,
      MatDatepickerModule,
      MatDialogModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatNativeDateModule,
      MatRadioModule,
      MatSelectModule,
      MatSidenavModule,
      MatSnackBarModule,
      MatSortModule,
      MatTableModule,
      MatToolbarModule,
      MatTooltipModule,
      MatPaginatorModule,
      MatProgressSpinnerModule,
      ReactiveFormsModule,
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
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
