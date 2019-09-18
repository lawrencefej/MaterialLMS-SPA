import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { AddAssetComponent } from './libraryAssets/add-asset/add-asset.component';
import { AddAuthorComponent } from './author/add-author/add-author.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AssetCheckoutComponent } from './libraryAssets/asset-checkout/asset-checkout.component';
import { AssetDetailComponent } from './libraryAssets/asset-detail/asset-detail.component';
import { AssetListComponent } from './libraryAssets/asset-list/asset-list.component';
import { AuthorAssetComponent } from './author/author-asset/author-asset.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { BarChartComponent } from './dashboard/charts/bar-chart/bar-chart.component';
import { CheckoutAssetComponent } from './checkout/checkout-asset/checkout-asset.component';
import { CheckoutListComponent } from './checkout/checkout-list/checkout-list.component';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './dashboard/charts/line-chart/line-chart.component';
import { MemberAdvancedSearchComponent } from './member/member-advanced-search/member-advanced-search.component';
import { MemberCheckoutsComponent } from './member/member-checkouts/member-checkouts.component';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { MemberEditComponent } from './member/member-edit/member-edit.component';
import { MemberHistoryComponent } from './member/member-history/member-history.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberSearchComponent } from './member/member-search/member-search.component';
import { NgModule } from '@angular/core';
import { PieChartComponent } from './dashboard/charts/pie-chart/pie-chart.component';
import { ReportsPanelComponent } from './dashboard/reports-panel/reports-panel.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AddAdminComponent,
    AddAssetComponent,
    AddAuthorComponent,
    AdminPanelComponent,
    AssetCheckoutComponent,
    AssetDetailComponent,
    AssetListComponent,
    AuthorAssetComponent,
    AuthorListComponent,
    BarChartComponent,
    CheckoutAssetComponent,
    CheckoutListComponent,
    LineChartComponent,
    MemberAdvancedSearchComponent,
    MemberCheckoutsComponent,
    MemberDetailComponent,
    MemberEditComponent,
    MemberHistoryComponent,
    MemberListComponent,
    MemberSearchComponent,
    PieChartComponent,
    ReportsPanelComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    AddAdminComponent,
    AddAssetComponent,
    AddAuthorComponent,
    AdminPanelComponent,
    AssetCheckoutComponent,
    AssetDetailComponent,
    AssetListComponent,
    AuthorAssetComponent,
    AuthorListComponent,
    BarChartComponent,
    CheckoutAssetComponent,
    CheckoutListComponent,
    LineChartComponent,
    MemberAdvancedSearchComponent,
    MemberCheckoutsComponent,
    MemberDetailComponent,
    MemberEditComponent,
    MemberHistoryComponent,
    MemberListComponent,
    MemberSearchComponent,
    PieChartComponent,
    ReportsPanelComponent,
  ]
})
export class MainModule {}
