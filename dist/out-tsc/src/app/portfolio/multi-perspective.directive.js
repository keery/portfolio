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
var MultiPerspectiveMouseDirective = /** @class */ (function () {
    function MultiPerspectiveMouseDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.x = 0;
        this.y = 0;
        this.perspectiveX = 3;
        this.perspectiveY = 5;
        this.containers = null;
        this.current = null;
    }
    MultiPerspectiveMouseDirective.prototype.ngAfterViewInit = function () {
        var persX = this.el.nativeElement.getAttribute("perspectiveX");
        var persY = this.el.nativeElement.getAttribute("perspectiveY");
        if (persX)
            this.perspectiveX = persX;
        if (persY)
            this.perspectiveY = persY;
        this.containers = this.el.nativeElement.querySelectorAll('.perspective-container');
        if (!this.containers)
            console.log('Pas de containers pour (multi-perspective-mouse)');
        for (var i = 0; i < this.containers.length; i++) {
            if (this.containers[i].parentElement.classList.contains("active"))
                this.current = this.containers[i];
            this.renderer.addClass(this.containers[i].parentElement, 'perspective-area');
        }
    };
    MultiPerspectiveMouseDirective.prototype.onMouseEnter = function () {
        this.renderer.removeClass(this.current, 'leave');
    };
    MultiPerspectiveMouseDirective.prototype.onMouseLeave = function () {
        this.renderer.addClass(this.current, 'leave');
    };
    MultiPerspectiveMouseDirective.prototype.onChangeSlide = function ($event) {
        if ($event.currentSlide >= 0 && $event.currentSlide < this.containers.length)
            this.current = this.containers[$event.currentSlide];
    };
    MultiPerspectiveMouseDirective.prototype.onMousemove = function (event) {
        //Position de la souris sur l'element qui possède la directive
        this.x = event.screenX - this.el.nativeElement.offsetLeft;
        this.y = event.screenY - this.el.nativeElement.offsetTop;
        //Largeur et hauteur de l'element qui possède la directive
        var largeur = this.el.nativeElement.offsetWidth, hauteur = this.el.nativeElement.offsetHeight;
        //Pourcentage de la position de la souris, Gauche = -50%, Milieu = 0%, Droite = 50%
        var pourcentX = ((this.x * 100 / largeur) - 50) * 0.01, pourcentY = ((this.y * 100 / hauteur) - 50) * 0.01;
        //Ajout de l'indice de perspective 
        var resultX = pourcentX * this.perspectiveX, resultY = -(pourcentY * this.perspectiveY) + 1;
        this.setTransform(resultX, resultY);
    };
    MultiPerspectiveMouseDirective.prototype.setTransform = function (x, y) {
        var style = "rotateY(" + (x) + "deg) rotateX(" + (y) + "deg)";
        this.renderer.setStyle(this.current, 'transform', style);
    };
    __decorate([
        core_1.HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MultiPerspectiveMouseDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MultiPerspectiveMouseDirective.prototype, "onMouseLeave", null);
    __decorate([
        core_1.HostListener('changeSlide', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MultiPerspectiveMouseDirective.prototype, "onChangeSlide", null);
    __decorate([
        core_1.HostListener('mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], MultiPerspectiveMouseDirective.prototype, "onMousemove", null);
    MultiPerspectiveMouseDirective = __decorate([
        core_1.Directive({ selector: '[multi-perspective]' }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2])
    ], MultiPerspectiveMouseDirective);
    return MultiPerspectiveMouseDirective;
}());
exports.MultiPerspectiveMouseDirective = MultiPerspectiveMouseDirective;
//# sourceMappingURL=multi-perspective.directive.js.map