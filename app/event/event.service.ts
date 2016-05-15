/**
 * Created by deoliveiralucas on 14/05/2016
 */
import { Injectable } from '@angular/core';

import { ENTRIES } from '../entries/mock-entries';

@Injectable()
export class EventService {
    getEventsMood() {
        let entries = this.getEntries();
        let eventsMoodAwful = [];
        let eventsMoodBad = [];
        let eventsMoodNormal = [];
        let eventsMoodGood = [];
        let eventsMoodHappy = [];

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

        return {
            'awful' : this.getCommonEvents(eventsMoodAwful),
            'bad'   : this.getCommonEvents(eventsMoodBad),
            'normal': this.getCommonEvents(eventsMoodNormal),
            'good'  : this.getCommonEvents(eventsMoodGood),
            'happy' : this.getCommonEvents(eventsMoodHappy)
        };
    }

    getEntries() {
        return ENTRIES;
    }

    getCommonEvents(events) {
        let prevValue = 0;
        let mostCommonEvent = 0;
        for (let key in events) {
            if (events[key] > prevValue) {
                mostCommonEvent = key;
            }
            prevValue = events[key];
        }
        return mostCommonEvent;
    }
}