import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { appendLetterAnimation, overlayLeftAnimation, overlayRightAnimation } from './_animations/index';
import { LoaderService } from '../loader/loader.service';


@Component({
	templateUrl: './home.template.html',
	styleUrls: ['./home.style.scss'],
	animations: [appendLetterAnimation, overlayLeftAnimation, overlayRightAnimation]
})
export class HomeComponent implements OnInit
{
	@ViewChild('videoSmoke') video: ElementRef;
	objLoaderStatus:boolean =false;

	constructor(private loaderService: LoaderService,private elRef: ElementRef, private renderer: Renderer2) {}

	ngOnInit():void{
		this.loaderService.loaderStatus.subscribe((val: boolean) => {
            if(this.objLoaderStatus == true && val == false) {
            	this.renderer.addClass(this.elRef.nativeElement, "enter");
            	this.video.nativeElement.play();
            }
            this.objLoaderStatus = val;
        });
        
        this.loaderService.show(); 

		console.log(
			"%cYou think i'm suitable for your projects ?\n"+
			"%cContact me at "+
			"%ccontact@guillaumeesnault.fr", 
			'font-size: 23px;color: #deec1c;font-family:arial;font-weight:900;',
			'font-size: 16px;color: #deec1c;font-family:arial;font-weight:bold;',
			'font-size: 16px;text-decoration:underline;color: #266d83;font-family:arial;font-weight:bold;'	
		);

        // this.loaderService.hide(); 
	}
}