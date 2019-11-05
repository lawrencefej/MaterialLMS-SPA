import { CheckoutModule } from '../checkout/checkout.module';
import { MemberAdvancedSearchComponent } from './member-advanced-search/member-advanced-search.component';
import { MemberCheckoutsComponent } from './member-checkouts/member-checkouts.component';
import { MemberComponent } from './member/member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberSearchComponent } from './member-search/member-search.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  exports: [
    MemberComponent,
    MemberAdvancedSearchComponent,
    MemberCheckoutsComponent,
    MemberDetailComponent,
    MemberListComponent,
    MemberSearchComponent
  ],
  declarations: [
    MemberComponent,
    MemberAdvancedSearchComponent,
    MemberCheckoutsComponent,
    MemberDetailComponent,
    MemberListComponent,
    MemberSearchComponent
  ],
  imports: [SharedModule, CheckoutModule],
  entryComponents: [MemberComponent]
})
export class MemberModule {}
