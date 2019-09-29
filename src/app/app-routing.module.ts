import { RouterModule, Routes } from '@angular/router';

import { AdminPanelComponent } from './main/admin/admin-panel/admin-panel.component';
import { AssetDetailComponent } from './main/libraryAssets/asset-detail/asset-detail.component';
import { AssetDetailResolver } from './_resolver/asset-detail.resolver';
import { AssetListComponent } from './main/libraryAssets/asset-list/asset-list.component';
import { AssetListResolver } from './_resolver/asset-list.resolver';
import { AuthGuard } from './_guards/auth.guard';
import { AuthorAssetComponent } from './main/author/author-asset/author-asset.component';
import { AuthorAssetResolver } from './_resolver/author-asset.resolver';
import { AuthorListComponent } from './main/author/author-list/author-list.component';
import { AuthorListResolver } from './_resolver/author-list.resolver';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { CanDeactivateGuard } from './_guards/can-deactivate.guard';
import { CheckoutListComponent } from './main/checkout/checkout-list/checkout-list.component';
import { CheckoutListResolver } from './_resolver/checkout-list.resolver';
import { DashboardLayoutComponent } from './shared/layout/dashboard-layout/dashboard-layout.component';
import { DashboardPanelComponent } from './dashboard/dashboard-panel/dashboard-panel.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginLayoutComponent } from './shared/layout/login-layout/login-layout.component';
import { MemberAdvancedSearchComponent } from './main/member/member-advanced-search/member-advanced-search.component';
import { MemberDetailComponent } from './main/member/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { MemberHistoryComponent } from './main/member/member-history/member-history.component';
import { MemberListComponent } from './main/member/member-list/member-list.component';
import { MemberListResolver } from './_resolver/member-list.resolver';
import { MemberSearchComponent } from './main/member/member-search/member-search.component';
import { NgModule } from '@angular/core';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'member-search', pathMatch: 'full' },
      { path: 'current-items', component: MemberHistoryComponent },
      { path: 'member-search', component: MemberSearchComponent },
      { path: 'advanced-search', component: MemberAdvancedSearchComponent },
      {
        path: 'catalog',
        component: AssetListComponent,
        resolve: { assets: AssetListResolver }
      },
      {
        path: 'catalog/:id',
        component: AssetDetailComponent,
        resolve: { asset: AssetDetailResolver }
      },
      {
        path: 'admin',
        component: AdminPanelComponent,
        data: { allowedRoles: ['Admin'] }
      },
      {
        path: 'members',
        component: MemberListComponent,
        data: { allowedRoles: ['Admin', 'Librarian'] },
        resolve: { members: MemberListResolver }
      },
      {
        path: 'members/:id',
        component: MemberDetailComponent,
        canDeactivate: [CanDeactivateGuard],
        data: { allowedRoles: ['Admin', 'Librarian'] },
        resolve: { member: MemberDetailResolver }
      },
      {
        path: 'checkouts',
        component: CheckoutListComponent,
        data: { allowedRoles: ['Admin', 'Librarian'] },
        resolve: { checkouts: CheckoutListResolver }
      },
      {
        path: 'authors',
        component: AuthorListComponent,
        data: { allowedRoles: ['Admin', 'Librarian'] },
        resolve: { authors: AuthorListResolver }
      },
      {
        path: 'authors/:id',
        component: AuthorAssetComponent,
        data: { allowedRoles: ['Admin', 'Librarian'] },
        resolve: { author: AuthorAssetResolver }
      },
    ]
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {path: 'dashboard',
      component: DashboardPanelComponent,
      data: {allowedRoles: ['Admin']}
    }
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'reset-password/:id/:code', component: ResetPasswordComponent }
    ]
  },
  { path: '**', redirectTo: 'member-search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
