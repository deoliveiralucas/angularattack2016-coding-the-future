/**
 * Created by deoliveiralucas on 14/05/2016.
 */
import { Component } from '@angular/core';

import { EventService } from './event.service';

@Component({
    selector: 'events',
    providers: [EventService],
    templateUrl: 'app/event/event.component.html'
})
export class EventComponent {
    public mainEvents: Array<any>;
    private eventService: EventService;

    constructor(eventService: EventService) {
        this.eventService = eventService;
    }

    public ngOnInit() {
        this.mainEvents = this.eventService.getEventsMood();
    }
}