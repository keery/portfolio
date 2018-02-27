import { Directive, ElementRef, Renderer2, HostListener, AfterViewInit } from '@angular/core';

@Directive({ selector: '[multi-perspective]' })
export class MultiPerspectiveMouseDirective implements AfterViewInit  {

    protected x:number = 0;
    protected y:number = 0;
    protected perspectiveX:number = 3;
    protected perspectiveY:number = 5;
    protected containers:any = null;
    private current = null;

    constructor(protected el: ElementRef, protected renderer: Renderer2) {}

    ngAfterViewInit(){
        const persX = this.el.nativeElement.getAttribute("perspectiveX");
        const persY = this.el.nativeElement.getAttribute("perspectiveY");

        if(persX) this.perspectiveX = persX; 
        if(persY) this.perspectiveY = persY;

        this.containers = this.el.nativeElement.querySelectorAll('.perspective-container');

        if(!this.containers) console.log('Pas de containers pour (multi-perspective-mouse)');

        for (var i = 0; i < this.containers.length; i++) {
            if(this.containers[i].parentElement.classList.contains("active")) this.current = this.containers[i];
            this.renderer.addClass(this.containers[i].parentElement, 'perspective-area');
        }
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.renderer.removeClass(this.current, 'leave');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.addClass(this.current, 'leave');
    }
    @HostListener('changeSlide', ['$event']) onChangeSlide($event) {
        if($event.currentSlide >= 0 && $event.currentSlide < this.containers.length) this.current = this.containers[$event.currentSlide];
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
        this.renderer.setStyle(this.current, 'transform', style);
    }
}