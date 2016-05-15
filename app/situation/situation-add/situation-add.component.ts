import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {SituationService} from '../../situation/situation.service';
import {Situation} from '../../situation/situation.model';

@Component({
    selector: 'my-app',
    templateUrl: '../app/situation/situation-add/situation-add.component.html',
    providers: [SituationService]
})
export class SituationAddComponent implements OnInit {
    public situation: Situation = new Situation();

    constructor(
        private _service: SituationService,
        private _router: Router
    ){}

    ngOnInit() {

    }

    onSubmit() {
        var itens: any = this._service.getStorage();
        var newSituation: any = this.situation;
        if (itens) {
            newSituation.id = itens.length + 1;
            itens.push(newSituation);
        } else {
            newSituation.id = 1;
            itens = [newSituation];
        }
        this._service.setStorage(itens);
        this.onclickGoToEntries();
    }

    onclickGoToEntries() {
        this._router.navigate(['SituationList']);
    }
}