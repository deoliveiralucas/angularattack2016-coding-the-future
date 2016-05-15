import {Injectable} from '@angular/core';
import {Situation} from '../situation/situation.model';
import {Http, Response, HTTP_PROVIDERS} from '@angular/http';

@Injectable()
export class SituationService {
    constructor (
        private _http: Http
    ) {}

    public setStorage(item: Situation) {
        var object: string = JSON.stringify(item);
        localStorage.setItem('situations', object);
    }

    public getStorage() {
        var item: string = localStorage.getItem("situations");
        return JSON.parse(item);
    }

    public setStorageSelected(item: any) {
        var object: string = JSON.stringify(item);
        localStorage.setItem('situations-selected', object);
    }

    public getStorageSelected() {
        var item: string = localStorage.getItem("situations-selected");
        return JSON.parse(item);
    }
    
    public onGetAll(done: any) {
        this._http.get('app/situation/situation-list/situations.json')
            .map(res => res.json())
            .subscribe(
                result => done(result),
                error => this.error(error)
            );
    }

    error(error) {
        console.log("erro");
    }
}