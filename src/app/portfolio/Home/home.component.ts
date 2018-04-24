import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { appendLetterAnimation, overlayLeftAnimation, overlayRightAnimation } from './_animations/index';
import { LoaderService } from '../../loader/loader.service';


@Component({
	templateUrl: './home.template.html',
	styleUrls: ['./home.style.scss'],
	animations: [appendLetterAnimation, overlayLeftAnimation, overlayRightAnimation]
})
export class HomeComponent implements OnInit
{
	@ViewChild('videoSmoke') video: ElementRef;
	objLoaderStatus:boolean =false;
	isMobile = false;

	constructor(private loaderService: LoaderService,private elRef: ElementRef, private renderer: Renderer2) {}

	ngOnInit():void{
		if(window.innerWidth <= 500) this.isMobile = true;
		this.loaderService.loaderStatus.subscribe((val: boolean) => {
			//Si le loader etait affiché et qu'on lui dit de le cacher ou si il etait cache et qu'on ne veut pas l'afficher
            if((this.objLoaderStatus && !val) || (!this.objLoaderStatus && !val)) {
            	this.renderer.addClass(this.elRef.nativeElement, "enter");
            	if(!this.isMobile) this.video.nativeElement.play();
            }
            this.objLoaderStatus = val;
        }); 
	}
}