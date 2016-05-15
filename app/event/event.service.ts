/**
 * Created by deoliveiralucas on 14/05/2016
 */
import { Injectable } from '@angular/core';

import { ENTRIES } from '../entries/mock-entries';

@Injectable()
export class EventService {
    private entries: Array<any>;

    getEventsMood() {
        let entries = this.getEntries();
        let eventsMoodAwful   = [];
        let eventsMoodBad     = [];
        let eventsMoodNormal  = [];
        let eventsMoodGood    = [];
        let eventsMoodHappy   = [];

        entries.forEach(function (entry) {
            if (entry.moodValue == 1) {
                entry.events.forEach(function (event) {
                    if (eventsMoodAwful[event.description] === undefined) {
                        eventsMoodAwful[event.description] = 0;    
                    }
                    eventsMoodAwful[event.description] += 1;
                });
            } else if (entry.moodValue == 2) {
                entry.events.forEach(function(event) {
                    if (eventsMoodBad[event.description] === undefined) {
                        eventsMoodBad[event.description] = 0;
                    }
                    eventsMoodBad[event.description] += 1;
                });
            } else if (entry.moodValue == 3) {
                entry.events.forEach(function(event) {
                    if (eventsMoodNormal[event.description] === undefined) {
                        eventsMoodNormal[event.description] = 0;
                    }
                    eventsMoodNormal[event.description] += 1;
                });
            } else if (entry.moodValue == 4) {
                entry.events.forEach(function(event) {
                    if (eventsMoodGood[event.description] === undefined) {
                        eventsMoodGood[event.description] = 0;
                    }
                    eventsMoodGood[event.description] += 1;
                });
            } else if (entry.moodValue == 5) {
                entry.events.forEach(function(event) {
                    if (eventsMoodHappy[event.description] === undefined) {
                        eventsMoodHappy[event.description] = 0;
                    }
                    eventsMoodHappy[event] += 1;
                });
            }
        });

        return [
            { 
                'mood'  : 'awful', 
                'events': this.getCommonEvents(eventsMoodAwful)
            },
            {
                'mood'  : 'bad',
                'events': this.getCommonEvents(eventsMoodBad)
            },
            {
                'mood'  : 'normal',
                'events': this.getCommonEvents(eventsMoodNormal)
            },
            {
                'mood'  : 'good',
                'events': this.getCommonEvents(eventsMoodGood)
            },
            {
                'mood'  : 'happy',
                'events': this.getCommonEvents(eventsMoodHappy)
            }
        ];
    }

    getEntries() {
        return this.entries;
    }

    setEntries(entries) {
        this.entries = entries;
    }

    getCommonEvents(events) {
        let tuples = [];

        for (let key in events) tuples.push([key, events[key]]);

        tuples.sort(this.compare);
    
        let commonEvents = [];
        let arrLength = (tuples.length > 3) ? 3 : tuples.length;

        for (let i = 0; i < arrLength; i++) {
            let key = tuples[i][0];
            let value = tuples[i][1];

            commonEvents.push(key);
        }
        return commonEvents;
    }

    private compare (a, b) {
        let valueA = a[1];
        let valueB = b[1];

        return valueA > valueB ? -1 : (valueA < valueB ? 1 : 0);
    }
}