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
 * Created by deoliveiralucas on 14/05/2016
 */
var core_1 = require('@angular/core');
var ChartService = (function () {
    function ChartService() {
    }
    ChartService.prototype.getDataChart = function (moodies) {
        var response = [];
        var chartService = this;
        moodies.forEach(function (mood) {
            var date = chartService.formatDate(mood.time);
            if (response[date] === undefined) {
                response[date] = {
                    total: 0,
                    count: 0
                };
            }
            response[date].total += mood.moodValue;
            response[date].count += 1;
        });
        var arrData = [];
        arrData.push(['Day', 'Mood', { role: 'style' }]);
        for (var date in response) {
            var average = response[date].total / response[date].count;
            arrData.push([
                date,
                average,
                this.getColumnColor(average)
            ]);
        }
        return arrData;
    };
    ChartService.prototype.renderChart = function (moodies) {
        var dataChart = this.getDataChart(moodies);
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            var data = google.visualization.arrayToDataTable(dataChart);
            var options = {
                title: "My mood day-by-day \nYour mood could range from happy (5) until awful (1)",
                width: '100%',
                height: 300,
                bar: { groupWidth: "95%" },
                legend: { position: "none" },
            };
            var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
            chart.draw(data, options);
        });
    };
    ChartService.prototype.formatDate = function (date) {
        var monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        return monthNames[monthIndex] + "/" + day + "/" + year;
    };
    ChartService.prototype.getColumnColor = function (moodValue) {
        if (moodValue >= 4) {
            return '#2fd56a';
        }
        else if (moodValue >= 3) {
            return '#678e75';
        }
        else if (moodValue >= 2) {
            return '#b14444';
        }
        return '#ff0000';
    };
    ChartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ChartService);
    return ChartService;
}());
exports.ChartService = ChartService;
//# sourceMappingURL=chart.service.js.map