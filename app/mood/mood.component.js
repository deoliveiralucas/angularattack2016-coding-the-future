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
var mood_service_1 = require("./mood.service");
var person_service_1 = require("../person/person.service");
var mood_model_1 = require("./mood.model");
var person_model_1 = require("../person/person.model");
var MoodComponent = (function () {
    function MoodComponent(_service, _personService, _router) {
        this._service = _service;
        this._personService = _personService;
        this._router = _router;
        this.moodsList = [];
        this.selectedMood = new mood_model_1.Mood();
        this.person = new person_model_1.Person();
    }
    MoodComponent.prototype.ngOnInit = function () {
        this.moodsList = this._service.moodsList();
        this.person = this._personService.getStorage();
    };
    MoodComponent.prototype.onclickSelectMood = function (item) {
        this.selectedMood = item;
    };
    MoodComponent.prototype.onclickNext = function () {
        this._service.setStorage(this.selectedMood);
        this.onclickGoToSituations();
    };
    MoodComponent.prototype.onclickGoToSituations = function () {
        this._router.navigate(['SituationList']);
    };
    MoodComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/mood/mood.component.html',
            providers: [mood_service_1.MoodService, person_service_1.PersonService]
        }), 
        __metadata('design:paramtypes', [mood_service_1.MoodService, person_service_1.PersonService, router_deprecated_1.Router])
    ], MoodComponent);
    return MoodComponent;
}());
exports.MoodComponent = MoodComponent;
//# sourceMappingURL=mood.component.js.map