import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BurgerComponent } from './burger/burger.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainMenuComponent,
    BurgerComponent
  ],
  imports: [
    BrowserModule,
    PortfolioModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}