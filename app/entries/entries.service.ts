import {Injectable} from '@angular/core';
import {Entries} from '../entries/entries.model';

@Injectable()
export class EntriesService {
    public setStorage(item: Array<Entries>) {
        var object: string = JSON.stringify(item);
        localStorage.setItem('entries', object);
    }

    public getStorage() {
        var item: string = localStorage.getItem("entries");
        return JSON.parse(item);
    }
}