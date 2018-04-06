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
var GEParallaxDirective = /** @class */ (function () {
    function GEParallaxDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.x = 0;
        this.y = 0;
        this.degreeX = 30;
        this.degreeY = 30;
        this.container = null;
    }
    GEParallaxDirective.prototype.ngAfterViewInit = function () {
        var degreeX = this.el.nativeElement.getAttribute("degreeX");
        var degreeY = this.el.nativeElement.getAttribute("degreeY");
        if (degreeX)
            this.degreeX = degreeX;
        if (degreeY)
            this.degreeY = degreeY;
        this.container = this.el.nativeElement.querySelector('.geparallax-container');
        if (!this.container)
            console.log('Pas de container pour (geparallax-mouse)');
        // this.renderer.setStyle(this.container.parentElement, 'perspective', "500px");
        // this.renderer.setStyle(this.container.parentElement, 'perspective', "500px");
        // this.renderer.setStyle(this.container.parentElement, 'overflow', "hidden");
        // this.renderer.setStyle(this.container.parentElement, 'transform-style', "preserve-3d");     
    };
    // @HostListener('mouseenter') onMouseEnter() {
    //     this.container.classList.remove('leave');
    // }
    // @HostListener('mouseleave') onMouseLeave() {
    //     this.renderer.addClass(this.container, 'leave');
    // }
    GEParallaxDirective.prototype.onMousemove = function (event) {
        //Position de la souris sur l'element qui possède la directive
        this.x = event.screenX - this.el.nativeElement.offsetLeft;
        this.y = event.screenY - this.el.nativeElement.offsetTop;
        //Largeur et hauteur de l'element qui possède la directive
        var largeur = this.el.nativeElement.offsetWidth, hauteur = this.el.nativeElement.offsetHeight;
        //Pourcentage de la position de la souris, Gauche = -50%, Milieu = 0%, Droite = 50%
        var pourcentX = ((this.x * 100 / largeur) - 50) * 0.01, pourcentY = ((this.y * 100 / hauteur) - 50) * 0.01;
        //Ajout de l'indice de perspective 
        var resultX = pourcentX * this.degreeX, resultY = -(pourcentY * this.degreeY) + 1;
        this.setTransform(resultX, resultY);
    };
    GEParallaxDirective.prototype.setTransform = function (x, y) {
        var style = "translateX(" + (x) + "px) translateY(" + (y) + "px)";
        this.renderer.setStyle(this.container, 'transform', style);
    };
    __decorate([
        core_1.HostListener('mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], GEParallaxDirective.prototype, "onMousemove", null);
    GEParallaxDirective = __decorate([
        core_1.Directive({ selector: '[geparallax]' }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2])
    ], GEParallaxDirective);
    return GEParallaxDirective;
}());
exports.GEParallaxDirective = GEParallaxDirective;
//# sourceMappingURL=geparallax.directive.js.map