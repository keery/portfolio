import { Component } from '@angular/core';
import { overlayLeftAnimation, overlayRightAnimation } from './_animations/index';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	animations: [overlayLeftAnimation, overlayRightAnimation]
})
export class AppComponent {}