import { Directive, ElementRef, Renderer2, HostListener, AfterViewInit, } from '@angular/core';

@Directive({ selector: '[GESlider]' })
export class GESliderDirective implements AfterViewInit {

    private currentSlide = null;
    private currentIndicator = null;
    private slides;
    private indicators;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    @HostListener('wheelUp', ['$event']) listenerWheelUp(event: any) {
      this.mouseWheelUpFunc();
    }

    @HostListener('wheelDown') listenerWheelDown() {
      this.mouseWheelDownFunc();
    }  

    private mouseWheelUpFunc(): void { this.prevSlide(); }

    private mouseWheelDownFunc():void { this.nextSlide(); }   

    nextSlide()
    {
        this.goToSlide(this.currentSlide.nextElementSibling);
    }
    prevSlide()
    {
        this.goToSlide(this.currentSlide.previousElementSibling);
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

    goToSlide(slide:any):void{
        if(slide)
        {
            this.changeIndicator(slide.getAttribute('data-slide-id'));
            this.renderer.setStyle(this.currentSlide, 'opacity', "0");
            this.renderer.removeClass(this.currentSlide, 'active');

            this.renderer.setStyle(slide, 'opacity', "1");     
            this.renderer.addClass(slide, 'active');
            this.currentSlide = slide;       
        }

    }
    cool()
    {
        console.log("cool");
    }
    changeIndicator(id:number):void{
        this.renderer.removeClass(this.currentIndicator, 'active');
        this.renderer.addClass(this.currentIndicator, 'inactive');
        this.currentIndicator = this.indicators[id-1];
        this.renderer.removeClass(this.currentIndicator, 'inactive');
        this.renderer.addClass(this.currentIndicator, 'active');
    }
}