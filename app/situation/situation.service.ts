import {Injectable} from '@angular/core';
import {Situation} from '../situation/situation.model';
import {SITUATION} from "./situation-mock";

@Injectable()
export class SituationService {
    public setStorage(item: Situation) {
        var object: string = JSON.stringify(item);
        localStorage.setItem('situations', object);
    }

    public getStorage() {
        var item: string = localStorage.getItem("situations");
        return JSON.parse(item);
    }
    
    public getMock() {
        return SITUATION;
    }
    
}