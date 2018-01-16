import { Component, OnInit } from '@angular/core';
import { appendLetterAnimation, overlayLeftAnimation, overlayRightAnimation } from './_animations/index';


@Component({
	templateUrl: './home.template.html',
	styleUrls: ['./home.style.scss'],
	animations: [appendLetterAnimation, overlayLeftAnimation, overlayRightAnimation]
})
export class HomeComponent implements OnInit
{

	letters : string[] = ['G','u','i','l','l','a','u','m','e'];
	ngOnInit():void{
		console.log(
			"%cYou think i'm suitable for your projects ?\n"+
			"%cContact me at "+
			"%cguillaumesnault@gmailcom", 
			'font-size: 23px;color: #deec1c;font-family:arial;font-weight:900;',
			'font-size: 16px;color: #deec1c;font-family:arial;font-weight:bold;',
			'font-size: 16px;text-decoration:underline;color: #266d83;font-family:arial;font-weight:bold;'
			);
	}
}