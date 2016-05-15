"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by deoliveiralucas on 14/05/2016.
 */
var core_1 = require('@angular/core');
var mock_chart_1 = require('./mock-chart');
var chart_service_1 = require('./chart.service');
var ChartComponent = (function () {
    function ChartComponent(chartService) {
        this.chartService = chartService;
        chartService.renderChart(mock_chart_1.MOODIES);
    }
    ChartComponent = __decorate([
        core_1.Component({
            selector: 'chart',
            providers: [chart_service_1.ChartService],
            templateUrl: 'app/chart/chart.component.html'
        }), 
        __metadata('design:paramtypes', [chart_service_1.ChartService])
    ], ChartComponent);
    return ChartComponent;
}());
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=chart.component.js.map