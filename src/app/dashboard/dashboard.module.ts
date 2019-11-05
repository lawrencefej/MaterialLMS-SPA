import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { FlexModule } from '@angular/flex-layout';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { MaterialModule } from '../material.module';
import { NgModule } from '@angular/core';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { TotalCardComponent } from './total-card/total-card.component';

@NgModule({
  declarations: [BarChartComponent, DashboardPanelComponent, LineChartComponent, PieChartComponent, TotalCardComponent],
  imports: [ChartsModule, DashboardRoutingModule, MaterialModule, CommonModule, FlexModule],
  exports: []
})
export class DashboardModule {}
