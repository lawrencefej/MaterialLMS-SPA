import { RouterModule, Routes } from '@angular/router';

import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: DashboardPanelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
