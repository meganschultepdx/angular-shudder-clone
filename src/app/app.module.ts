import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { LoginComponent } from './login/login.component';
import { OtherPagesNavbarComponent } from './other-pages-navbar/other-pages-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AccountCreationComponent,
    LoginComponent,
    OtherPagesNavbarComponent,
    FooterComponent,
    AboutComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
