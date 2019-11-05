import { AdminComponent } from './admin/admin.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  exports: [],
  declarations: [AdminComponent, AdminPanelComponent],
  imports: [SharedModule],
  entryComponents: [AdminComponent]
})
export class AdminModule {}
