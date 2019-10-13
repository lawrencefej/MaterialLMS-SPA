import { AdminComponent } from './admin/admin/admin.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AssetCheckoutComponent } from './libraryAssets/asset-checkout/asset-checkout.component';
import { AssetComponent } from './libraryAssets/asset/asset.component';
import { AssetDetailComponent } from './libraryAssets/asset-detail/asset-detail.component';
import { AssetListComponent } from './libraryAssets/asset-list/asset-list.component';
import { AuthorAssetComponent } from './author/author-asset/author-asset.component';
import { AuthorComponent } from './author/author/author.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { BasketComponent } from './basket/basket/basket.component';
import { BasketDetailComponent } from './basket/basket-detail/basket-detail.component';
import { CheckoutAssetComponent } from './checkout/checkout-asset/checkout-asset.component';
import { CheckoutListComponent } from './checkout/checkout-list/checkout-list.component';
import { MemberAdvancedSearchComponent } from './member/member-advanced-search/member-advanced-search.component';
import { MemberCheckoutsComponent } from './member/member-checkouts/member-checkouts.component';
import { MemberComponent } from './member/member/member.component';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { MemberHistoryComponent } from './member/member-history/member-history.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberSearchComponent } from './member/member-search/member-search.component';
import { NgModule } from '@angular/core';
import { ReportsPanelComponent } from './dashboard/reports-panel/reports-panel.component';
import { SharedModule } from '../shared/shared.module';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AdminComponent,
    AssetComponent,
    AuthorComponent,
    AdminPanelComponent,
    AssetCheckoutComponent,
    AssetDetailComponent,
    AssetListComponent,
    AuthorAssetComponent,
    AuthorListComponent,
    BasketComponent,
    BasketDetailComponent,
    CheckoutAssetComponent,
    CheckoutListComponent,
    MemberAdvancedSearchComponent,
    MemberCheckoutsComponent,
    MemberDetailComponent,
    MemberComponent,
    MemberHistoryComponent,
    MemberListComponent,
    MemberSearchComponent,
    ReportsPanelComponent,
    UserProfileComponent
  ],
  imports: [SharedModule],
  exports: [
    AdminComponent,
    AssetComponent,
    AuthorComponent,
    AdminPanelComponent,
    AssetCheckoutComponent,
    AssetDetailComponent,
    AssetListComponent,
    AuthorAssetComponent,
    AuthorListComponent,
    BasketComponent,
    BasketDetailComponent,
    CheckoutAssetComponent,
    CheckoutListComponent,
    MemberAdvancedSearchComponent,
    MemberCheckoutsComponent,
    MemberDetailComponent,
    MemberComponent,
    MemberHistoryComponent,
    MemberListComponent,
    MemberSearchComponent,
    ReportsPanelComponent
  ]
})
export class MainModule {}
