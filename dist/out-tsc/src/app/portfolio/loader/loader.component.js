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
var loader_service_1 = require("./loader.service");
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(renderer, loaderService) {
        this.renderer = renderer;
        this.loaderService = loaderService;
        this.limit = 40;
        this.start = 1;
        this.max = 90;
        this.duration = 0;
        this.percentCallage = [];
        this.loading = false;
        this.i = 0;
        this.nbCallage = this.getRandomInt(4, 6);
        for (var i = 0; i < this.nbCallage; i++) {
            var reste = (this.nbCallage - (i + 1));
            var val = this.getRandomInt(this.start, this.limit);
            this.start = val + 1;
            this.limit += (this.max - this.start) / this.nbCallage;
            this.duration += this.getRandomInt(100, 500);
            this.percentCallage.push({ "percent": val, "duration": this.duration });
        }
        this.percentCallage.push({ "percent": 90, "duration": this.duration });
        this.myLoop(this.i, this.percentCallage);
    }
    LoaderComponent.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    LoaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.loaderService.loaderTest.subscribe(function (val) {
            _this.loading = val;
            if (val) {
                var st = _this.value.nativeElement.innerText;
                _this.animateValue("value", st, 100, 800, true);
                _this.renderer.setElementStyle(_this.percent.nativeElement, 'width', "100%");
                _this.renderer.setElementStyle(_this.percent.nativeElement, 'transition-duration', "800ms");
            }
        });
    };
    LoaderComponent.prototype.animateValue = function (id, start, end, duration, priority) {
        var _this = this;
        if (priority === void 0) { priority = false; }
        var range = end - start;
        var current = start;
        var increment = end > start ? 1 : -1;
        var stepTime = Math.abs(Math.floor(duration / range));
        var obj = document.getElementById(id);
        var timer = setInterval(function () {
            if (!_this.loading || priority) {
                current = parseInt(current) + increment;
                obj.innerHTML = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }
        }, stepTime);
    };
    LoaderComponent.prototype.myLoop = function (i, percentCallage) {
        var _this = this;
        setTimeout(function () {
            if (_this.loading == false) {
                var start = 0;
                var end = percentCallage[i].percent;
                if (i != 0) {
                    start = percentCallage[(i - 1)].percent;
                    end = percentCallage[i].percent;
                }
                _this.animateValue("value", start, end, percentCallage[i].duration);
                _this.renderer.setElementStyle(_this.percent.nativeElement, 'width', percentCallage[i].percent + '%');
                _this.renderer.setElementStyle(_this.percent.nativeElement, 'transition-duration', percentCallage[i].duration + "ms");
                i++;
                if (i < percentCallage.length) {
                    _this.myLoop(i, percentCallage);
                }
            }
        }, i == 0 ? 0 : percentCallage[i].duration);
    };
    __decorate([
        core_1.ViewChild('percent'),
        __metadata("design:type", core_1.ElementRef)
    ], LoaderComponent.prototype, "percent", void 0);
    __decorate([
        core_1.ViewChild('value'),
        __metadata("design:type", core_1.ElementRef)
    ], LoaderComponent.prototype, "value", void 0);
    LoaderComponent = __decorate([
        core_1.Component({
            selector: 'loader',
            template: "\n\t<div class=\"loader-container\">\n\t    <div class=\"loading\">\n\t     \t<div class=\"logo-loader\">\n\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 11.02 14.88\">\n\t\t\t\t\t<line class=\"u-line\" y1=\"13.93\" x2=\"11.02\" y2=\"13.93\"/>\n\t\t\t\t\t<polyline class=\"g-line\" points=\"11 0.95 0.96 0.95 0.96 10.68 10.06 10.68 10.06 4.17 4.21 4.18 4.21 7.44 7.78 7.44\"/>\n\t\t\t\t</svg>\t\t\t\n\t     \t</div>\t    \n\t        <div class=\"bar\">\n\t            <div class=\"percent\" #percent>\n\t            </div>\n\t            <div class=\"number\"><span id=\"value\" #value>0</span>%</div>\n\t        </div>\n\t    </div>\n\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [core_1.Renderer,
            loader_service_1.LoaderService])
    ], LoaderComponent);
    return LoaderComponent;
}());
exports.LoaderComponent = LoaderComponent;
//# sourceMappingURL=loader.component.js.map