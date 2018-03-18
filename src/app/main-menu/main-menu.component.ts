import { Component, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'main-nav',
	templateUrl: './main-menu.component.html',
	styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {

	@HostBinding('attr.class') hostClass = 'close'; 

	constructor(private router: Router) {
		router.events
		.filter((event) => event instanceof NavigationEnd)
		.subscribe((val) => {
	        if(this.hostClass == "open") this.toggleNav();
	    });
	}


    toggleNav() {
		this.hostClass == "close" ? this.hostClass = "open" : this.hostClass = "close";		
    }
}