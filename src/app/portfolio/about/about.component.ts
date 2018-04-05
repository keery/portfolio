import { Component, AfterViewInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GESliderDirective } from '../geslider/geslider.directive';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

@Component({
	templateUrl: './about.template.html',
	styleUrls: ['./about.style.scss'],
})
export class AboutComponent implements AfterViewInit
{
	private currentStep: number = 0;
	private currentSlide: number = 1
	private maxStep: number = 5;
	private cursor;

	@ViewChild(GESliderDirective) element:GESliderDirective;

	slideChangeObservable = Observable.fromEvent(document, 'changeSlide');

	constructor(private elRef: ElementRef, private renderer: Renderer2) {}

	ngAfterViewInit() {
		console.log(this.element);
		this.cursor = document.querySelector("#cursor");
       	this.slideChangeObservable.debounceTime(2000)
        .subscribe((event) => {
        	event.detail.stepFunction == "next" ? this.nextStep() : this.prevStep();
        });		
	}

    prevStep(): void {    	
    	this.element.prevSlide();
		this.changeStepTo(this.currentStep - 1);
    }

    nextStep(): void {
    	this.element.nextSlide();
		this.changeStepTo(this.currentStep + 1);
    }

    changeStepTo(idStep : number) {
    	if(idStep > 0 && idStep <= this.maxStep) {
	    	//Supprime les classes lorsqu'on n'est plus au premier passage
	    	if(this.currentStep != 0) {
			    this.cursor.classList = "";
				//Permet de trigger un changement sur mon élement pour que la prochaine animation soit prise en compte
				this.cursor.offsetWidth;
	    	}

	    	this.renderer.addClass(this.cursor, 'step-'+this.currentStep+'-'+idStep);
	        if(idStep%3 == 0) {       
	        	let stepFunction = '';
	        	if(idStep >  this.currentStep) {
	        		++this.currentSlide 
	        		stepFunction = 'next'
	        	} else { 
	        		--this.currentSlide;
	        		stepFunction = 'prev'
	        	}
	        	document.dispatchEvent(new CustomEvent( 'changeSlide', { detail: { 'target': this.currentSlide, 'stepFunction' : stepFunction }} )); 		
	        }
			this.currentStep = idStep;    
    	}
    	else if (idStep <= 0) {
	    	this.renderer.removeClass(this.cursor, 'block-top');
			this.cursor.offsetWidth;
	    	this.renderer.addClass(this.cursor, 'block-top');
    	}
    	else if (idStep > this.maxStep) {
    		this.renderer.removeClass(this.cursor, 'block-bottom');
			this.cursor.offsetWidth;
	    	this.renderer.addClass(this.cursor, 'block-bottom');
    	}

    }
}