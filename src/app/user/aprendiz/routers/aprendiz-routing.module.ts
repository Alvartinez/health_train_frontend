import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from 'src/app/user/aprendiz/pages/user-home/user-home.component';
import { AuthGuard } from 'src/app/utils/auth.guard';

const routes: Routes = [
  
    {
      path: 'user-home',
      component: UserHomeComponent,
      canActivate: [AuthGuard],
      data: { rol: 'Aprendiz' }
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
export class AprendizRoutingModule {}