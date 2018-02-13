import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({ selector: '[perspective]' })
export class PerspectiveMouseDirective {

    x:number;
    y:number;
    perspectiveX:number = 3;
    perspectiveY:number = 20;

    constructor(private el: ElementRef, private renderer: Renderer) {
        this.x = 0;
        this.y = 0;

        const persX = this.el.nativeElement.getAttribute("perspectiveX");
        const persY = this.el.nativeElement.getAttribute("perspectiveY");

        if(persX) this.perspectiveX = persX; 
        if(persY) this.perspectiveY = persY;

        this.renderer.setElementStyle(this.el.nativeElement.parentElement, 'perspective', "500px");
        this.renderer.setElementStyle(this.el.nativeElement.parentElement, 'overflow', "hidden");
        this.renderer.setElementStyle(this.el.nativeElement.parentElement, 'transform-style', "preserve-3d");
    }

    @HostListener('mouseenter') onMouseEnter() {
        // renderer.setElementClass(el, 'class1', false); // remove class1
        // renderer.setElementClass(el, 'class2', true); // add class2
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