import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/utils/auth.guard';
import { AdminHomeComponent } from '../pages/admin-home/admin-home.component';

const routes: Routes = [
    {
      path: 'admin-home',
      component: AdminHomeComponent,
      canActivate: [AuthGuard],
      data: { rol: 'Admin' }
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}