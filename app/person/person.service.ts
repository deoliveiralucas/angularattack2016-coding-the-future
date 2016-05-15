import {Injectable} from '@angular/core';
import {Person} from '../person/person.model';

@Injectable()
export class PersonService {
    public setStorage(item: Person) {
        var object: string = JSON.stringify(item);
        localStorage.setItem('person', object);
    }

    public getStorage() {
        var item: string = localStorage.getItem("person");
        return JSON.parse(item);
    }
}