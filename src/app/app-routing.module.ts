import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

// routes
const appRoutes: Routes = [
	{ path: '', redirectTo: '', pathMatch: 'full'},
	{ path: '**', component: PageNotFoundComponent, data: { title: 'Erreur 404' } }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
