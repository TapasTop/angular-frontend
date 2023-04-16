import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full" }
=======
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "home", component: HomeComponent}
>>>>>>> 3017e014be1cd9038a9645ab156278ee636e7138
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
