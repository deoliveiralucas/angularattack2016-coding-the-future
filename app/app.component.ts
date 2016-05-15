import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {PersonComponent} from './person/person.component';
import {MoodComponent} from './mood/mood.component';
import {SituationAddComponent} from './situation/situation-add/situation-add.component';
import {SituationListComponent} from './situation/situation-list/situation-list.component';
import {ChartComponent} from './chart/chart.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {path: '/', redirectTo: ['Person']},
    {path: '/person',name: 'Person',component: PersonComponent, useAsDefault: true},
    {path: '/mood',name: 'Mood',component: MoodComponent},
    {path: '/situation/list',name: 'SituationList',component: SituationListComponent},
    {path: '/situation/add',name: 'SituationAdd',component: SituationAddComponent},
    {path: '/chart',name: 'Chart',component: ChartComponent}
])

export class AppComponent {
    
}