import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';

@NgModule({
  exports: [
  ],
  declarations: [
      UserProfileComponent,
      UserProfileEditComponent
],
  imports: [
    SharedModule
  ],
  entryComponents: [UserProfileEditComponent]
})
export class UserModule {}
