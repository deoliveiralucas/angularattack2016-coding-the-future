import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {SituationService} from "../../situation/situation.service";
import {Situation} from "../situation.model";
import {MoodService} from "../../mood/mood.service";

@Component({
    selector: 'my-situation-list',
    templateUrl: 'app/situation/situation-list/situation-list.component.html',
    providers: [SituationService, MoodService]
})
export class SituationListComponent implements OnInit {
    public list: Array<Situation> = [];
    public listSelected: Array<Situation> = [];

    constructor(
        private _service: SituationService,
        private _moodService: MoodService,
        private _router: Router
    ){}

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        var onDone = (function(Response) {
            this.list = Response;
            this._service.setStorage(Response);
        }.bind(this));

        this._service.onGetAll(onDone);
    }

    onclickSelectSituation(item) {
        var x: number = 0,
            lenX: number = this.listSelected.length,
            found: boolean = false;

        for(x, lenX; x < lenX; x++) {
            if (this.listSelected[x].id === item.id) {
                this.listSelected.splice(x, 1);
                found = true;
                break;
            }
        }

        if (!found) {
            this.listSelected.push(item);
        }
    }

    onclickNext() {
        var moodSelected = this._moodService.getStorage();
        var object: any = {
            id: null,
            mood: moodSelected.mood,
            moodValue: moodSelected.moodValue,
            events: this.listSelected,
            time: new Date()
        };

        this._service.setStorageSelected(object);
        this.onclickGoToEntries();
    }

    onclickGoToEntries() {
        this._router.navigate(['Entries']);
    }

    onclickNew() {
        this._router.navigate(['SituationAdd']);
    }
}