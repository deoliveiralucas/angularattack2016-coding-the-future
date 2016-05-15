"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var situation_service_1 = require('../../situation/situation.service');
var situation_model_1 = require('../../situation/situation.model');
var SituationAddComponent = (function () {
    function SituationAddComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.situation = new situation_model_1.Situation();
    }
    SituationAddComponent.prototype.ngOnInit = function () {
    };
    SituationAddComponent.prototype.onSubmit = function () {
        var itens = this._service.getStorage();
        if (itens) {
            itens.push(this.situation);
        }
        else {
            itens = [this.situation];
        }
        this._service.setStorage(itens);
        this.onclickGoToEntries();
    };
    SituationAddComponent.prototype.onclickGoToEntries = function () {
        this._router.navigate(['SituationList']);
    };
    SituationAddComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '../app/situation/situation-add/situation-add.component.html',
            providers: [situation_service_1.SituationService]
        }), 
        __metadata('design:paramtypes', [situation_service_1.SituationService, router_deprecated_1.Router])
    ], SituationAddComponent);
    return SituationAddComponent;
}());
exports.SituationAddComponent = SituationAddComponent;
//# sourceMappingURL=situation-add.component.js.map