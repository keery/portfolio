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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent(router) {
        var _this = this;
        this.router = router;
        this.hostClass = 'close';
        router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .subscribe(function (val) {
            if (_this.hostClass == "open")
                _this.toggleNav();
        });
    }
    MainMenuComponent.prototype.toggleNav = function () {
        this.hostClass == "close" ? this.hostClass = "open" : this.hostClass = "close";
    };
    __decorate([
        core_1.HostBinding('attr.class'),
        __metadata("design:type", Object)
    ], MainMenuComponent.prototype, "hostClass", void 0);
    MainMenuComponent = __decorate([
        core_1.Component({
            selector: 'main-nav',
            templateUrl: './main-menu.component.html',
            styleUrls: ['./main-menu.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], MainMenuComponent);
    return MainMenuComponent;
}());
exports.MainMenuComponent = MainMenuComponent;
//# sourceMappingURL=main-menu.component.js.map