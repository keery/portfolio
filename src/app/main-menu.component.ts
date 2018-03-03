import { Component, HostBinding } from '@angular/core';

@Component({
	selector: 'main-nav',
	templateUrl: './main-menu.component.html',
	styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {

	@HostBinding('attr.class') hostClass = 'close'; 


    toggleNav() {
		this.hostClass == "close" ? this.hostClass = "open" : this.hostClass = "close";		
    }
}