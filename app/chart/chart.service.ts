/**
 * Created by deoliveiralucas on 14/05/2016
 */
import { Injectable } from '@angular/core';

import { ENTRIES } from '../entries/mock-entries';

@Injectable()
export class ChartService {
    getDataChart(entries) {
        let response = [];
        let chartService = this;

        entries.forEach(function(mood) {
            let date = chartService.formatDate(mood.time);

            if (response[date] === undefined) {
                response[date] = {
                    total: 0,
                    count: 0
                };
            }

            response[date].total += mood.moodValue;
            response[date].count += 1;
        });

        let arrData = [];
        arrData.push(['Day', 'Mood', { role: 'style' }]);
        for (var date in response) {
            let average = response[date].total / response[date].count;

            arrData.push([
                date,
                average,
                this.getColumnColor(average)
            ]);
        }

        return arrData;
    }

    renderChart() {
        google.charts.setOnLoadCallback(this.drawChart);

        (function ($) {
            $(window).on('resize', function() {
                google.charts.setOnLoadCallback(new ChartService().drawChart);
            });
        })(jQuery);
    }

    drawChart() {
        let entries = JSON.parse(localStorage.getItem("entries"));
        var data = new google.visualization.arrayToDataTable(new ChartService().getDataChart(entries));

        var options = {
            title: "My mood day-by-day \nYour mood could range from happy (5) until awful (1)",
            height: 300,
            bar: { groupWidth: "95%" },
            legend: { position: "none" },
        };

        var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));

        chart.draw(data, options);
    }

    private formatDate(date: Date) {
        let monthNames = [
            "Jan", "Feb", "Mar", "Apr",
            "May", "Jun", "Jul", "Aug",
            "Sep", "Oct", "Nov", "Dec"
        ];

        let date = new Date(date);
        let day = date.getDate();
        let monthIndex = date.getMonth();
        let year = date.getFullYear();

        return monthNames[monthIndex] + "/" + day + "/" + year;
    }

    private getColumnColor(moodValue: number) {
        if (moodValue >= 4) {
            return '#2fd56a';
        } else if (moodValue >= 3) {
            return '#678e75';
        } else if (moodValue >= 2) {
            return '#b14444';
        }
        return '#ff0000';
    }
}