import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/utils/auth.guard';
import { DocHomeComponent } from '../pages/doc-home/doc-home.component';

const routes: Routes = [
    {
      path: 'doc-home',
      component: DocHomeComponent,
      canActivate: [AuthGuard],
      data: { rol: 'Docente' }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocenteRoutingModule {}