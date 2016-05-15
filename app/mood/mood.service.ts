import {Injectable} from '@angular/core';
import {Mood} from '../mood/mood.model';

@Injectable()
export class MoodService {
    public setStorage(item: Mood) {
        var object: string = JSON.stringify(item);
        localStorage.setItem('selected-mood', object);
    }

    public getStorage() {
        var item: string = localStorage.getItem("selected-mood");
        return JSON.parse(item);
    }

    public moodsList() {
        return [
            { mood: "Happy", moodValue: 5, cssClass: 'happy'},
            { mood: "Good", moodValue: 4, cssClass: 'good' },
            { mood: "Normal", moodValue: 3, cssClass: 'normal' },
            { mood: "Bad", moodValue: 2, cssClass: 'bad' },
            { mood: "Awful", moodValue: 1, cssClass: 'awful' }
        ];
    }
}