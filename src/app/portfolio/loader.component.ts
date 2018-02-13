import { Component, ViewChild, AfterViewInit, ElementRef,Renderer } from '@angular/core';
import { LoaderState } from './loader.interface';
import { LoaderService } from './loader.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'loader',
	template: `
	<div class="loader-container">
	    <div class="loading">
	        <div class="loader">
	            <div>
	                <span class="loader-ball odd first"></span>
	            </div>
	            <div>
	                <span class="loader-ball even"></span>
	                <span class="loader-ball even"></span>
	            </div>
	            <div>
	                <span class="loader-ball odd"></span>
	                <span class="loader-ball odd"></span>
	            </div>
	            <div>
	                <span class="loader-ball even last"></span>
	            </div>
	        </div>
	        <div class="bar">
	            <div class="percent" #percent>
	            </div>
	            <div class="number"><span id="value" #value>0</span>%</div>
	        </div>
	    </div>
	</div>
	`
})
export class LoaderComponent implements AfterViewInit {


	@ViewChild('percent') percent:ElementRef;
	@ViewChild('value') value:ElementRef;
	private limit:number = 40;
	private start:number = 1;
	private max:number = 90 ;
	private nbCallage:number;
	private duration:number = 0;
    private percentCallage = [];
	public loading = false;    
	public i:number = 0;    

	constructor(private renderer: Renderer,
				private loaderService : LoaderService) {


		this.nbCallage = this.getRandomInt(4,6);

		for(let i = 0; i < this.nbCallage; i++)
	    {
	        let reste = (this.nbCallage - (i+1));
	        let val = this.getRandomInt(this.start, this.limit);
	        this.start = val+1;

	        this.limit += (this.max - this.start) / this.nbCallage;
	        this.duration += this.getRandomInt(100,500);
	        
	        this.percentCallage.push({"percent":val, "duration":this.duration});
	    }

    	this.percentCallage.push({"percent":90, "duration":this.duration});

    	this.myLoop(this.i, this.percentCallage);
	}

	getRandomInt(min, max):number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    ngAfterViewInit() {
		this.loaderService.loaderTest.subscribe((val: boolean) => {
			this.loading = val;

			if(val)
			{
				const st = this.value.nativeElement.innerText;
				this.animateValue("value", st, 100, 800, true);
	        	this.renderer.setElementStyle(this.percent.nativeElement, 'width', "100%");
	        	this.renderer.setElementStyle(this.percent.nativeElement, 'transition-duration', "800ms");
			}
        }); 	    
	 }
    

    animateValue(id, start, end, duration, priority=false):void {
	    const range = end - start;
	    let current = start;
	    const increment:number = end > start ? 1 : -1;
	    const stepTime = Math.abs(Math.floor(duration / range));
	    const obj = document.getElementById(id);
	    const timer = setInterval(() => { 

	    	if(!this.loading || priority)
	    	{
		        current = parseInt(current) + increment;
		        obj.innerHTML = current;
		        if (current == end) {
		            clearInterval(timer);
		        }
	    	}
	    }, stepTime);
	}


	myLoop (i:number, percentCallage) {

	    setTimeout(() => { 
			if(this.loading == false)
			{
				let start = 0;
				let end = percentCallage[i].percent;

				if(i != 0)
				{
			    	start = percentCallage[(i-1)].percent;
					end = percentCallage[i].percent;
				}
		      	this.animateValue("value", start, end, percentCallage[i].duration);
		      	this.renderer.setElementStyle(this.percent.nativeElement, 'width', percentCallage[i].percent+'%');
	        	this.renderer.setElementStyle(this.percent.nativeElement, 'transition-duration', percentCallage[i].duration+"ms");
		      i++;
		      if (i < percentCallage.length) {
		         this.myLoop(i, percentCallage);
		      }                       
				
			}
   		}, i == 0 ? 0 : percentCallage[i].duration);			
	}
}