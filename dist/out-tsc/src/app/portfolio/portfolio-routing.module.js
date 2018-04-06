"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./Home/home.component");
var projet_list_component_1 = require("./projet/projet-list.component");
var about_component_1 = require("./about/about.component");
// routes
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent, data: { title: 'Guillaume Esnault | Portfolio', description: 'Guillaume Esnault : développeur full stack spécialisé Angular, passionné pour le web plus particulièrement par les technologies javascript, disponible dans les environs de Paris et partout dans le monde' } },
    { path: 'projets', component: projet_list_component_1.ProjetListComponent, data: { title: 'Guillaume Esnault | Projets', description: "Guillaume Esnault : développeur full stack, au fil de mon parcours j'ai pu réaliser plusieurs projets, dans un cadre professionnel ou freelance" } },
    { path: 'a-propos', component: about_component_1.AboutComponent, data: { title: 'Guillaume Esnault | A propos', description: "Guillaume Esnault : Développeur autodidacte depuis plus de 4 ans, actuellement étudiant à l'école ESGI, développeur full stack" } }
];
var PortfolioRoutingModule = /** @class */ (function () {
    function PortfolioRoutingModule() {
    }
    PortfolioRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], PortfolioRoutingModule);
    return PortfolioRoutingModule;
}());
exports.PortfolioRoutingModule = PortfolioRoutingModule;
//# sourceMappingURL=portfolio-routing.module.js.map