"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var portfolio_routing_module_1 = require("./portfolio-routing.module");
var home_component_1 = require("./Home/home.component");
var about_component_1 = require("./about/about.component");
var projet_list_component_1 = require("./projet/projet-list.component");
var perspective_mouse_directive_1 = require("./perspective-mouse.directive");
var multi_perspective_directive_1 = require("./multi-perspective.directive");
var canvas_opacity_component_1 = require("./canvas-opacity/canvas-opacity.component");
var loader_component_1 = require("./loader/loader.component");
var loader_service_1 = require("./loader/loader.service");
var geslider_directive_1 = require("./geslider/geslider.directive");
var geslider_navigation_directive_1 = require("./geslider/geslider-navigation.directive");
var mousewheel_directive_1 = require("./mousewheel.directive");
var geparallax_directive_1 = require("./geparallax/geparallax.directive");
var object_loop_pipe_1 = require("./../loop/object-loop.pipe");
var PortfolioModule = /** @class */ (function () {
    function PortfolioModule() {
    }
    PortfolioModule = __decorate([
        core_1.NgModule({
            declarations: [
                home_component_1.HomeComponent,
                projet_list_component_1.ProjetListComponent,
                about_component_1.AboutComponent,
                perspective_mouse_directive_1.PerspectiveMouseDirective,
                multi_perspective_directive_1.MultiPerspectiveMouseDirective,
                geslider_directive_1.GESliderDirective,
                mousewheel_directive_1.MouseWheelDirective,
                geslider_navigation_directive_1.GESliderNavigationDirective,
                geslider_navigation_directive_1.GESliderDirectionDirective,
                canvas_opacity_component_1.CanvasOpacityComponent,
                loader_component_1.LoaderComponent,
                geparallax_directive_1.GEParallaxDirective,
                object_loop_pipe_1.ObjLoop
            ],
            imports: [
                common_1.CommonModule,
                portfolio_routing_module_1.PortfolioRoutingModule
            ],
            entryComponents: [loader_component_1.LoaderComponent],
            providers: [
                loader_service_1.LoaderService
            ],
            exports: []
        })
    ], PortfolioModule);
    return PortfolioModule;
}());
exports.PortfolioModule = PortfolioModule;
//# sourceMappingURL=portfolio.module.js.map