import { Directive, ElementRef, Renderer2, HostListener, AfterViewInit } from '@angular/core';

@Directive({ selector: '[geparallax]' })
export class GEParallaxDirective implements AfterViewInit  {

    x:number = 0;
    y:number = 0;
    degreeX:number = 30;
    degreeY:number = 30;
    container:any = null;

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngAfterViewInit(){
        const degreeX = this.el.nativeElement.getAttribute("degreeX");
        const degreeY = this.el.nativeElement.getAttribute("degreeY");

        if(degreeX) this.degreeX = degreeX; 
        if(degreeY) this.degreeY = degreeY;

        this.container = this.el.nativeElement.querySelector('.geparallax-container');
        if(!this.container) console.log('Pas de container pour (geparallax-mouse)');

        // this.renderer.setStyle(this.container.parentElement, 'perspective', "500px");
        // this.renderer.setStyle(this.container.parentElement, 'perspective', "500px");
        // this.renderer.setStyle(this.container.parentElement, 'overflow', "hidden");
        // this.renderer.setStyle(this.container.parentElement, 'transform-style', "preserve-3d");     
    }

    // @HostListener('mouseenter') onMouseEnter() {
    //     this.container.classList.remove('leave');
    // }

    // @HostListener('mouseleave') onMouseLeave() {
    //     this.renderer.addClass(this.container, 'leave');
    
    // }

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
        let resultX = pourcentX * this.degreeX,
            resultY = -(pourcentY * this.degreeY)+1;

        this.setTransform(resultX, resultY);
        console.log("dddd");
  
    }

    private setTransform(x:number, y:number)
    {
        let style = "translateX("+(x)+"px) translateY("+(y)+"px)";
        this.renderer.setStyle(this.container, 'transform', style);
    }
}