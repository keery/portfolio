import { Directive, ElementRef, Renderer2, HostListener, AfterViewInit,EventEmitter, Output, Input } from '@angular/core';

@Directive({ selector: '[GESlider]' })
export class GESliderDirective implements AfterViewInit {

    @Output() changeSlide = new EventEmitter();
    @Input() GESliderParams : any[];

    private currentSlide = null;
    private prev = null;
    private currentIndicator = null;
    private ul;
    private slides;
    private indicators;
    private eventOutput;
    private params = {animation: 'fade', axe: 'horizontal'}

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
        Object.assign(this.params, this.GESliderParams);
        this.ul = this.elRef.nativeElement.querySelector('.slides');
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
                        this.renderer.addClass(this.currentSlide, 'first-plan');
                        break;
                    }
                }
            }
        }



        if(!this.currentSlide) {
            this.currentSlide = this.elRef.nativeElement.querySelector('.slides > li:first-child');
            this.currentIndicator = this.elRef.nativeElement.querySelector('.numProjects > li:first-child');
            this.renderer.addClass(this.currentSlide, 'active');
            this.renderer.addClass(this.currentSlide, 'first-plan');
            if(this.currentIndicator) this.renderer.addClass(this.currentIndicator, 'active');
            this.changeSlide.emit({event: this.eventOutput, currentSlide: 0, nbSlide:this.slides.length});                        
        }
    }

    goToSlide(idSlide:any):void{   
        const indexSlide = idSlide -1;         
        if (this.slides[indexSlide]) {
            switch(this.params.animation) {
                case 'fade':
                    this.renderer.setStyle(this.currentSlide, 'opacity', "0");
                    this.renderer.removeClass(this.currentSlide, 'active');
                    this.renderer.removeClass(this.currentSlide, 'first-plan');
                    this.renderer.addClass(this.currentSlide, 'leave');         
                    this.prev = this.currentSlide;
                    setTimeout(()=>{
                        this.renderer.removeClass(this.prev, 'leave');
                        this.renderer.addClass(this.currentSlide, 'first-plan');
                    }, 1000);
                    this.currentSlide = this.slides[indexSlide];  
                    this.renderer.setStyle(this.currentSlide, 'opacity', "1");
                    this.renderer.addClass(this.currentSlide, 'active');
                    this.renderer.removeClass(this.currentSlide, 'leave');            
                break;
                case 'slide':
                    this.prev = this.currentSlide;
                    this.currentSlide = this.slides[indexSlide];  
                    let direction = '';
                    if (this.prev.getAttribute('data-slide-id') > this.currentSlide.getAttribute('data-slide-id')) {
                        direction = (this.params.axe == "horizontal") ? 'left' : 'top';
                    }
                    else direction = (this.params.axe == "vertical") ? 'bottom' : 'right';
                    const translation = indexSlide*100;
                    console.log(translation);
                    switch (direction) {
                        case "left":
                                this.renderer.setStyle(this.ul, 'transform', "translateX("+translation+"%)");
                            break;
                         case "right":
                                this.renderer.setStyle(this.ul, 'transform', "translateX(-"+translation+"%)");
                            break;                           
                         case "top":
                                this.renderer.setStyle(this.ul, 'transform', "translateY("+translation+"%)");
                            break;
                        case "bottom":
                                this.renderer.setStyle(this.ul, 'transform', "translateY(-"+translation+"%)");
                            break;                                                   
                    }
                break;
                default:
                    console.log("L'animation "+this.params.animation+" n'éxiste pas");
                break;
            }

            // this.changeIndicator(indexSlide);    
            this.changeSlide.emit({event: this.eventOutput, currentSlide: indexSlide, nbSlide:this.slides.length});            
        }
        else console.log("Attribut data-slide-id manquant");
    }

    changeIndicator(idSlide:number):void{
        this.renderer.removeClass(this.currentIndicator, 'active');
        this.renderer.addClass(this.currentIndicator, 'inactive');
        this.currentIndicator = this.indicators[idSlide];
        this.renderer.removeClass(this.currentIndicator, 'inactive');
        this.renderer.addClass(this.currentIndicator, 'active');
    }
}