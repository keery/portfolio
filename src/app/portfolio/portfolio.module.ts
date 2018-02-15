import { BrowserModule } 			from '@angular/platform-browser';
import { NgModule } 				from '@angular/core';
import { CommonModule }   			from '@angular/common';
import { PortfolioRoutingModule }  from './portfolio-routing.module';
import { HomeComponent }  from './Home/home.component';
import { ProjetListComponent }	from './projet/projet-list.component';
import { PerspectiveMouseDirective }    from './perspective-mouse.directive';
import { CanvasOpacityComponent } from './canvas-opacity/canvas-opacity.component';
import { LoaderComponent } from './loader.component';
import { LoaderService } from './loader.service';
import { GESliderDirective } from './geslider.directive';
import { GESliderNavigationDirective } from './geslider-navigation.directive';
import { MouseWheelDirective } from './mousewheel.directive';



@NgModule({
  declarations: [
    HomeComponent,
    ProjetListComponent,
    PerspectiveMouseDirective,
    GESliderDirective,
    MouseWheelDirective,
    GESliderNavigationDirective,
    CanvasOpacityComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  entryComponents: [LoaderComponent],
  providers: [
  	LoaderService
  ],
  exports: []
})
export class PortfolioModule {}