import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { TestComponent } from './core/test/test.component';
import { ShortcloseNavComponent } from './shortclose-nav/shortclose-nav.component';
import { ResponsiveNavComponent } from './core/responsive-nav/responsive-nav.component';
import { HasRoleDirective } from './_directives/hasRole.directive';
import { NotFoundComponent } from './core/error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './core/error-pages/server-error/server-error.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { MemberAdvancedSearchComponent } from './main/member/member-advanced-search/member-advanced-search.component';
import { MemberCheckoutsComponent } from './main/member/member-checkouts/member-checkouts.component';
import { MemberDetailComponent } from './main/member/member-detail/member-detail.component';
import { MemberEditComponent } from './main/member/member-edit/member-edit.component';
import { MemberHistoryComponent } from './main/member/member-history/member-history.component';
import { MemberListComponent } from './main/member/member-list/member-list.component';
import { MemberSearchComponent } from './main/member/member-search/member-search.component';
import { AddAdminComponent } from './main/admin/add-admin/add-admin.component';
import { AddAssetComponent } from './main/libraryAssets/add-asset/add-asset.component';
import { AddAuthorComponent } from './main/author/add-author/add-author.component';
import { AuthorAssetComponent } from './main/author/author-asset/author-asset.component';
import { AuthorListComponent } from './main/author/author-list/author-list.component';
import { AdminPanelComponent } from './main/admin/admin-panel/admin-panel.component';
import { BarChartComponent } from './dashboard/charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './dashboard/charts/line-chart/line-chart.component';
import { PieChartComponent } from './dashboard/charts/pie-chart/pie-chart.component';
import { ReportsPanelComponent } from './dashboard/reports-panel/reports-panel.component';
import { CheckoutAssetComponent } from './main/checkout/checkout-asset/checkout-asset.component';
import { CheckoutListComponent } from './main/checkout/checkout-list/checkout-list.component';
import { AssetCheckoutComponent } from './main/libraryAssets/asset-checkout/asset-checkout.component';
import { AssetDetailComponent } from './main/libraryAssets/asset-detail/asset-detail.component';
import { AssetListComponent } from './main/libraryAssets/asset-list/asset-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';

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
      ReportsPanelComponent,
      ResetPasswordComponent,
      ResponsiveNavComponent,
      ServerErrorComponent,
      ShortcloseNavComponent,
      TestComponent,
   ],
   imports: [
      AppRoutingModule,
      BrowserAnimationsModule,
      BrowserModule,
      CommonModule,
      FormsModule,
      LayoutModule,
      MatButtonModule,
      MatCardModule,
      MatDialogModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatSidenavModule,
      MatToolbarModule,
      MatTableModule,
      MatProgressSpinnerModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
