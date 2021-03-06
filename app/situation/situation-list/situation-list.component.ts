import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {SituationService} from "../../situation/situation.service";
import {Situation} from "../situation.model";
import {MoodService} from "../../mood/mood.service";
import {EntriesService} from "../../entries/entries.service";
import {Entries} from "../../entries/entries.model";

@Component({
    selector: 'my-situation-list',
    templateUrl: 'app/situation/situation-list/situation-list.component.html',
    providers: [SituationService, MoodService, EntriesService]
})
export class SituationListComponent implements OnInit {
    public list: Array<Situation> = [];
    public listSelected: Array<Situation> = [];

    constructor(
        private _service: SituationService,
        private _moodService: MoodService,
        private _entriesService: EntriesService,
        private _router: Router
    ){}

    ngOnInit() {
        var local: Array<Situation> = this._service.getStorage();
        if (local) {
            this.list = local;
            this._service.setStorage(local);
        } else {
            this.getHeroes();
        }
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
            document.getElementById("item_"+item.id).classList.add("selected");
            this.listSelected.push(item);
        } else {
            document.getElementById("item_"+item.id).classList.remove("selected");
        }
    }

    onclickNext() {
        var moodSelected = this._moodService.getStorage();
        var entriesList: any = this._entriesService.getStorage();
        var id: number = 1;

        if (entriesList) {
            id = entriesList.length + 1;
        } else {
            entriesList = [];
        }

        var object: any = {
            id: id,
            mood: moodSelected.mood,
            moodValue: moodSelected.moodValue,
            events: this.listSelected,
            time: new Date()
        };

        entriesList.push(object);
        this._entriesService.setStorage(entriesList);
        this.onclickGoToEntries();
    }

    onclickGoToEntries() {
        this._router.navigate(['Entries']);
    }

    onclickNew() {
        this._router.navigate(['SituationAdd']);
    }
}