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
var Observable_1 = require("rxjs/Observable");
var geslider_directive_1 = require("../geslider/geslider.directive");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/operator/debounceTime");
var mock_steps_1 = require("./mock-steps");
var AboutComponent = /** @class */ (function () {
    function AboutComponent(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.currentStep = 0;
        this.currentSlide = 1;
        this.maxStep = 5;
        this.slideChangeObservable = Observable_1.Observable.fromEvent(document, 'changeSlide');
        this.setSteps();
    }
    AboutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.cursor = document.querySelector("#cursor");
        this.slideChangeObservable.debounceTime(2000)
            .subscribe(function (event) {
            event.detail.stepFunction == "next" ? _this.nextStep() : _this.prevStep();
        });
    };
    AboutComponent.prototype.setSteps = function () {
        this.steps = mock_steps_1.STEPS;
        console.log(this.steps[1]);
    };
    AboutComponent.prototype.prevStep = function () {
        this.changeStepTo(this.currentStep - 1);
    };
    AboutComponent.prototype.nextStep = function () {
        this.changeStepTo(this.currentStep + 1);
    };
    AboutComponent.prototype.changeStepTo = function (idStep) {
        if (idStep > 0 && idStep <= this.maxStep) {
            //Supprime les classes lorsqu'on n'est plus au premier passage
            if (this.currentStep != 0) {
                this.cursor.classList = "";
                //Permet de trigger un changement sur mon élement pour que la prochaine animation soit prise en compte
                this.cursor.offsetWidth;
            }
            this.renderer.addClass(this.cursor, 'step-' + this.currentStep + '-' + idStep);
            this.element.goToSlide(idStep);
            if (idStep % 3 == 0) {
                var stepFunction = '';
                if (idStep > this.currentStep) {
                    ++this.currentSlide;
                    stepFunction = 'next';
                }
                else {
                    --this.currentSlide;
                    stepFunction = 'prev';
                }
                document.dispatchEvent(new CustomEvent('changeSlide', { detail: { 'target': this.currentSlide, 'stepFunction': stepFunction } }));
            }
            this.currentStep = idStep;
        }
        else if (idStep <= 0) {
            this.renderer.removeClass(this.cursor, 'block-top');
            this.cursor.offsetWidth;
            this.renderer.addClass(this.cursor, 'block-top');
        }
        else if (idStep > this.maxStep) {
            this.renderer.removeClass(this.cursor, 'block-bottom');
            this.cursor.offsetWidth;
            this.renderer.addClass(this.cursor, 'block-bottom');
        }
    };
    __decorate([
        core_1.ViewChild(geslider_directive_1.GESliderDirective),
        __metadata("design:type", geslider_directive_1.GESliderDirective)
    ], AboutComponent.prototype, "element", void 0);
    AboutComponent = __decorate([
        core_1.Component({
            templateUrl: './about.template.html',
            styleUrls: ['./about.style.scss'],
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map