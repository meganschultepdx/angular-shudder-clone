import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { LoginComponent } from './login/login.component';
import { OtherPagesNavbarComponent } from './other-pages-navbar/other-pages-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AccountCreationComponent,
    LoginComponent,
    OtherPagesNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
