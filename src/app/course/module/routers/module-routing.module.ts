import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Modulo1Component } from '@rutas/components/modulo/modulos/modulo1/modulo1.component';
import { Modulo10Component } from '@rutas/components/modulo/modulos/modulo10/modulo10.component';
import { Modulo2Component } from '@rutas/components/modulo/modulos/modulo2/modulo2.component';
import { Modulo3Component } from '@rutas/components/modulo/modulos/modulo3/modulo3.component';
import { Modulo4Component } from '@rutas/components/modulo/modulos/modulo4/modulo4.component';
import { Modulo5Component } from '@rutas/components/modulo/modulos/modulo5/modulo5.component';
import { Modulo6Component } from '@rutas/components/modulo/modulos/modulo6/modulo6.component';
import { Modulo7Component } from '@rutas/components/modulo/modulos/modulo7/modulo7.component';
import { Modulo8Component } from '@rutas/components/modulo/modulos/modulo8/modulo8.component';
import { Modulo9Component } from '@rutas/components/modulo/modulos/modulo9/modulo9.component';
import { ErrorComponent } from '@rutas/home/pages/error/error.component';
import { ModalModuleComponent } from '@rutas/shared/modal-module/modal-module.component';
import { ModalModule10Component } from '@rutas/shared/modal-module/modal-module10/modal-module10.component';
import { ModalModule2Component } from '@rutas/shared/modal-module/modal-module2/modal-module2.component';
import { ModalModule3Component } from '@rutas/shared/modal-module/modal-module3/modal-module3.component';
import { ModalModule4Component } from '@rutas/shared/modal-module/modal-module4/modal-module4.component';
import { ModalModule5Component } from '@rutas/shared/modal-module/modal-module5/modal-module5.component';
import { ModalModule6Component } from '@rutas/shared/modal-module/modal-module6/modal-module6.component';
import { ModalModule7Component } from '@rutas/shared/modal-module/modal-module7/modal-module7.component';
import { ModalModule8Component } from '@rutas/shared/modal-module/modal-module8/modal-module8.component';
import { ModalModule9Component } from '@rutas/shared/modal-module/modal-module9/modal-module9.component';
import { AuthGuard } from '@rutas/utils/auth.guard';

const routes: Routes = [
    {
        path: "modulo/1/modulo-info1",
        component: ModalModuleComponent,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "modulo/2/modulo-info2",
        component: ModalModule2Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "modulo/3/modulo-info3",
        component: ModalModule3Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "modulo/4/modulo-info4",
        component: ModalModule4Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "modulo/5/modulo-info5",
        component: ModalModule5Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "modulo/6/modulo-info6",
        component: ModalModule6Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },    
    {
        path: "modulo/7/modulo-info7",
        component: ModalModule7Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    }, 
    {
        path: "modulo/8/modulo-info8",
        component: ModalModule8Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    }, 
    {
        path: "modulo/9/modulo-info9",
        component: ModalModule9Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "modulo/10/modulo-info10",
        component: ModalModule10Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "modulo/1",
        component: Modulo1Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "modulo/2",
        component: Modulo2Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "modulo/3",
        component: Modulo3Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "modulo/4",
        component: Modulo4Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "modulo/5",
        component: Modulo5Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "modulo/6",
        component: Modulo6Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },    
    {
        path: "modulo/7",
        component: Modulo7Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    }, 
    {
        path: "modulo/8",
        component: Modulo8Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    }, 
    {
        path: "modulo/9",
        component: Modulo9Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "modulo/10",
        component: Modulo10Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path:"modulo/:id/contenidos",
        loadChildren: () => import("@rutas/course/module/routers/content-routing.module").then((m)=> m.ContentRoutingModule)
    },
    {
        path:"modulo/:id/sabias",
        loadChildren: () => import("@rutas/course/module/routers/knewWhat-routing.module").then((m) => m.knewWhatRoutingModule)
    },
    {
        path: "modulo/:id/quiz",
        loadChildren: () => import("@rutas/course/module/quiz/routers/quiz-routing.module").then((m) => m.QuizRoutingModule)
    }
         
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ModuleRoutingModule {}