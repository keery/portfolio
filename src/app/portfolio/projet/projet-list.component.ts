import { Component, ViewChild, Renderer2, AfterViewInit } from '@angular/core';


@Component({
	templateUrl: './projet-list.template.html',
	styleUrls: ['./projet-list.style.scss']
})
export class ProjetListComponent implements AfterViewInit
{
	test = true;
	private $event = {currentSlide : 0, nbSlide: 0};
	@ViewChild('circleBar') percentBar; 

	constructor(private renderer: Renderer2) {}

	changePercent($event)
	{
		this.$event = $event;
		if(Number.isInteger($event.currentSlide) && $event.nbSlide){
			let progress = (($event.currentSlide+1) * 100 / $event.nbSlide)*0.01;
			this.renderer.setStyle(this.percentBar.nativeElement, 'stroke-dasharray', (520*progress)+" 1570");
		}
	}

	ngAfterViewInit() {
		this.$event.nbSlide = document.querySelectorAll('.slides > li').length;
		this.changePercent(this.$event);
	}
}