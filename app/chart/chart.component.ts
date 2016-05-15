/**
 * Created by deoliveiralucas on 14/05/2016.
 */
import { Component } from '@angular/core';

import { ChartService } from './chart.service';

@Component({
    selector: 'chart',
    providers: [ChartService],
    templateUrl: 'app/chart/chart.component.html'
})
export class ChartComponent { 
    private chartService: ChartService;

    constructor(chartService: ChartService) { 
        this.chartService = chartService;
    }

    public ngOnInit() {
        this.chartService.renderChart();
    }
}