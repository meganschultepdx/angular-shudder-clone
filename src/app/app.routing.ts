import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component'
import { CollectionsComponent } from './collections/collections.component';
;
const appRoutes: Routes = [ 
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login/collections',
    component: CollectionsComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);