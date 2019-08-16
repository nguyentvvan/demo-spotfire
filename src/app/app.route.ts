import { Routes } from '@angular/router';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { SpotfireTableComponent } from './components/spotfire-table/spotfire-table.component';
import { SpotfireCrossTableComponent } from './components/spotfire-cross-table/spotfire-cross-table.component';
import { WaterfallChartComponent } from './components/waterfall-chart/waterfall-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { CombinationChartComponent } from './components/combination-chart/combination-chart.component';
import { ScatterPlotComponent } from './components/scatter-plot/scatter-plot.component';
import { MapChartComponent } from './components/map-chart/map-chart.component';
import { TreemapComponent } from './components/treemap/treemap.component';
import { KpiChartComponent } from './components/kpi-chart/kpi-chart.component';
import { ParallelCoordinatePlotComponent } from './components/parallel-coordinate-plot/parallel-coordinate-plot.component';
import { SpotfireGraphicalTableComponent } from './components/spotfire-graphical-table/spotfire-graphical-table.component';
import { ThreeDimensionScatterPlotComponent } from './components/three-dimension-scatter-plot/three-dimension-scatter-plot.component';
import { HeatMapComponent } from './components/heat-map/heat-map.component';
import { BoxPlotComponent } from './components/box-plot/box-plot.component';

export const routes: any = [
    {
        path: '',
        name: 'Home',
        component: BarChartComponent
    },{
        path: 'table',
        name: 'Table',
        component: SpotfireTableComponent
    },{
        path: 'cross-table',
        name: 'Cross table',
        component: SpotfireCrossTableComponent
    },{
        path: 'graphical-table',
        name: 'Graphical table',
        component: SpotfireGraphicalTableComponent
    },{
        path: 'bar-chart',
        name: 'Bar chart',
        component: BarChartComponent
    },{
        path: 'waterfall-chart',
        name: 'Waterfall chart',
        component: WaterfallChartComponent
    },{
        path: 'line-chart',
        name: 'Line chart',
        component: LineChartComponent
    },{
        path: 'combination-chart',
        name: 'Combination chart',
        component: CombinationChartComponent
    },{
        path: 'pie-chart',
        name: 'Pie chart',
        component: PieChartComponent
    },{
        path: 'box-plot',
        name: 'Box plot',
        component: BoxPlotComponent
    },{
        path: 'scatter-plot',
        name: 'Scatter plot',
        component: ScatterPlotComponent
    },{
        path: '3d-scatter-plot',
        name: '3D Scatter plot',
        component: ThreeDimensionScatterPlotComponent
    },{
        path: 'map-chart',
        name: 'Map chart',
        component: MapChartComponent
    },{
        path: 'treemap',
        name: 'Treemap',
        component: TreemapComponent
    },{
        path: 'heat-map',
        name: 'Heat map',
        component: HeatMapComponent
    },{
        path: 'kpi-chart',
        name: 'KPI chart',
        component: KpiChartComponent
    },{
        path: 'parallel-coordinate-plot',
        name: 'Parallel coordinate plot',
        component: ParallelCoordinatePlotComponent
    }
];