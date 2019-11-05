import { AuthorAssetComponent } from './author-asset/author-asset.component';
import { AuthorComponent } from './author/author.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  exports: [
      AuthorListComponent
  ],
  declarations: [
      AuthorComponent,
      AuthorAssetComponent,
      AuthorListComponent
    ],
  imports: [
    SharedModule
  ],
  entryComponents: [AuthorComponent]
})
export class AuthorModule {}
