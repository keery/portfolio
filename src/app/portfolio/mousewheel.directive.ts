import { Directive, HostListener, EventEmitter, Output, ElementRef, AfterViewInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Directive({ selector: '[mousewheel]' })
export class MouseWheelDirective implements AfterViewInit  {

    private emiter:boolean = true;
     constructor(private el: ElementRef) {}

    test = Observable.fromEvent(this.el.nativeElement, 'mousewheel');

    @Output() wheelUp = new EventEmitter();
    @Output() wheelDown = new EventEmitter();
    @HostListener('mousewheel', ['$event']) listenerWheelUp(event: any) {
        this.mouseWheel(event);
    }
    ngAfterViewInit() {
       // // this.test.debounceTime(1000)
       //  .subscribe((event) => {
       //      this.mouseWheel(event);
       //  });
    }

    mouseWheel(event: any)
    {
        if(this.emiter){
            this.emiter = false;        

                const thisEvent = window.event || event; // old IE support
                const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

                if(delta > 0) {
                    this.wheelUp.emit(thisEvent);
                } else if(delta < 0) {
                    this.wheelDown.emit(thisEvent);
                }
            setTimeout(()=> {                
                this.emiter = true;
            }, 1200);
        }
    }
}