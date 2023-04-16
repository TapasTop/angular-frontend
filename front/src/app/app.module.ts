import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LocalesComponent } from './locales/locales.component';
import { MisdegustComponent } from './misdegust/misdegust.component';
>>>>>>> 3017e014be1cd9038a9645ab156278ee636e7138

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
=======
    HomeComponent,
    NavbarComponent,
    LocalesComponent,
    MisdegustComponent
>>>>>>> 3017e014be1cd9038a9645ab156278ee636e7138
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
