import { Component, OnInit } from '@angular/core';
import { appendLetterAnimation, overlayLeftAnimation, overlayRightAnimation } from './_animations/index';
import { LoaderService } from '../loader.service';


@Component({
	templateUrl: './home.template.html',
	styleUrls: ['./home.style.scss'],
	animations: [appendLetterAnimation, overlayLeftAnimation, overlayRightAnimation]
})
export class HomeComponent implements OnInit
{

	objLoaderStatus:boolean =false;

	letters : string[] = ['G','u','i','l','l','a','u','m','e'];

	constructor(
	        private loaderService: LoaderService) {
	}

	ngOnInit():void{
		this.loaderService.loaderStatus.subscribe((val: boolean) => {
			// console.log(val);
            this.objLoaderStatus = val;
        });

        // this.loaderService.displayLoader(true); 
        this.loaderService.show(); 



		// console.log(
		// 	"%cYou think i'm suitable for your projects ?\n"+
		// 	"%cContact me at "+
		// 	"%cguillaumesnault@gmailcom", 
		// 	'font-size: 23px;color: #deec1c;font-family:arial;font-weight:900;',
		// 	'font-size: 16px;color: #deec1c;font-family:arial;font-weight:bold;',
		// 	'font-size: 16px;text-decoration:underline;color: #266d83;font-family:arial;font-weight:bold;'	
		// );


        // this.loaderService.displayLoader(false); 
        this.loaderService.hide(); 

	}
}