import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent }		 from './Home/home.component';
import { ProjetListComponent }		 from './projet/projet-list.component';

// routes
const appRoutes: Routes = [
	{ path: '', component: HomeComponent, data: { title: 'Guillaume Esnault | Portfolio', description: 'Guillaume Esnault : développeur full stack spécialisé Angular, passionné pour le web plus particulièrement par les technologies javascript, disponible dans les environs de Paris et partout dans le monde' } },
	{ path: 'projets', component: ProjetListComponent, data: { title: 'Guillaume Esnault | Projets', description: "Guillaume Esnault : développeur full stack, au fil de mon parcours j'ai pu réaliser plusieurs projets, dans un cadre professionnel ou freelance" } }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class PortfolioRoutingModule { }
