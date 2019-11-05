import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { ResponsiveNavComponent } from './responsive-nav/responsive-nav.component';
import { SharedModule } from '../shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  exports: [
    FooterComponent,
    HeaderComponent,
    ResponsiveNavComponent,
    SidebarComponent
  ],
  declarations: [
      FooterComponent,
      HeaderComponent,
      ResponsiveNavComponent,
      SidebarComponent
    ],
  imports: [SharedModule],
  entryComponents: []
})
export class NavigationModule {}
