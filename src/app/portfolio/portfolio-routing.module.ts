import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent }		 from './Home/home.component';
import { ProjetListComponent }		 from './projet/projet-list.component';
import { AboutComponent }		 from './about/about.component';

// routes
const appRoutes: Routes = [
	{ path: '', component: HomeComponent, data: { page : 'one', title: 'Guillaume Esnault | Portfolio', description: 'Guillaume Esnault : développeur full stack spécialisé React/Angular, passionné par le web plus particulièrement par les technologies javascript, disponible dans les environs de Paris et partout dans le monde' } },
	{ path: 'projets', component: ProjetListComponent, data: { page : 'projets', title: 'Guillaume Esnault | Projets', description: "Guillaume Esnault : développeur full stack, au fil de mon parcours j'ai pu réaliser plusieurs projets, dans un cadre professionnel ou freelance" } },
	{ path: 'a-propos', component: AboutComponent, data: { page : 'a-propos', title: 'Guillaume Esnault | A propos', description: "Guillaume Esnault : Développeur autodidacte depuis plus de 4 ans, actuellement étudiant à l'école ESGI, développeur full stack" } }
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
