import { Directive, ElementRef, Renderer2, HostListener, AfterViewInit,EventEmitter, Output } from '@angular/core';

@Directive({ selector: '[GESlider]' })
export class GESliderDirective implements AfterViewInit {

    @Output() changeSlide = new EventEmitter();

    private currentSlide = null;
    private prev = null;
    private currentIndicator = null;
    private slides;
    private indicators;
    private eventOutput;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    @HostListener('wheelUp', ['$event']) listenerWheelUp(event: any) {
        this.eventOutput = event;
        this.prevSlide();
    }
    @HostListener('wheelDown', ['$event']) listenerWheelDown(event: any) {
        this.eventOutput = event;
        this.nextSlide();
    }  
    @HostListener('document:changeSlide', ['$event']) listenerNavigation(event:any) {
        if(event.detail.target) {
            this.eventOutput = event;
            this.goToSlide(event.detail.target);
        }
    } 
    @HostListener('document:directionSlide', ['$event']) listenerDirection(event:any) {
        if(event.detail.direction == "next") {
            this.nextSlide();
        }
        else if(event.detail.direction == "prev") {
           this.prevSlide();      
        }
    }

    nextSlide()
    {
        const nextEl = this.currentSlide.nextElementSibling;
        if(nextEl != null) this.goToSlide(nextEl.getAttribute('data-slide-id'));
    }
    prevSlide()
    {
        const prevEl = this.currentSlide.previousElementSibling;
        if(prevEl != null) this.goToSlide(prevEl.getAttribute('data-slide-id'));
    }
    ngAfterViewInit()
    {  
        this.slides = this.elRef.nativeElement.querySelectorAll('.slides > li');
        this.indicators = this.elRef.nativeElement.querySelectorAll('.numProjects > li');

        for (let i = 0; i < this.slides.length; i++) 
        {
            let classList = this.slides[i].classList;

            if(classList.length > 0)
            {
                for (let j = 0; j < classList.length; j++) {        
                    if(classList[j] == "active")
                    {
                        this.currentSlide = this.slides[i];
                        this.currentIndicator = this.indicators[i];
                    }
                }
            }
        }



        if(!this.currentSlide) {
            this.currentSlide = this.elRef.nativeElement.querySelector('.slides > li:first-child');
            this.currentIndicator = this.elRef.nativeElement.querySelector('.numProjects > li:first-child');
            this.renderer.addClass(this.currentSlide, 'active');
            this.renderer.addClass(this.currentSlide, 'first-plan');
            this.renderer.addClass(this.currentIndicator, 'active');
            this.changeSlide.emit({event: this.eventOutput, currentSlide: 0, nbSlide:this.slides.length});                        
        }
    }

    goToSlide(idSlide:any):void{   
        idSlide = idSlide -1;         
        if (this.slides[idSlide]) {
            this.renderer.setStyle(this.currentSlide, 'opacity', "0");
            this.renderer.removeClass(this.currentSlide, 'active');
            this.renderer.removeClass(this.currentSlide, 'first-plan');
            this.renderer.addClass(this.currentSlide, 'leave');         
            this.prev = this.currentSlide;
            setTimeout(()=>{
                this.renderer.removeClass(this.prev, 'leave');
                this.renderer.addClass(this.currentSlide, 'first-plan');
            }, 1000);
            this.currentSlide = this.slides[idSlide];  
            this.renderer.setStyle(this.currentSlide, 'opacity', "1");
            this.renderer.addClass(this.currentSlide, 'active');
            this.renderer.removeClass(this.currentSlide, 'leave');
            this.changeIndicator(idSlide);    
            this.changeSlide.emit({event: this.eventOutput, currentSlide: idSlide, nbSlide:this.slides.length});            
        }
    }

    changeIndicator(idSlide:number):void{
        this.renderer.removeClass(this.currentIndicator, 'active');
        this.renderer.addClass(this.currentIndicator, 'inactive');
        this.currentIndicator = this.indicators[idSlide];
        this.renderer.removeClass(this.currentIndicator, 'inactive');
        this.renderer.addClass(this.currentIndicator, 'active');
    }
}