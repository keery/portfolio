import { Directive, HostListener, EventEmitter, Output, ElementRef } from '@angular/core';

@Directive({ selector: '[attr.geslide-target]' })
export class GESliderNavigationDirective  {

    constructor(private elRef: ElementRef) {}


    @HostListener('click', ['$event']) onMouseScroll(event: any) {
        document.dispatchEvent(new CustomEvent( 'changeSlide', { detail: { 'target': this.elRef.nativeElement.getAttribute('geslide-target') }} )); 
    }  

}

@Directive({ selector: '[attr.geslide-direction]' })
export class GESliderDirectionDirective  {

    constructor(private elRef: ElementRef) {}


    @HostListener('click') onClickDirection() {
        document.dispatchEvent(new CustomEvent( 'directionSlide', { detail: { 'direction': this.elRef.nativeElement.getAttribute('geslide-direction')}} )); 
    }  

}