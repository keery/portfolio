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
var index_1 = require("./_animations/index");
var loader_service_1 = require("../loader/loader.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(loaderService, elRef, renderer) {
        this.loaderService = loaderService;
        this.elRef = elRef;
        this.renderer = renderer;
        this.objLoaderStatus = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.loaderStatus.subscribe(function (val) {
            if (_this.objLoaderStatus == true && val == false) {
                _this.renderer.addClass(_this.elRef.nativeElement, "enter");
                _this.video.nativeElement.play();
            }
            _this.objLoaderStatus = val;
        });
        this.loaderService.show();
        console.log("%cYou think i'm suitable for your projects ?\n" +
            "%cContact me at " +
            "%ccontact@guillaumeesnault.fr", 'font-size: 23px;color: #deec1c;font-family:arial;font-weight:900;', 'font-size: 16px;color: #deec1c;font-family:arial;font-weight:bold;', 'font-size: 16px;text-decoration:underline;color: #266d83;font-family:arial;font-weight:bold;');
        this.loaderService.hide();
    };
    __decorate([
        core_1.ViewChild('videoSmoke'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "video", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: './home.template.html',
            styleUrls: ['./home.style.scss'],
            animations: [index_1.appendLetterAnimation, index_1.overlayLeftAnimation, index_1.overlayRightAnimation]
        }),
        __metadata("design:paramtypes", [loader_service_1.LoaderService, core_1.ElementRef, core_1.Renderer2])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map