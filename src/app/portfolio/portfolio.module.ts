import { BrowserModule } 			from '@angular/platform-browser';
import { NgModule } 				from '@angular/core';
import { CommonModule }   			from '@angular/common';
import { PortfolioRoutingModule }  from './portfolio-routing.module';
import { HomeComponent }	from './Home/home.component';
import { PerspectiveMouseDirective }    from './perspective-mouse.directive';
import { CanvasOpacityComponent } from './canvas-opacity/canvas-opacity.component';


@NgModule({
  declarations: [
    HomeComponent,
    PerspectiveMouseDirective,
    CanvasOpacityComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  providers: [
  	
  ],
  exports: []
})
export class PortfolioModule {}