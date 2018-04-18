import { Directive, HostListener, EventEmitter, Output, ElementRef, AfterViewInit, Input } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/throttleTime';
// import 'rxjs/add/observable/fromEvent';
// import 'rxjs/add/operator/distinctUntilChanged';

@Directive({ selector: '[mousewheel]' })
export class MouseWheelDirective implements AfterViewInit  {

    private emiter:boolean = true;
    private touchY = 0;
    private typeEvent;
    constructor(private el: ElementRef) {}

    // test = Observable.fromEvent(this.el.nativeElement, 'mousewheel');

    @Input('mousewheel') delay;
    @Output() wheelUp = new EventEmitter();
    @Output() wheelDown = new EventEmitter();
    @HostListener('mousewheel', ['$event']) listenerWheelUp(event: any) {
        this.typeEvent = "scroll";
        this.mouseWheel(event);
    }
    @HostListener('DOMMouseScroll', ['$event']) listenerWheelUpFirefox(event: any) {
        this.typeEvent = "scroll";
        this.mouseWheel(event);
    }
    @HostListener('touchstart', ['$event']) listenerTouchstart(event: any) {        
        this.touchY = event.touches[0].clientY;
    }   
    @HostListener('touchend', ['$event']) listenerTouchend(event: any) {  
        this.typeEvent = "touch";
        this.mouseWheel(event);
    }            
    // @HostListener('touchmove', ['$event']) listenerTouchmove(event: any) {        
    //     this.mouseWheel(event);
    // }    

    ngAfterViewInit() {
        if(this.delay == '') this.delay = 0;

        
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
            if(delta > 0 || (event == "touch" && this.touchY < event.changedTouches[0].clientY)) {
                this.wheelUp.emit(thisEvent);
            } else if(delta < 0 || (event instanceof TouchEvent && this.touchY > event.changedTouches[0].clientY)) {
                this.wheelDown.emit(thisEvent);
            }
            setTimeout(()=> {                
                this.emiter = true;
            }, this.delay);
        }
    }
}