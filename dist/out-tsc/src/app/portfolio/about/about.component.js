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
var geslider_directive_1 = require("../geslider/geslider.directive");
var mock_steps_1 = require("./mock-steps");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromEvent");
var AboutComponent = /** @class */ (function () {
    function AboutComponent(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.currentStep = 0;
        this.currentSlide = 1;
        this.maxStep = 5;
        this.stateChange = true;
        this.delayWheel = 4900;
        this.changeStep = new core_1.EventEmitter();
        this.test = Observable_1.Observable.fromEvent(document, 'changeStep');
        this.setSteps();
    }
    // @HostListener('changeStep', ['$event']) listenerWheelUp(event: any) {
    //    	console.log(event);
    //  //       	setTimeout(()=>{
    // 	// }, 4900);
    //    }
    AboutComponent.prototype.stepChanging = function (id) {
        var _this = this;
        if (this.stateChange) {
            this.stateChange = false;
            this.changeStepTo(id);
            setTimeout(function () {
                _this.stateChange = true;
            }, this.delayWheel);
        }
    };
    AboutComponent.prototype.ngAfterViewInit = function () {
        // this.test
        // // .debounceTime(1000)
        // .subscribe((event) => {
        //     console.log('subscribe');
        // });
        this.cursor = document.querySelector("#cursor");
        this.stepChanging(1);
        // document.dispatchEvent(new CustomEvent( 'mousewheel' )); 		
    };
    AboutComponent.prototype.setSteps = function () {
        this.steps = mock_steps_1.STEPS;
    };
    AboutComponent.prototype.prevStep = function () {
        this.stepChanging(this.currentStep - 1);
        // this.changeStepTo(this.currentStep - 1);
    };
    AboutComponent.prototype.nextStep = function () {
        this.stepChanging(this.currentStep + 1);
        // this.changeStepTo(this.currentStep + 1);
    };
    AboutComponent.prototype.selectStep = function (tou) {
        console.log(this.delayWheel);
        if (tou != this.currentStep)
            this.stepChanging(tou);
    };
    AboutComponent.prototype.changeStepTo = function (idStep) {
        // this.delayWheel = 10000;
        var _this = this;
        if (this.currentStep > 0) {
            console.log(this.currentStep);
            console.log(idStep);
            if (idStep in this.steps) {
                if (this.currentStep in this.steps) {
                    // this.delayWheel = this.steps[this.currentStep].delay;
                    // }
                    // console.log(this.currentStep);
                    // console.log(this.steps[this.currentStep]);
                    // console.log(this.currentStep in this.steps);
                    // console.log(this.delayWheel);
                    if (idStep > this.currentStep) {
                        this.delayWheel = this.steps[this.currentStep].delay;
                    }
                    else {
                        this.delayWheel = this.steps[idStep].delay;
                    }
                }
                console.log(this.delayWheel);
                // console.log(this.delayWheel);
            }
        }
        if (idStep > 0 && idStep <= this.maxStep) {
            //Supprime les classes lorsqu'on n'est plus au premier passage
            if (this.currentStep != 0) {
                this.cursor.classList = "";
                //Permet de trigger un changement sur mon élement pour que la prochaine animation soit prise en compte
                this.cursor.offsetWidth;
            }
            this.renderer.addClass(this.cursor, 'step-' + this.currentStep + '-' + idStep);
            if (idStep in this.steps) {
                this.sliderText.goToSlide(this.steps[idStep].idSlide);
            }
            if (idStep % 3 == 0) {
                var stepFunction_1 = '';
                if (idStep > this.currentStep) {
                    ++this.currentSlide;
                    stepFunction_1 = 'next';
                }
                else {
                    --this.currentSlide;
                    stepFunction_1 = 'prev';
                }
                this.sliderSchema.goToSlide(this.currentSlide);
                setTimeout(function () {
                    console.log();
                    stepFunction_1 == "next" ? _this.nextStep() : _this.prevStep();
                }, 2000);
                // document.dispatchEvent(new CustomEvent( 'changeStep', { detail: { 'target': this.currentSlide, 'stepFunction' : stepFunction }} )); 		
            }
            this.prev = this.currentStep;
            this.currentStep = idStep;
        }
        else {
            this.delayWheel = 1000;
            if (idStep <= 0) {
                this.renderer.removeClass(this.cursor, 'block-top');
                this.cursor.offsetWidth;
                this.renderer.addClass(this.cursor, 'block-top');
            }
            else if (idStep > this.maxStep) {
                this.renderer.removeClass(this.cursor, 'block-bottom');
                this.cursor.offsetWidth;
                this.renderer.addClass(this.cursor, 'block-bottom');
            }
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AboutComponent.prototype, "changeStep", void 0);
    __decorate([
        core_1.ViewChild('sliderText', { read: geslider_directive_1.GESliderDirective }),
        __metadata("design:type", geslider_directive_1.GESliderDirective)
    ], AboutComponent.prototype, "sliderText", void 0);
    __decorate([
        core_1.ViewChild('sliderSchema', { read: geslider_directive_1.GESliderDirective }),
        __metadata("design:type", geslider_directive_1.GESliderDirective)
    ], AboutComponent.prototype, "sliderSchema", void 0);
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