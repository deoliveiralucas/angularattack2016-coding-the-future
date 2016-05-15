import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {MoodService} from "./mood.service";
import {PersonService} from "../person/person.service";
import {Mood} from "./mood.model";
import {Person} from "../person/person.model";

@Component({
    selector: 'my-app',
    templateUrl: 'app/mood/mood.component.html',
    providers: [MoodService, PersonService]
})
export class MoodComponent implements OnInit {
    public moodsList: Array<Mood> = [];
    public selectedMood: Mood = new Mood();
    public person: Person = new Person();

    constructor(
        private _service: MoodService,
        private _personService: PersonService,
        private _router: Router
    ){}
    
    ngOnInit() {
        this.moodsList = this._service.moodsList();
        this.person = this._personService.getStorage();
    }

    onclickSelectMood(item: Mood) {
        this.selectedMood = item;
    }

    onclickNext() {
        this._service.setStorage(this.selectedMood);
        this.onclickGoToSituations();
    }

    onclickGoToSituations() {
        this._router.navigate(['SituationList']);
    }

}