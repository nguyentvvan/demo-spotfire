import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { routes } from './app.route';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { WaterfallChartComponent } from './components/waterfall-chart/waterfall-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { CombinationChartComponent } from './components/combination-chart/combination-chart.component';
import { MapChartComponent } from './components/map-chart/map-chart.component';
import { KpiChartComponent } from './components/kpi-chart/kpi-chart.component';
import { ScatterPlotComponent } from './components/scatter-plot/scatter-plot.component';
import { ParallelCoordinatePlotComponent } from './components/parallel-coordinate-plot/parallel-coordinate-plot.component';
import { TreemapComponent } from './components/treemap/treemap.component';
import { SpotfireTableComponent } from './components/spotfire-table/spotfire-table.component';
import { SpotfireCrossTableComponent } from './components/spotfire-cross-table/spotfire-cross-table.component';
import { SpotfireGraphicalTableComponent } from './components/spotfire-graphical-table/spotfire-graphical-table.component';
import { ThreeDimensionScatterPlotComponent } from './components/three-dimension-scatter-plot/three-dimension-scatter-plot.component';
import { HeatMapComponent } from './components/heat-map/heat-map.component';
import { BoxPlotComponent } from './components/box-plot/box-plot.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    PieChartComponent,
    NavBarComponent,
    SpotfireTableComponent,
    SpotfireCrossTableComponent,
    WaterfallChartComponent,
    LineChartComponent,
    CombinationChartComponent,
    MapChartComponent,
    KpiChartComponent,
    ScatterPlotComponent,
    ParallelCoordinatePlotComponent,
    TreemapComponent,
    SpotfireTableComponent,
    SpotfireCrossTableComponent,
    SpotfireGraphicalTableComponent,
    SpotfireGraphicalTableComponent,
    ThreeDimensionScatterPlotComponent,
    HeatMapComponent,
    BoxPlotComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
