import { Directive, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({ selector: '[mousewheel]' })
export class MouseWheelDirective  {

    @Output() wheelUp = new EventEmitter();
    @Output() wheelDown = new EventEmitter();

    @HostListener('mousewheel', ['$event']) onMouseScroll(event: any) {
      this.mouseWheel(event);
    }  

    mouseWheel(event: any)
    {
        const thisEvent = window.event || event; // old IE support
        const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        if(delta > 0) {
            this.wheelUp.emit(thisEvent);
        } else if(delta < 0) {
            this.wheelDown.emit(thisEvent);
        }
    }
}