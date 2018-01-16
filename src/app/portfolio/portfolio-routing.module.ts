import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent }		 from './Home/home.component';

// routes
const appRoutes: Routes = [
	{ path: '', component: HomeComponent }
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
