import { Component, AfterViewInit, Renderer2, ElementRef, ViewChild, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { GESliderDirective } from '../geslider/geslider.directive';
import { Step } from './steps.interface';
import { STEPS } from './mock-steps';
import { ObjLoop } from '../../loop/object-loop.pipe';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent';


@Component({
	templateUrl: './about.template.html',
	styleUrls: ['./about.style.scss'],
})
export class AboutComponent implements AfterViewInit
{
	currentStep: number = 0;
	currentSlide: number = 1
	maxStep: number = 5;
	cursor;
	prev: number;
	steps: { [key: number]: Step }; 
	stateChange: boolean = true;
	delayWheel = 4900;
	isMobile = false;
	tou = false;

	constructor(private elRef: ElementRef, private renderer: Renderer2) {
		this.setSteps();
	}

    @Output() changeStep = new EventEmitter();
	@ViewChild('sliderText', {read: GESliderDirective}) sliderText:GESliderDirective;
	@ViewChild('sliderSchema', {read: GESliderDirective}) sliderSchema:GESliderDirective;
    // test = Observable.fromEvent(document, 'changeStep');


    stepChanging(id:number) {
    	if(this.stateChange) {		
    		this.stateChange = false;
			this.changeStepTo(id);

	    	setTimeout(()=>{
				this.stateChange = true;
			}, this.delayWheel);
    	}

    	if(this.tou)  {
			this.tou = false;
    		this.changeStepTo(id);
    	}
    }

	ngAfterViewInit() {
        // this.test
        // // .debounceTime(1000)
        // .subscribe((event) => {
        //     console.log('subscribe');
        // });
        if(window.innerWidth <= 700) {
        	this.isMobile = true;
        	this.delayWheel = 0;
        	this.maxStep--;
        }

		this.cursor = document.querySelector("#cursor");
        this.stepChanging(1);
	    // document.dispatchEvent(new CustomEvent( 'mousewheel' )); 		
	}

	setSteps() {
		this.steps = STEPS;
	}

    prevStep(): void {    	
    	this.stepChanging(this.currentStep-1)
    }

    nextStep(): void {
    	this.stepChanging(this.currentStep+1)
    }

    selectStep(id : number) {
    	if(id != this.currentStep) this.stepChanging(id);
    }

    changeStepTo(idStep : number) {
    	if(!this.isMobile) {
			if(idStep >  this.currentStep && this.currentStep in this.steps) {
				this.delayWheel = this.steps[this.currentStep].delay;
			}
			else if (idStep <  this.currentStep && idStep in this.steps) {
				this.delayWheel = this.steps[idStep].delay;
			}
    	}
    	else {
    		this.delayWheel = 1200;
    	}
    	if(idStep > 0 && idStep <= this.maxStep) {

	    	//Supprime les classes lorsqu'on n'est plus au premier passage
	    	if(this.currentStep != 0) {
	    		this.renderer.setAttribute(this.cursor, 'class', null)
			    // this.cursor.classList = "";
				//Permet de trigger un changement sur mon élement pour que la prochaine animation soit prise en compte
				this.cursor.offsetWidth;
	    	}

	    	this.renderer.addClass(this.cursor, 'step-'+this.currentStep+'-'+idStep);
	    	
	    	if(idStep in this.steps) {
	     		this.sliderText.goToSlide(this.steps[idStep].idSlide);
	    	}

	        if(idStep%3 == 0) {
	        	if(!this.isMobile) this.delayWheel = 5000; 
	        	let stepFunction = '';
	        	if(idStep >  this.currentStep) {
	        		++this.currentSlide 
	        		stepFunction = 'next'
	        	} else { 
	        		--this.currentSlide;
	        		stepFunction = 'prev'
	        	}
	        	this.sliderSchema.goToSlide(this.currentSlide);		

	        	setTimeout(()=>{
	        		this.tou = true;
					stepFunction == "next" ? this.nextStep() : this.prevStep();
	        	}, 2000);

	        	// document.dispatchEvent(new CustomEvent( 'changeStep', { detail: { 'target': this.currentSlide, 'stepFunction' : stepFunction }} )); 		
	        }
	        this.prev = this.currentStep;
			this.currentStep = idStep;    
    	}
    	else {
    		this.delayWheel = 1000;
	    	if (idStep <= 0) {
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
}