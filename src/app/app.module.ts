import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BurgerComponent } from './burger/burger.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainMenuComponent,
    BurgerComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    PortfolioModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [LoaderComponent],
  providers: [
    Title,
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}