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
var person_service_1 = require('../person/person.service');
var person_model_1 = require('../person/person.model');
var PersonComponent = (function () {
    function PersonComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.person = new person_model_1.Person();
    }
    PersonComponent.prototype.ngOnInit = function () {
    };
    PersonComponent.prototype.onSubmit = function () {
        this._service.setStorage(this.person);
        this.onclickGoToMood();
    };
    PersonComponent.prototype.onclickGoToMood = function () {
        this._router.navigate(['Mood']);
    };
    PersonComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/person/person.component.html',
            providers: [person_service_1.PersonService]
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService, router_deprecated_1.Router])
    ], PersonComponent);
    return PersonComponent;
}());
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=person.component.js.map