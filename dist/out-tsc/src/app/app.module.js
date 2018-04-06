"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var portfolio_module_1 = require("./portfolio/portfolio.module");
var page_not_found_component_1 = require("./page-not-found.component");
var app_routing_module_1 = require("./app-routing.module");
var animations_1 = require("@angular/platform-browser/animations");
var main_menu_component_1 = require("./main-menu/main-menu.component");
var burger_component_1 = require("./burger/burger.component");
PokemonTypeColorPipe;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                page_not_found_component_1.PageNotFoundComponent,
                main_menu_component_1.MainMenuComponent,
                burger_component_1.BurgerComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                portfolio_module_1.PortfolioModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
            ],
            providers: [
                platform_browser_1.Title
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map