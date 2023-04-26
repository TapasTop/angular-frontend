import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import {DegustacionesComponent} from "./degustaciones/degustaciones.component";
import {EstadisticasComponent} from "./estadisticas/estadisticas.component";
const routes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent},
  { path: "perfil", component: PerfilComponent},
  { path: "degustaciones", component: DegustacionesComponent},
  { path: "estadisticas", component: EstadisticasComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
