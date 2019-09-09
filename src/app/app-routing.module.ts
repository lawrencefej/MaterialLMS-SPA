import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  // { path: 'forgotpassword', component: ForgotPasswordComponent },
  // { path: 'resetpassword/:id/:code', component: ResetPasswordComponent },
  // {
  //   path: '',
  //   runGuardsAndResolvers: 'always',
  //   canActivate: [AuthGuard],
  //   children: [
  //     { path: '', redirectTo: 'memberSearch',  pathMatch: 'full' },
  //     { path: 'currentitems', component: MemberHistoryComponent },
  //     { path: 'profileedit', component: MemberEditComponent },
  //     { path: 'memberSearch', component: MemberSearchComponent},
  //     { path: 'advanced-search', component: AdvancedSearchComponent},
  //     { path: 'catalog', component: AssetListComponent, resolve: { assets: AssetListResolver } },
  //     { path: 'catalog/:id', component: AssetDetailComponent, resolve: { asset: AssetDetailResolver } },
  //     { path: 'admin', component: AdminPanelComponent, data: { allowedRoles: ['Admin'] } },
  //     { path: 'members', component: MemberListComponent, data: { allowedRoles: ['Admin', 'Librarian'] },
  //       resolve: { members: MemberListResolver } },
  //     { path: 'members/:id', component: MemberDetailComponent, data: { allowedRoles: ['Admin', 'Librarian'] },
  //       resolve: { member: MemberDetailResolver } },
  //     { path: 'checkouts', component: CheckoutListComponent, data: { allowedRoles: ['Admin', 'Librarian'] },
  //       resolve: { checkouts: CheckoutListResolver } },
  //     { path: 'authors', component: AuthorListComponent, data: { allowedRoles: ['Admin', 'Librarian'] },
  //       resolve: { authors: AuthorListResolver } },
  //     { path: 'authors/:id', component: AuthorAssetComponent, data: { allowedRoles: ['Admin', 'Librarian'] },
  //       resolve: { author: AuthorAssetResolver } },
  //     { path: 'dashboard', component: DashboardComponent, data: { allowedRoles: ['Admin'] }}
  //   ]
  // },
  // { path: '**', redirectTo: 'members', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
