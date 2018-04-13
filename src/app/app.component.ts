import { Component } from '@angular/core';
import { overlayLeftAnimation, overlayRightAnimation } from './_animations/index';
import { Title }  from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Meta } from '@angular/platform-browser';
import { trigger, animate, transition, style, query, animateChild, group } from '@angular/animations';
import { LoaderService } from './loader/loader.service';


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
	              transformOrigin:'left',
	              opacity: 1
	            }),
              animate('2s linear', style({transform: 'rotateY(0deg) translateX(0%)'})), animateChild()
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
            	// animate('2s', style({ opacity: 0 })), animateChild()
            	// style({transform: 'rotateY(0deg) translateX(0)'}),
     			animate('2s linear', style({transform: 'rotateY(-20deg) translateX(-100%)'})), animateChild()
            ],
            { optional: true }
          )
        ])
      ])
    ])
	  ]	
})
export class AppComponent {

	objLoaderStatus:boolean =false;

	constructor(
		private titleService: Title, 
		private activatedRoute: ActivatedRoute, 
		private router: Router,
		private loaderService: LoaderService,
		private meta: Meta) {
		    this.loaderService.show(); 
        	this.loaderService.hide(); 

			console.log(
				"%cYou think i'm suitable for your projects ?\n"+
				"%c Contact me at "+
				"%ccontact@guillaumeesnault.fr", 
				'font-size: 23px;color: #deec1c;font-family:arial;font-weight:900;',
				'font-size: 16px;color: #deec1c;font-family:arial;font-weight:bold;',
				'font-size: 16px;text-decoration:underline;color: #266d83;font-family:arial;font-weight:bold;'	
			);
		}

	ngOnInit() {

		this.loaderService.loaderStatus.subscribe((val: boolean) => {
            this.objLoaderStatus = val;
        }); 

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