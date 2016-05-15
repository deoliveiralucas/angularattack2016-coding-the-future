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
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var person_component_1 = require('./person/person.component');
var mood_component_1 = require('./mood/mood.component');
var situation_add_component_1 = require('./situation/situation-add/situation-add.component');
var situation_list_component_1 = require('./situation/situation-list/situation-list.component');
var chart_component_1 = require('./chart/chart.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', redirectTo: ['Person'] },
            { path: '/person', name: 'Person', component: person_component_1.PersonComponent, useAsDefault: true },
            { path: '/mood', name: 'Mood', component: mood_component_1.MoodComponent },
            { path: '/situation/list', name: 'SituationList', component: situation_list_component_1.SituationListComponent },
            { path: '/situation/add', name: 'SituationAdd', component: situation_add_component_1.SituationAddComponent },
            { path: '/chart', name: 'Chart', component: chart_component_1.ChartComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map