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
var ProjetListComponent = /** @class */ (function () {
    function ProjetListComponent(renderer) {
        this.renderer = renderer;
    }
    ProjetListComponent.prototype.changePercent = function ($event) {
        this.$event = $event;
        if (Number.isInteger($event.currentSlide) && $event.nbSlide) {
            var progress = (($event.currentSlide + 1) * 100 / $event.nbSlide) * 0.01;
            // console.log($event);
            this.renderer.setStyle(this.percentBar.nativeElement, 'stroke-dasharray', (520 * progress) + " 1570");
        }
    };
    ProjetListComponent.prototype.ngAfterViewInit = function () {
        // this.changePercent(this.$event);
    };
    __decorate([
        core_1.ViewChild('circleBar'),
        __metadata("design:type", Object)
    ], ProjetListComponent.prototype, "percentBar", void 0);
    ProjetListComponent = __decorate([
        core_1.Component({
            templateUrl: './projet-list.template.html',
            styleUrls: ['./projet-list.style.scss']
        }),
        __metadata("design:paramtypes", [core_1.Renderer2])
    ], ProjetListComponent);
    return ProjetListComponent;
}());
exports.ProjetListComponent = ProjetListComponent;
//# sourceMappingURL=projet-list.component.js.map