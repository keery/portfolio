import { Directive, HostListener, EventEmitter, Output, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({ selector: '[mousewheel]' })
export class MouseWheelDirective implements AfterViewInit  {

    private emiter:boolean = true;
    constructor(private el: ElementRef) {}

    // test = Observable.fromEvent(this.el.nativeElement, 'mousewheel');

    @Input('mousewheel') delay = '1200';
    @Output() wheelUp = new EventEmitter();
    @Output() wheelDown = new EventEmitter();
    @HostListener('mousewheel', ['$event']) listenerWheelUp(event: any) {
        this.mouseWheel(event);
    }
    ngAfterViewInit() {
        if(this.delay == '') this.delay = '1200';

        
       // // this.test.debounceTime(1000)
       //  .subscribe((event) => {
       //      this.mouseWheel(event);
       //  });

    }

    mouseWheel(event: any)
    {
        if(this.emiter){
            this.emiter = false;        

            const thisEvent = window.event || event;
            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

            if(delta > 0) {
                this.wheelUp.emit(thisEvent);
            } else if(delta < 0) {
                this.wheelDown.emit(thisEvent);
            }
            setTimeout(()=> {                
                this.emiter = true;
            }, this.delay);
        }
    }
}