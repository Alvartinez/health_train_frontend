import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '@rutas/home/pages/error/error.component';
import { ContentModuleComponent } from '@rutas/shared/content-module/content-module.component';
import { ContentModule1Component } from '@rutas/shared/content-module/content-module1/content-module1.component';
import { ContentModule10Component } from '@rutas/shared/content-module/content-module10/content-module10.component';
import { ContentModule2Component } from '@rutas/shared/content-module/content-module2/content-module2.component';
import { ContentModule3Component } from '@rutas/shared/content-module/content-module3/content-module3.component';
import { ContentModule4Component } from '@rutas/shared/content-module/content-module4/content-module4.component';
import { ContentModule5Component } from '@rutas/shared/content-module/content-module5/content-module5.component';
import { ContentModule6Component } from '@rutas/shared/content-module/content-module6/content-module6.component';
import { ContentModule7Component } from '@rutas/shared/content-module/content-module7/content-module7.component';
import { ContentModule8Component } from '@rutas/shared/content-module/content-module8/content-module8.component';
import { ContentModule9Component } from '@rutas/shared/content-module/content-module9/content-module9.component';
import { AuthGuard } from '@rutas/utils/auth.guard';

const routes: Routes = [
    {
        path: "contenido1",
        component: ContentModuleComponent,
        canActivate:[AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "contenido-linea",
        component: ContentModule1Component,
        canActivate:[AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "contenido2",
        component: ContentModule2Component,
        canActivate:[AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "contenido3",
        component: ContentModule3Component,
        canActivate:[AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "contenido4",
        component: ContentModule4Component,
        canActivate:[AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "contenido5",
        component: ContentModule5Component,
        canActivate:[AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "contenido6",
        component: ContentModule6Component,
        canActivate:[AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "contenido7",
        component: ContentModule7Component,
        canActivate:[AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "contenido8",
        component: ContentModule8Component,
        canActivate:[AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "contenido9",
        component: ContentModule9Component,
        canActivate:[AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "contenido10",
        component: ContentModule10Component,
        canActivate:[AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path:"contenido1/resource",
        loadChildren: () => import("@rutas/course/module/routers/resource-routing.module").then((m) => m.ResourseRoutingModule)
    },
    {
        path:"contenido-linea/resource",
        loadChildren: () => import("@rutas/course/module/routers/resource-routing.module").then((m) => m.ResourseRoutingModule)
    },
    {
        path:"contenido2/resource",
        loadChildren: () => import("@rutas/course/module/routers/resource-routing.module").then((m) => m.ResourseRoutingModule)
    },
    {
        path:"contenido3/resource",
        loadChildren: () => import("@rutas/course/module/routers/resource-routing.module").then((m) => m.ResourseRoutingModule)
    },
    {
        path:"contenido4/resource",
        loadChildren: () => import("@rutas/course/module/routers/resource-routing.module").then((m) => m.ResourseRoutingModule)
    },
    {
        path:"contenido5/resource",
        loadChildren: () => import("@rutas/course/module/routers/resource-routing.module").then((m) => m.ResourseRoutingModule)
    },
    {
        path:"contenido6/resource",
        loadChildren: () => import("@rutas/course/module/routers/resource-routing.module").then((m) => m.ResourseRoutingModule)
    },
    {
        path:"contenido7/resource",
        loadChildren: () => import("@rutas/course/module/routers/resource-routing.module").then((m) => m.ResourseRoutingModule)
    },
    {
        path:"contenido8/resource",
        loadChildren: () => import("@rutas/course/module/routers/resource-routing.module").then((m) => m.ResourseRoutingModule)
    },
    {
        path:"contenido9/resource",
        loadChildren: () => import("@rutas/course/module/routers/resource-routing.module").then((m) => m.ResourseRoutingModule)
    },
    {
        path:"contenido10/resource",
        loadChildren: () => import("@rutas/course/module/routers/resource-routing.module").then((m) => m.ResourseRoutingModule)
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ContentRoutingModule {}