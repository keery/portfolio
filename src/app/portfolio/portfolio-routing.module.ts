import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent }		 from './Home/home.component';
import { ProjetListComponent }		 from './projet/projet-list.component';

// routes
const appRoutes: Routes = [
	{ path: '', component: HomeComponent, data: { title: 'Guillaume Esnault | Portfolio' } },
	{ path: 'projets', component: ProjetListComponent, data: { title: 'Guillaume Esnault | Projets' } }
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
