import { CheckoutAssetComponent } from './checkout-asset/checkout-asset.component';
import { CheckoutListComponent } from './checkout-list/checkout-list.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  exports: [
    CheckoutAssetComponent,
    CheckoutListComponent
  ],
  declarations: [
      CheckoutAssetComponent,
      CheckoutListComponent
    ],
  imports: [
    SharedModule
  ],
  entryComponents: []
})
export class CheckoutModule {}
