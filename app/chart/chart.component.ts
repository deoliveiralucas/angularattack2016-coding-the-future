/**
 * Created by deoliveiralucas on 14/05/2016.
 */
import { Component } from '@angular/core';

import { MOODIES } from './mock-chart';
import { ChartService } from './chart.service';

@Component({
    selector: 'chart',
    providers: [ChartService],
    templateUrl: 'app/chart/chart.component.html'
})
export class ChartComponent { 
    constructor(private chartService: ChartService) {
        chartService.renderChart(MOODIES);
    }
}