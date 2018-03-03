import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'main-nav',
	templateUrl: './main-menu.component.html',
	styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {

	@HostBinding('attr.class') hostClass = 'close'; 

		constructor(private router: Router) {}


    toggleNav() {
		this.hostClass == "close" ? this.hostClass = "open" : this.hostClass = "close";		
    }
}