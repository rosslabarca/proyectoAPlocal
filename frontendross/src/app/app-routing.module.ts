import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditpersonaComponent } from './components/banner-profile/editpersona.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditskillsComponent } from './components/hard-soft-skills/editskills.component';
import { NewskillsComponent } from './components/hard-soft-skills/newskills.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditproyectosComponent } from './components/projects/editproyectos.component';
import { NewproyectosComponent } from './components/projects/newproyectos.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'nuevaskills', component: NewskillsComponent},
  { path: 'editskills/:id', component: EditskillsComponent},
  { path: 'nuevopro', component: NewproyectosComponent},
  { path: 'editpro/:id', component: EditproyectosComponent},
  { path: 'editper/:id', component:EditpersonaComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
