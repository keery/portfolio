import { Component } from '@angular/core';
import { overlayLeftAnimation, overlayRightAnimation } from './_animations/index';
import { Title }  from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Meta } from '@angular/platform-browser';
import { trigger, animate, transition, style, query, animateChild, group } from '@angular/animations';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	animations: [
	    trigger('animRoutes', [
      transition('* <=> *', [
        group([
          query(
            ':enter',
            [
                style({
	              position: 'fixed',
	              top: '0',
	              left: '0',
	              right: '0',
	              bottom: '0',
	              transform: 'rotateY(20deg) translateX(100%)',
	              opacity: 1
	            }),
              animate('10s linear', style({transform: 'rotateY(0deg) translateX(0%)'})), animateChild()
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [
                style({
	              position: 'fixed',
	              top: '0',
	              // left: '0',
	              // right: '0',
	              // bottom: '0',
	              transform: 'rotateY(0deg) translateX(0)',
	              transformOrigin:'right',
	              opacity: 1
	            }),
            	// animate('10s', style({ opacity: 0 })), animateChild()
            	// style({transform: 'rotateY(0deg) translateX(0)'}),
     			animate('10s linear', style({transform: 'rotateY(-20deg) translateX(-100%)'})), animateChild()
            ],
            { optional: true }
          )
        ])
      ])
    ])
	  ]	
})
export class AppComponent {

	constructor(
		private titleService: Title, 
		private activatedRoute: ActivatedRoute, 
		private router: Router,
		private meta: Meta) {}

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
	    .subscribe((event) => {
	    	this.titleService.setTitle(event['title']);
			this.meta.updateTag({ name: 'description', content: event['description'] }); 
	    } );	
		
	}	

	getRouteAnimation(outlet) {
    	return outlet.activatedRouteData['page'] || 'one';
  	}	
}