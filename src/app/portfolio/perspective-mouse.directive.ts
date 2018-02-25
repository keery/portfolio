import { Directive, ElementRef, Renderer2, HostListener, AfterViewInit } from '@angular/core';

@Directive({ selector: '[perspective]' })
export class PerspectiveMouseDirective implements AfterViewInit  {

    x:number = 0;
    y:number = 0;
    perspectiveX:number = 3;
    perspectiveY:number = 5;
    container:any = null;

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngAfterViewInit(){
        const persX = this.el.nativeElement.getAttribute("perspectiveX");
        const persY = this.el.nativeElement.getAttribute("perspectiveY");

        if(persX) this.perspectiveX = persX; 
        if(persY) this.perspectiveY = persY;

        this.container = this.el.nativeElement.querySelector('.perspective-container');
        console.log(this.container);
        if(!this.container) console.log('Pas de container pour (perspective-mouse)');

        this.renderer.setStyle(this.el.nativeElement, 'perspective', "500px");
        this.renderer.setStyle(this.el.nativeElement, 'perspective', "500px");
        this.renderer.setStyle(this.el.nativeElement, 'overflow', "hidden");
        this.renderer.setStyle(this.el.nativeElement, 'transform-style', "preserve-3d");     
    }

    @HostListener('mouseenter') onMouseEnter() {
        // renderer.setElementClass(el, 'class1', false); // remove class1
        // renderer.setElementClass(el, 'class2', true); // add class2
        this.container.classList.remove('leave');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.addClass(this.container, 'leave');
    
    }

    @HostListener('mousemove', ['$event']) onMousemove(event: MouseEvent) {

        //Position de la souris sur l'element qui possède la directive
        this.x = event.screenX - this.el.nativeElement.offsetLeft;
        this.y = event.screenY - this.el.nativeElement.offsetTop;

        //Largeur et hauteur de l'element qui possède la directive
        let largeur:number = this.el.nativeElement.offsetWidth,
            hauteur:number = this.el.nativeElement.offsetHeight;

        //Pourcentage de la position de la souris, Gauche = -50%, Milieu = 0%, Droite = 50%
        let pourcentX = ((this.x * 100 / largeur)-50)*0.01,
            pourcentY = ((this.y * 100 / hauteur)-50)*0.01;            
        
        //Ajout de l'indice de perspective 
        let resultX = pourcentX * this.perspectiveX,
            resultY = -(pourcentY * this.perspectiveY)+1;

        this.setTransform(resultX, resultY);
  
    }

    private setTransform(x:number, y:number)
    {
        let style = "rotateY("+(x)+"deg) rotateX("+(y)+"deg)";
        this.renderer.setStyle(this.container, 'transform', style);
    }
}