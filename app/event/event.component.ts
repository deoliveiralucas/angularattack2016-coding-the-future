/**
 * Created by deoliveiralucas on 14/05/2016.
 */
import { Component } from '@angular/core';

import { EventService } from './event.service';
import { EntriesService } from '../entries/entries.service';

@Component({
    selector: 'events',
    providers: [EventService, EntriesService],
    templateUrl: 'app/event/event.component.html'
})
export class EventComponent {
    public mainEvents: Array<any>;
    private eventService: EventService;
    private entriesService: EntriesService;

    constructor(eventService: EventService, entriesService: EntriesService) {
        this.eventService = eventService;
        this.entriesService = entriesService;
    }

    public ngOnInit() {
        this.eventService.setEntries(this.entriesService.getStorage());
        this.mainEvents = this.eventService.getEventsMood();
    }
}