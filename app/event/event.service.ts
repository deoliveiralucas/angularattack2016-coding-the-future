/**
 * Created by deoliveiralucas on 14/05/2016
 */
import { Injectable } from '@angular/core';

import { ENTRIES } from '../entries/mock-entries';

@Injectable()
export class EventService {
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
                    if (eventsMoodAwful[event] === undefined) {
                        eventsMoodAwful[event] = 0;    
                    }
                    eventsMoodAwful[event] += 1;
                });
            } else if (entry.moodValue == 2) {
                entry.events.forEach(function(event) {
                    if (eventsMoodBad[event] === undefined) {
                        eventsMoodBad[event] = 0;
                    }
                    eventsMoodBad[event] += 1;
                });
            } else if (entry.moodValue == 3) {
                entry.events.forEach(function(event) {
                    if (eventsMoodNormal[event] === undefined) {
                        eventsMoodNormal[event] = 0;
                    }
                    eventsMoodNormal[event] += 1;
                });
            } else if (entry.moodValue == 4) {
                entry.events.forEach(function(event) {
                    if (eventsMoodGood[event] === undefined) {
                        eventsMoodGood[event] = 0;
                    }
                    eventsMoodGood[event] += 1;
                });
            } else if (entry.moodValue == 5) {
                entry.events.forEach(function(event) {
                    if (eventsMoodHappy[event] === undefined) {
                        eventsMoodHappy[event] = 0;
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
        return ENTRIES;
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