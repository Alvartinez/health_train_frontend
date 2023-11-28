import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '@rutas/home/pages/error/error.component';
import { LineaTiempoComponent } from '@rutas/shared/linea-tiempo/linea-tiempo.component';
import { LineaTiempo1Component } from '@rutas/shared/linea-tiempo/linea-tiempo1/linea-tiempo1.component';
import { TextoPlanoComponent } from '@rutas/shared/texto-plano/texto-plano.component';
import { TextoPlano1Component } from '@rutas/shared/texto-plano/texto-plano1/texto-plano1.component';
import { TextoPlano10Component } from '@rutas/shared/texto-plano/texto-plano10/texto-plano10.component';
import { TextoPlano101Component } from '@rutas/shared/texto-plano/texto-plano101/texto-plano101.component';
import { TextoPlano102Component } from '@rutas/shared/texto-plano/texto-plano102/texto-plano102.component';
import { TextoPlano103Component } from '@rutas/shared/texto-plano/texto-plano103/texto-plano103.component';
import { TextoPlano12Component } from '@rutas/shared/texto-plano/texto-plano12/texto-plano12.component';
import { TextoPlano2Component } from '@rutas/shared/texto-plano/texto-plano2/texto-plano2.component';
import { TextoPlano21Component } from '@rutas/shared/texto-plano/texto-plano21/texto-plano21.component';
import { TextoPlano3Component } from '@rutas/shared/texto-plano/texto-plano3/texto-plano3.component';
import { TextoPlano31Component } from '@rutas/shared/texto-plano/texto-plano31/texto-plano31.component';
import { TextoPlano32Component } from '@rutas/shared/texto-plano/texto-plano32/texto-plano32.component';
import { TextoPlano4Component } from '@rutas/shared/texto-plano/texto-plano4/texto-plano4.component';
import { TextoPlano41Component } from '@rutas/shared/texto-plano/texto-plano41/texto-plano41.component';
import { TextoPlano42Component } from '@rutas/shared/texto-plano/texto-plano42/texto-plano42.component';
import { TextoPlano43Component } from '@rutas/shared/texto-plano/texto-plano43/texto-plano43.component';
import { TextoPlano44Component } from '@rutas/shared/texto-plano/texto-plano44/texto-plano44.component';
import { TextoPlano5Component } from '@rutas/shared/texto-plano/texto-plano5/texto-plano5.component';
import { TextoPlano51Component } from '@rutas/shared/texto-plano/texto-plano51/texto-plano51.component';
import { TextoPlano52Component } from '@rutas/shared/texto-plano/texto-plano52/texto-plano52.component';
import { TextoPlano53Component } from '@rutas/shared/texto-plano/texto-plano53/texto-plano53.component';
import { TextoPlano6Component } from '@rutas/shared/texto-plano/texto-plano6/texto-plano6.component';
import { TextoPlano61Component } from '@rutas/shared/texto-plano/texto-plano61/texto-plano61.component';
import { TextoPlano62Component } from '@rutas/shared/texto-plano/texto-plano62/texto-plano62.component';
import { TextoPlano63Component } from '@rutas/shared/texto-plano/texto-plano63/texto-plano63.component';
import { TextoPlano64Component } from '@rutas/shared/texto-plano/texto-plano64/texto-plano64.component';
import { TextoPlano7Component } from '@rutas/shared/texto-plano/texto-plano7/texto-plano7.component';
import { TextoPlano71Component } from '@rutas/shared/texto-plano/texto-plano71/texto-plano71.component';
import { TextoPlano72Component } from '@rutas/shared/texto-plano/texto-plano72/texto-plano72.component';
import { TextoPlano8Component } from '@rutas/shared/texto-plano/texto-plano8/texto-plano8.component';
import { TextoPlano9Component } from '@rutas/shared/texto-plano/texto-plano9/texto-plano9.component';
import { TextoPlano91Component } from '@rutas/shared/texto-plano/texto-plano91/texto-plano91.component';
import { TextoPlano92Component } from '@rutas/shared/texto-plano/texto-plano92/texto-plano92.component';
import { TextoPlano93Component } from '@rutas/shared/texto-plano/texto-plano93/texto-plano93.component';
import { TextoPlano94Component } from '@rutas/shared/texto-plano/texto-plano94/texto-plano94.component';
import { AuthGuard } from '@rutas/utils/auth.guard';

const routes: Routes = [

    {
        path: "texto-plano",
        component: TextoPlanoComponent,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano1",
        component: TextoPlano1Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano12",
        component: TextoPlano12Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "linea-tiempo",
        component: LineaTiempoComponent,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "linea-tiempo1",
        component: LineaTiempo1Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano2",
        component: TextoPlano2Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano21",
        component: TextoPlano21Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano3",
        component: TextoPlano3Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano31",
        component: TextoPlano31Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano32",
        component: TextoPlano32Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano4",
        component: TextoPlano4Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano41",
        component: TextoPlano41Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano42",
        component: TextoPlano42Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano43",
        component: TextoPlano43Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano44",
        component: TextoPlano44Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano5",
        component: TextoPlano5Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano51",
        component: TextoPlano51Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano52",
        component: TextoPlano52Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano53",
        component: TextoPlano53Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    
    {
        path: "texto-plano6",
        component: TextoPlano6Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano61",
        component: TextoPlano61Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano62",
        component: TextoPlano62Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano63",
        component: TextoPlano63Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano64",
        component: TextoPlano64Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano7",
        component: TextoPlano7Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano71",
        component: TextoPlano71Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano72",
        component: TextoPlano72Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano8",
        component: TextoPlano8Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano9",
        component: TextoPlano9Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano91",
        component: TextoPlano91Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano92",
        component: TextoPlano92Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano93",
        component: TextoPlano93Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano94",
        component: TextoPlano94Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano10",
        component: TextoPlano10Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano101",
        component: TextoPlano101Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano102",
        component: TextoPlano102Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "texto-plano103",
        component: TextoPlano103Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ResourseRoutingModule {}