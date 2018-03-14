import { Component } from '@angular/core';
import { overlayLeftAnimation, overlayRightAnimation } from './_animations/index';
import { Title }  from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	animations: [overlayLeftAnimation, overlayRightAnimation]
})
export class AppComponent {

	constructor(private titleService: Title, private activatedRoute: ActivatedRoute, private router: Router) {}

	ngOnInit() {
		this.router.events
	    .filter((event) => event instanceof NavigationEnd)
	    .map(() => this.activatedRoute)
	    .map((route) => {
	      while (route.firstChild) route = route.firstChild;
	      return route;
	    })
	    .filter((route) => route.outlet === 'primary')
	    .mergeMap((route) => route.data)
	    .subscribe((event) => this.titleService.setTitle(event['title']));	  	
	}	
}