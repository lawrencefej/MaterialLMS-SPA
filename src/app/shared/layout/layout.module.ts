import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { NavigationModule } from '../navigation/navigation.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';

@NgModule({
  exports: [BaseLayoutComponent, DashboardLayoutComponent, DefaultLayoutComponent, LoginLayoutComponent],
  declarations: [BaseLayoutComponent, DashboardLayoutComponent, DefaultLayoutComponent, LoginLayoutComponent],
  imports: [
    NavigationModule,
    SharedModule],
  entryComponents: []
})
export class AppLayoutModule {}
