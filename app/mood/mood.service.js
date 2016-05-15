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
var MoodService = (function () {
    function MoodService() {
    }
    MoodService.prototype.setStorage = function (item) {
        var object = JSON.stringify(item);
        localStorage.setItem('selected-mood', object);
    };
    MoodService.prototype.getStorage = function () {
        var item = localStorage.getItem("selected-mood");
        return JSON.parse(item);
    };
    MoodService.prototype.moodsList = function () {
        return [
            { mood: "Happy", moodValue: 1 },
            { mood: "Good", moodValue: 2 },
            { mood: "Normal", moodValue: 3 },
            { mood: "Bad", moodValue: 4 },
            { mood: "Awful", moodValue: 5 }
        ];
    };
    MoodService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MoodService);
    return MoodService;
}());
exports.MoodService = MoodService;
//# sourceMappingURL=mood.service.js.map