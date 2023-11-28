import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '@rutas/home/pages/error/error.component';
import { FeedbackAsksComponent } from '@rutas/shared/feedback-asks/feedback-asks.component';
import { FeedbacksAsks10Component } from '@rutas/shared/feedback-asks/feedbacks-asks10/feedbacks-asks10.component';
import { FeedbacksAsks2Component } from '@rutas/shared/feedback-asks/feedbacks-asks2/feedbacks-asks2.component';
import { FeedbacksAsks3Component } from '@rutas/shared/feedback-asks/feedbacks-asks3/feedbacks-asks3.component';
import { FeedbacksAsks4Component } from '@rutas/shared/feedback-asks/feedbacks-asks4/feedbacks-asks4.component';
import { FeedbacksAsks5Component } from '@rutas/shared/feedback-asks/feedbacks-asks5/feedbacks-asks5.component';
import { FeedbacksAsks6Component } from '@rutas/shared/feedback-asks/feedbacks-asks6/feedbacks-asks6.component';
import { FeedbacksAsks7Component } from '@rutas/shared/feedback-asks/feedbacks-asks7/feedbacks-asks7.component';
import { FeedbacksAsks8Component } from '@rutas/shared/feedback-asks/feedbacks-asks8/feedbacks-asks8.component';
import { FeedbacksAsks9Component } from '@rutas/shared/feedback-asks/feedbacks-asks9/feedbacks-asks9.component';
import { AuthGuard } from '@rutas/utils/auth.guard';

const routes: Routes = [
    {
        path: "1",
        component: FeedbackAsksComponent,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "2",
        component: FeedbacksAsks2Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "3",
        component: FeedbacksAsks3Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }  
    },
    {
        path: "4",
        component: FeedbacksAsks4Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }  
    },
    {
        path: "5",
        component: FeedbacksAsks5Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "6",
        component: FeedbacksAsks6Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "7",
        component: FeedbacksAsks7Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "8",
        component: FeedbacksAsks8Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "9",
        component: FeedbacksAsks9Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    },
    {
        path: "10",
        component: FeedbacksAsks10Component,
        canActivate: [AuthGuard],
        data: { rol: 'Aprendiz' }
    }
    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class feedBackRoutingModule {}  