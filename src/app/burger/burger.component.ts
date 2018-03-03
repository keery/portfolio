import { Component, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'burger',
	templateUrl: './burger.template.html',
	styleUrls: ['./burger.style.scss']
})
export class BurgerComponent {
	@Output() toggleNav = new EventEmitter();

    @HostListener('click') listenerWheelDown() {
		this.toggleNav.emit(); 
    }  
}