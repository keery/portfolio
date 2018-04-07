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
var GESliderDirective = /** @class */ (function () {
    function GESliderDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.changeSlide = new core_1.EventEmitter();
        this.currentSlide = null;
        this.prev = null;
        this.currentIndicator = null;
        this.params = { animation: 'fade', axe: 'horizontal' };
    }
    GESliderDirective.prototype.listenerWheelUp = function (event) {
        this.eventOutput = event;
        this.prevSlide();
    };
    GESliderDirective.prototype.listenerWheelDown = function (event) {
        this.eventOutput = event;
        this.nextSlide();
    };
    GESliderDirective.prototype.listenerNavigation = function (event) {
        if (event.detail.target) {
            this.eventOutput = event;
            this.goToSlide(event.detail.target);
        }
    };
    GESliderDirective.prototype.listenerDirection = function (event) {
        if (event.detail.direction == "next") {
            this.nextSlide();
        }
        else if (event.detail.direction == "prev") {
            this.prevSlide();
        }
    };
    GESliderDirective.prototype.nextSlide = function () {
        var nextEl = this.currentSlide.nextElementSibling;
        if (nextEl != null)
            this.goToSlide(nextEl.getAttribute('data-slide-id'));
    };
    GESliderDirective.prototype.prevSlide = function () {
        var prevEl = this.currentSlide.previousElementSibling;
        if (prevEl != null)
            this.goToSlide(prevEl.getAttribute('data-slide-id'));
    };
    GESliderDirective.prototype.ngAfterViewInit = function () {
        Object.assign(this.params, this.GESliderParams);
        this.ul = this.elRef.nativeElement.querySelector('.slides');
        this.slides = this.elRef.nativeElement.querySelectorAll('.slides > li');
        this.indicators = this.elRef.nativeElement.querySelectorAll('.numProjects > li');
        for (var i = 0; i < this.slides.length; i++) {
            var classList = this.slides[i].classList;
            if (classList.length > 0) {
                for (var j = 0; j < classList.length; j++) {
                    if (classList[j] == "active") {
                        this.currentSlide = this.slides[i];
                        this.currentIndicator = this.indicators[i];
                        this.renderer.addClass(this.currentSlide, 'first-plan');
                        break;
                    }
                }
            }
        }
        if (!this.currentSlide) {
            this.currentSlide = this.elRef.nativeElement.querySelector('.slides > li:first-child');
            this.currentIndicator = this.elRef.nativeElement.querySelector('.numProjects > li:first-child');
            this.renderer.addClass(this.currentSlide, 'active');
            this.renderer.addClass(this.currentSlide, 'first-plan');
            if (this.currentIndicator)
                this.renderer.addClass(this.currentIndicator, 'active');
            this.changeSlide.emit({ event: this.eventOutput, currentSlide: 0, nbSlide: this.slides.length });
        }
    };
    GESliderDirective.prototype.goToSlide = function (idSlide) {
        var _this = this;
        // console.log(idSlide);
        var indexSlide = idSlide - 1;
        if (this.slides[indexSlide]) {
            switch (this.params.animation) {
                case 'fade':
                    this.renderer.setStyle(this.currentSlide, 'opacity', "0");
                    this.renderer.removeClass(this.currentSlide, 'active');
                    this.renderer.removeClass(this.currentSlide, 'first-plan');
                    this.renderer.addClass(this.currentSlide, 'leave');
                    this.prev = this.currentSlide;
                    setTimeout(function () {
                        _this.renderer.removeClass(_this.prev, 'leave');
                        _this.renderer.addClass(_this.currentSlide, 'first-plan');
                    }, 1000);
                    this.currentSlide = this.slides[indexSlide];
                    this.renderer.setStyle(this.currentSlide, 'opacity', "1");
                    this.renderer.addClass(this.currentSlide, 'active');
                    this.renderer.removeClass(this.currentSlide, 'leave');
                    break;
                case 'slide':
                    this.prev = this.currentSlide;
                    this.currentSlide = this.slides[indexSlide];
                    var direction = '';
                    if (this.prev.getAttribute('data-slide-id') > this.currentSlide.getAttribute('data-slide-id')) {
                        direction = (this.params.axe == "horizontal") ? 'left' : 'top';
                    }
                    else
                        direction = (this.params.axe == "vertical") ? 'bottom' : 'right';
                    var translation = indexSlide * 100;
                    switch (direction) {
                        case "left":
                            this.renderer.setStyle(this.ul, 'left', translation + '%');
                            break;
                        case "right":
                            this.renderer.setStyle(this.ul, 'left', "-" + translation + '%');
                            break;
                        case "top":
                            this.renderer.setStyle(this.ul, 'top', translation + '%');
                            break;
                        case "bottom":
                            this.renderer.setStyle(this.ul, 'top', "-" + translation + '%');
                            break;
                    }
                    break;
                default:
                    console.log("L'animation " + this.params.animation + " n'éxiste pas");
                    break;
            }
            // this.changeIndicator(indexSlide);    
            this.changeSlide.emit({ event: this.eventOutput, currentSlide: indexSlide, nbSlide: this.slides.length });
        }
        else
            console.log("Attribut data-slide-id manquant");
    };
    GESliderDirective.prototype.changeIndicator = function (idSlide) {
        this.renderer.removeClass(this.currentIndicator, 'active');
        this.renderer.addClass(this.currentIndicator, 'inactive');
        this.currentIndicator = this.indicators[idSlide];
        this.renderer.removeClass(this.currentIndicator, 'inactive');
        this.renderer.addClass(this.currentIndicator, 'active');
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], GESliderDirective.prototype, "changeSlide", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], GESliderDirective.prototype, "GESliderParams", void 0);
    __decorate([
        core_1.HostListener('wheelUp', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GESliderDirective.prototype, "listenerWheelUp", null);
    __decorate([
        core_1.HostListener('wheelDown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GESliderDirective.prototype, "listenerWheelDown", null);
    __decorate([
        core_1.HostListener('document:changeSlide', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GESliderDirective.prototype, "listenerNavigation", null);
    __decorate([
        core_1.HostListener('document:directionSlide', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GESliderDirective.prototype, "listenerDirection", null);
    GESliderDirective = __decorate([
        core_1.Directive({ selector: '[GESlider]' }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2])
    ], GESliderDirective);
    return GESliderDirective;
}());
exports.GESliderDirective = GESliderDirective;
//# sourceMappingURL=geslider.directive.js.map