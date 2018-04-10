import { Directive, HostListener, EventEmitter, Output, Input, AfterViewInit } from '@angular/core';

@Directive({ selector: '[arrowdirection]' })
export class ArrowDirectionDirective implements AfterViewInit {
    
    @Input('arrowdirection') delay;
    @Output() arrowPrev = new EventEmitter();
    @Output() arrowNext = new EventEmitter();
    available = true;

    ngAfterViewInit() {
        if(this.delay == '') this.delay = 0;
    }
    
    @HostListener('window:keyup', ['$event']) listenerWheelUp(event: any) {
        if(this.available) {
            this.available = false;

            switch(event.keyCode) {
                case 37 : 
                    this.arrowPrev.emit();
                break;
                case 39 : 
                    this.arrowNext.emit();
                break;
                case 40 : 
                    this.arrowNext.emit();
                break;
                case 38 : 
                    this.arrowPrev.emit();
                break;    
            }

            setTimeout(() => {
                this.available = true;
            }, this.delay);
        }
    }
}