import { AssetCheckoutComponent } from './asset-checkout/asset-checkout.component';
import { AssetComponent } from './asset/asset.component';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  exports: [
    AssetCheckoutComponent,
    AssetDetailComponent,
    AssetListComponent,
  ],
  declarations: [
      AssetComponent,
      AssetCheckoutComponent,
      AssetDetailComponent,
      AssetListComponent,
  ],
  imports: [
    SharedModule
  ],
  entryComponents: [AssetComponent]
})
export class AssetModule {}
