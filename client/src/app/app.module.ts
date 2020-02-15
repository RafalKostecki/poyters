import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './partials/logo/logo.component';
import { MenuComponent } from './partials/menu/menu.component';
import { CategoryComponent } from './partials/category/category.component';
import { ProjectComponent } from './partials/project/project.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './partials/credits-footer/credits-footer.component';
import { DiaryComponent } from './views/diary/diary.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ContactComponent } from './views/contact/contact.component';
import { PortfolioProjectComponent } from './partials/portfolio-project/portfolio-project.component';
import { AlertComponent } from './partials/alert/alert.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { SignupComponent } from './views/signup/signup.component';
import { SigninComponent } from './views/signin/signin.component';
import { AboutComponent } from './partials/about/about.component';
import { ProfilPanelComponent } from './partials/profile-panel/profile-panel.component';
import { LoginPanelComponent } from './partials/login-panel/login-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    MenuComponent,
    CategoryComponent,
    ProjectComponent,
    HomeComponent,
    FooterComponent,
    DiaryComponent,
    PortfolioComponent,
    ContactComponent,
    PortfolioProjectComponent,
    AlertComponent,
    NotFoundComponent,
    SignupComponent,
    SigninComponent,
    AboutComponent,
    ProfilPanelComponent,
    LoginPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


