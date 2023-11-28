import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '@rutas/home/pages/error/error.component';
import { QuizFormativoComponent } from '@rutas/shared/quiz-formativo/quiz-formativo.component';
import { QuizFormativo10Component } from '@rutas/shared/quiz-formativo/quiz-formativo10/quiz-formativo10.component';
import { QuizFormativo2Component } from '@rutas/shared/quiz-formativo/quiz-formativo2/quiz-formativo2.component';
import { QuizFormativo3Component } from '@rutas/shared/quiz-formativo/quiz-formativo3/quiz-formativo3.component';
import { QuizFormativo4Component } from '@rutas/shared/quiz-formativo/quiz-formativo4/quiz-formativo4.component';
import { QuizFormativo5Component } from '@rutas/shared/quiz-formativo/quiz-formativo5/quiz-formativo5.component';
import { QuizFormativo6Component } from '@rutas/shared/quiz-formativo/quiz-formativo6/quiz-formativo6.component';
import { QuizFormativo7Component } from '@rutas/shared/quiz-formativo/quiz-formativo7/quiz-formativo7.component';
import { QuizFormativo8Component } from '@rutas/shared/quiz-formativo/quiz-formativo8/quiz-formativo8.component';
import { QuizFormativo9Component } from '@rutas/shared/quiz-formativo/quiz-formativo9/quiz-formativo9.component';
import { AuthGuard } from '@rutas/utils/auth.guard';

const routes: Routes = [
    {
        path: "quiz-formativo1/:id",
        component: QuizFormativoComponent,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "quiz-formativo2/:id",
        component: QuizFormativo2Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "quiz-formativo3/:id",
        component: QuizFormativo3Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "quiz-formativo4/:id",
        component: QuizFormativo4Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "quiz-formativo5/:id",
        component: QuizFormativo5Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "quiz-formativo6/:id",
        component: QuizFormativo6Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "quiz-formativo7/:id",
        component: QuizFormativo7Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "quiz-formativo8/:id",
        component: QuizFormativo8Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "quiz-formativo9/:id",
        component: QuizFormativo9Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "quiz-formativo10/:id",
        component: QuizFormativo10Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "quiz-formativo1/:id/feedback",
        loadChildren: () => import("@rutas/course/module/quiz/routers/feedback-routing.module").then((m) => m.feedBackRoutingModule)
    },
    {
        path: "quiz-formativo1/:id/conclusion",
        loadChildren: () => import("@rutas/course/module/quiz/routers/conclusion-routing.module").then((m)=>m.ConclusionRoutingModule)
    }

    //Borrar
    ,{
        path: "quiz-formativo2/:id/feedback",
        loadChildren: () => import("@rutas/course/module/quiz/routers/feedback-routing.module").then((m) => m.feedBackRoutingModule)
    },
    {
        path: "quiz-formativo2/:id/conclusion",
        loadChildren: () => import("@rutas/course/module/quiz/routers/conclusion-routing.module").then((m)=>m.ConclusionRoutingModule)
    }

    ,{
        path: "quiz-formativo3/:id/feedback",
        loadChildren: () => import("@rutas/course/module/quiz/routers/feedback-routing.module").then((m) => m.feedBackRoutingModule)
    },
    {
        path: "quiz-formativo3/:id/conclusion",
        loadChildren: () => import("@rutas/course/module/quiz/routers/conclusion-routing.module").then((m)=>m.ConclusionRoutingModule)
    }

    ,{
        path: "quiz-formativo4/:id/feedback",
        loadChildren: () => import("@rutas/course/module/quiz/routers/feedback-routing.module").then((m) => m.feedBackRoutingModule)
    },
    {
        path: "quiz-formativo4/:id/conclusion",
        loadChildren: () => import("@rutas/course/module/quiz/routers/conclusion-routing.module").then((m)=>m.ConclusionRoutingModule)
    }

    ,{
        path: "quiz-formativo5/:id/feedback",
        loadChildren: () => import("@rutas/course/module/quiz/routers/feedback-routing.module").then((m) => m.feedBackRoutingModule)
    },
    {
        path: "quiz-formativo5/:id/conclusion",
        loadChildren: () => import("@rutas/course/module/quiz/routers/conclusion-routing.module").then((m)=>m.ConclusionRoutingModule)
    }

    ,{
        path: "quiz-formativo6/:id/feedback",
        loadChildren: () => import("@rutas/course/module/quiz/routers/feedback-routing.module").then((m) => m.feedBackRoutingModule)
    },
    {
        path: "quiz-formativo6/:id/conclusion",
        loadChildren: () => import("@rutas/course/module/quiz/routers/conclusion-routing.module").then((m)=>m.ConclusionRoutingModule)
    }

    ,{
        path: "quiz-formativo7/:id/feedback",
        loadChildren: () => import("@rutas/course/module/quiz/routers/feedback-routing.module").then((m) => m.feedBackRoutingModule)
    },
    {
        path: "quiz-formativo7/:id/conclusion",
        loadChildren: () => import("@rutas/course/module/quiz/routers/conclusion-routing.module").then((m)=>m.ConclusionRoutingModule)
    }

    ,{
        path: "quiz-formativo8/:id/feedback",
        loadChildren: () => import("@rutas/course/module/quiz/routers/feedback-routing.module").then((m) => m.feedBackRoutingModule)
    },
    {
        path: "quiz-formativo8/:id/conclusion",
        loadChildren: () => import("@rutas/course/module/quiz/routers/conclusion-routing.module").then((m)=>m.ConclusionRoutingModule)
    }

    ,{
        path: "quiz-formativo9/:id/feedback",
        loadChildren: () => import("@rutas/course/module/quiz/routers/feedback-routing.module").then((m) => m.feedBackRoutingModule)
    },
    {
        path: "quiz-formativo9/:id/conclusion",
        loadChildren: () => import("@rutas/course/module/quiz/routers/conclusion-routing.module").then((m)=>m.ConclusionRoutingModule)
    }

    ,{
        path: "quiz-formativo10/:id/feedback",
        loadChildren: () => import("@rutas/course/module/quiz/routers/feedback-routing.module").then((m) => m.feedBackRoutingModule)
    },
    {
        path: "quiz-formativo10/:id/conclusion",
        loadChildren: () => import("@rutas/course/module/quiz/routers/conclusion-routing.module").then((m)=>m.ConclusionRoutingModule)
    }

    //Borrar

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class QuizRoutingModule {}