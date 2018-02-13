import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent }		 from './Home/home.component';
import { ProjetListComponent }		 from './projet/projet-list.component';

// routes
const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'projets', component: ProjetListComponent }
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
