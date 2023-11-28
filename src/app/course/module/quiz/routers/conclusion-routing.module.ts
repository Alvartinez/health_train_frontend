import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '@rutas/home/pages/error/error.component';
import { ConclusionModuloComponent } from '@rutas/shared/conclusion-modulo/conclusion-modulo.component';
import { ConclusionModulo10Component } from '@rutas/shared/conclusion-modulo/conclusion-modulo10/conclusion-modulo10.component';
import { ConclusionModulo2Component } from '@rutas/shared/conclusion-modulo/conclusion-modulo2/conclusion-modulo2.component';
import { ConclusionModulo3Component } from '@rutas/shared/conclusion-modulo/conclusion-modulo3/conclusion-modulo3.component';
import { ConclusionModulo4Component } from '@rutas/shared/conclusion-modulo/conclusion-modulo4/conclusion-modulo4.component';
import { ConclusionModulo5Component } from '@rutas/shared/conclusion-modulo/conclusion-modulo5/conclusion-modulo5.component';
import { ConclusionModulo6Component } from '@rutas/shared/conclusion-modulo/conclusion-modulo6/conclusion-modulo6.component';
import { ConclusionModulo7Component } from '@rutas/shared/conclusion-modulo/conclusion-modulo7/conclusion-modulo7.component';
import { ConclusionModulo8Component } from '@rutas/shared/conclusion-modulo/conclusion-modulo8/conclusion-modulo8.component';
import { ConclusionModulo9Component } from '@rutas/shared/conclusion-modulo/conclusion-modulo9/conclusion-modulo9.component';
import { AuthGuard } from '@rutas/utils/auth.guard';

const routes: Routes = [

    {
        path: "1",
        component: ConclusionModuloComponent,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "2",
        component: ConclusionModulo2Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "3",
        component: ConclusionModulo3Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "4",
        component: ConclusionModulo4Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "5",
        component: ConclusionModulo5Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "6",
        component: ConclusionModulo6Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "7",
        component: ConclusionModulo7Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "8",
        component: ConclusionModulo8Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "9",
        component: ConclusionModulo9Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "10",
        component: ConclusionModulo10Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ConclusionRoutingModule {}