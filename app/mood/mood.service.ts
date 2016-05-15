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
            {mood: "Happy", moodValue: 1},
            {mood: "Good", moodValue: 2},
            {mood: "Normal", moodValue: 3},
            {mood: "Bad", moodValue: 4},
            {mood: "Awful", moodValue: 5}
        ];
    }
}