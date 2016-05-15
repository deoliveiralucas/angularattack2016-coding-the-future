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
        if (itens) {
            itens.push(this.situation);
        } else {
            itens = [this.situation];
        }
        this._service.setStorage(itens);
        this.onclickGoToEntries();
    }

    onclickGoToEntries() {
        this._router.navigate(['SituationList']);
    }
}