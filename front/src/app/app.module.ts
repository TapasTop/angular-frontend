import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LocalesComponent } from './locales/locales.component';
import { MisdegustComponent } from './misdegust/misdegust.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProfileinfoComponent } from './profileinfo/profileinfo.component';
import { DegustacionesComponent } from './degustaciones/degustaciones.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    LocalesComponent,
    MisdegustComponent,
    PerfilComponent,
    ProfileinfoComponent,
    DegustacionesComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
