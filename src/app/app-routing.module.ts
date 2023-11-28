import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './utils/auth.guard';
import { DescriptionCourseComponent } from './components/description-course/description-course/description-course.component';
import { CourseContentComponent } from './components/course-content/course-content.component';
import { DiccionarioComponent } from './shared/diccionario/diccionario.component';
import { PruebaComponent } from './shared/prueba/prueba.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'healthtrain',
    pathMatch: 'full', // Asegura que coincida con la URL completa
  },
  {
    path: 'healthtrain',
    loadChildren: () => import('./home/routers/home-routing.module').then(m => m.HomeRoutingModule)
  },


  // {
  //   path: 'description-course',
  //   component: DescriptionCourseComponent
  // },

  // {
  //   path: "diccionario",
  //   component: DiccionarioComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: "prueba",
  //   component: PruebaComponent,
  //   canActivate: [AuthGuard]
  // },
  {
    path: '**',
    redirectTo: 'healthtrain/error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
