import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({ selector: '[perspective]' })
export class PerspectiveMouseDirective {

    x:number;
    y:number;
    perspectiveX:number = 3;
    perspectiveY:number = 3;

    constructor(private el: ElementRef, private renderer: Renderer) {
        this.x = 0;
        this.y = 0;

        this.renderer.setElementStyle(this.el.nativeElement.parentElement, 'perspective', "500px");
        this.renderer.setElementStyle(this.el.nativeElement.parentElement, 'overflow', "hidden");
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.el.nativeElement.classList.remove('leave');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.el.nativeElement.classList.add('leave');
    }

    @HostListener('mousemove', ['$event']) onMousemove(event: MouseEvent) {

        this.x = event.screenX - this.el.nativeElement.offsetLeft;
        this.y = event.screenY - this.el.nativeElement.offsetTop;

        let largeur:number = this.el.nativeElement.offsetWidth;
        let hauteur:number = this.el.nativeElement.offsetHeight;

        let pourcentX = ((this.x / largeur * 100)/100)-0.5,
            pourcentY = ((this.y / largeur * 100)/100)-0.5;

        let resultX = pourcentX * (this.perspectiveX * 2),
            resultY = -(pourcentY * this.perspectiveY * 2);

        this.setTransform(resultX, resultY);
  
    }

    private setTransform(x:number, y:number)
    {
        let style = "rotateY("+(x)+"deg) rotateX("+(y)+"deg)";
        this.renderer.setElementStyle(this.el.nativeElement, 'transform', style);
    }
}