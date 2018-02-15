import { Directive, ElementRef, Renderer2, HostListener, AfterViewInit, } from '@angular/core';

@Directive({ selector: '[GESlider]',
host: {'(document:changeSlide)':'listenerNavigation($event)'}
 })
export class GESliderDirective implements AfterViewInit {

    private currentSlide = null;
    private currentIndicator = null;
    private slides;
    private indicators;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    @HostListener('wheelUp') listenerWheelUp(event: any) {
      this.mouseWheelUpFunc();
    }
    @HostListener('wheelDown') listenerWheelDown() {
      this.mouseWheelDownFunc();
    }  
    @HostListener('document:changeSlide', ['$event']) listenerNavigation(event:any) {
        if(event.detail.target) this.goToSlide(event.detail.target);
    }  

    private mouseWheelUpFunc(): void { this.prevSlide(); }

    private mouseWheelDownFunc():void { this.nextSlide(); }   

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
            this.currentSlide = this.elRef.nativeElement.querySelectorAll('.slides > li:first-child');
            this.currentIndicator = this.elRef.nativeElement.querySelectorAll('.numProjects > li:first-child');
            this.renderer.addClass(this.currentSlide, 'active');
            this.renderer.addClass(this.currentIndicator, 'active');
        }
    }

    goToSlide(idSlide:any):void{   
        idSlide = idSlide -1;         
        if (this.slides[idSlide]) {
            this.renderer.setStyle(this.currentSlide, 'opacity', "0");
            this.renderer.removeClass(this.currentSlide, 'active');
            this.currentSlide = this.slides[idSlide];  
            this.renderer.setStyle(this.currentSlide, 'opacity', "1");
            this.renderer.addClass(this.currentSlide, 'active');
            this.changeIndicator(idSlide);                
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