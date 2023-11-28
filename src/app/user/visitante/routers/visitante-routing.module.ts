import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/utils/auth.guard';
import { VisitHomeComponent } from '../pages/visit-home/visit-home.component';
import { VisitanteGuard } from '@rutas/utils/visit.guard';
import { ErrorComponent } from '@rutas/home/pages/error/error.component';

const routes: Routes = [
    {
        path: 'vist-home',
        component: VisitHomeComponent,
        canActivate: [AuthGuard, VisitanteGuard],
        data: { rol: 'Visitante' }
    },
    {
      path:"courses",
      loadChildren: () => import('@rutas/course/routers/course-routing.module').then((m) => m.CourseRoutingModule) 
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitRoutingModule {}