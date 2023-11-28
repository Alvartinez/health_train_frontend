import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '@rutas/home/pages/error/error.component';
import { ModalSabiasComponent } from '@rutas/shared/modal-sabias/modal-sabias.component';
import { ModalSabias10Component } from '@rutas/shared/modal-sabias/modal-sabias10/modal-sabias10.component';
import { ModalSabias2Component } from '@rutas/shared/modal-sabias/modal-sabias2/modal-sabias2.component';
import { ModalSabias3Component } from '@rutas/shared/modal-sabias/modal-sabias3/modal-sabias3.component';
import { ModalSabias4Component } from '@rutas/shared/modal-sabias/modal-sabias4/modal-sabias4.component';
import { ModalSabias5Component } from '@rutas/shared/modal-sabias/modal-sabias5/modal-sabias5.component';
import { ModalSabias6Component } from '@rutas/shared/modal-sabias/modal-sabias6/modal-sabias6.component';
import { ModalSabias7Component } from '@rutas/shared/modal-sabias/modal-sabias7/modal-sabias7.component';
import { ModalSabias8Component } from '@rutas/shared/modal-sabias/modal-sabias8/modal-sabias8.component';
import { ModalSabias9Component } from '@rutas/shared/modal-sabias/modal-sabias9/modal-sabias9.component';
import { AuthGuard } from '@rutas/utils/auth.guard';

const routes: Routes = [
    {
        path: "sabias-que1",
        component: ModalSabiasComponent,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "sabias-que2",
        component: ModalSabias2Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "sabias-que3",
        component: ModalSabias3Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "sabias-que4",
        component: ModalSabias4Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "sabias-que5",
        component: ModalSabias5Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "sabias-que6",
        component: ModalSabias6Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "sabias-que7",
        component: ModalSabias7Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "sabias-que8",
        component: ModalSabias8Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "sabias-que9",
        component: ModalSabias9Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "sabias-que10",
        component: ModalSabias10Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class knewWhatRoutingModule {}    
