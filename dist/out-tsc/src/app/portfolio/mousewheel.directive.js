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
var MouseWheelDirective = /** @class */ (function () {
    function MouseWheelDirective(el) {
        this.el = el;
        this.emiter = true;
        this.wheelUp = new core_1.EventEmitter();
        this.wheelDown = new core_1.EventEmitter();
    }
    MouseWheelDirective.prototype.listenerWheelUp = function (event) {
        this.mouseWheel(event);
    };
    MouseWheelDirective.prototype.ngAfterViewInit = function () {
        if (this.delay == '')
            this.delay = 0;
        // // this.test.debounceTime(1000)
        //  .subscribe((event) => {
        //      this.mouseWheel(event);
        //  });
    };
    MouseWheelDirective.prototype.mouseWheel = function (event) {
        var _this = this;
        if (this.emiter) {
            this.emiter = false;
            var thisEvent = window.event || event;
            var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
            if (delta > 0) {
                this.wheelUp.emit(thisEvent);
            }
            else if (delta < 0) {
                this.wheelDown.emit(thisEvent);
            }
            setTimeout(function () {
                _this.emiter = true;
            }, this.delay);
        }
    };
    __decorate([
        core_1.Input('mousewheel'),
        __metadata("design:type", Object)
    ], MouseWheelDirective.prototype, "delay", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MouseWheelDirective.prototype, "wheelUp", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MouseWheelDirective.prototype, "wheelDown", void 0);
    __decorate([
        core_1.HostListener('mousewheel', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MouseWheelDirective.prototype, "listenerWheelUp", null);
    MouseWheelDirective = __decorate([
        core_1.Directive({ selector: '[mousewheel]' }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], MouseWheelDirective);
    return MouseWheelDirective;
}());
exports.MouseWheelDirective = MouseWheelDirective;
//# sourceMappingURL=mousewheel.directive.js.map