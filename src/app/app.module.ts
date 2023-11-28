//Modulos
import { NgModule } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';

//Intercetor
import { AddTokenInterceptor } from './utils/add-token.interceptor';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './home/pages/login/login.component';
import { HomeComponent } from './home/pages/home/home.component';
import { SectionHomeComponent } from './home/components/section-home/section-home.component';
import { SectionCardsComponent } from './home/components/section-cards/section-cards.component';
import { CardCourseComponent } from './shared/card-course/card-course.component';
import { SectionNewsComponent } from './home/components/section-news/section-news.component';
import { FooterColaborationsComponent } from './shared/footer-colaborations/footer-colaborations.component';
import { ParticlesComponent } from './shared/particles/particles.component';
import { FormLoginComponent } from './home/components/form-login/form-login.component';
import { FormRegisterComponent } from './home/components/form-register/form-register.component';
import { UserHomeComponent } from './user/aprendiz/pages/user-home/user-home.component';
import { UserContentComponent } from './user/aprendiz/components/user-content/user-content.component';
import { UserNavbarComponent } from './shared/user-navbar/user-navbar.component';
import { RegisterComponent } from './home/pages/register/register.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { DescriptionCourseComponent } from './components/description-course/description-course/description-course.component';
import { CourseBodyComponent } from './shared/course-body/course-body.component';
import { CourseContentComponent } from './components/course-content/course-content.component';
import { FooterTeacherComponent } from './shared/footer-teacher/footer-teacher.component';
import { CourseBaseComponent } from './course/components/course-base/course-base.component';
import { CourseComponent } from './course/pages/course/course.component';
import { CardModuleComponent } from './shared/card-module/card-module.component';
import { ModalModuleComponent } from './shared/modal-module/modal-module.component';
import { Modulo1Component } from './components/modulo/modulos/modulo1/modulo1.component';
import { Modulo2Component } from './components/modulo/modulos/modulo2/modulo2.component';
import { Modulo3Component } from './components/modulo/modulos/modulo3/modulo3.component';
import { Modulo4Component } from './components/modulo/modulos/modulo4/modulo4.component';
import { Modulo5Component } from './components/modulo/modulos/modulo5/modulo5.component';
import { Modulo6Component } from './components/modulo/modulos/modulo6/modulo6.component';
import { Modulo7Component } from './components/modulo/modulos/modulo7/modulo7.component';
import { Modulo8Component } from './components/modulo/modulos/modulo8/modulo8.component';
import { Modulo9Component } from './components/modulo/modulos/modulo9/modulo9.component';
import { Modulo10Component } from './components/modulo/modulos/modulo10/modulo10.component';
import { ModuloBaseComponent } from './components/modulo/modulo-base/modulo-base.component';
import { ModuleNavbarComponent } from './shared/module-navbar/module-navbar.component';
import { ContentDropdownsComponent } from './shared/content-dropdowns/content-dropdowns.component';
import { ContentModuleComponent } from './shared/content-module/content-module.component';
import { WelcomeModuleComponent } from './shared/welcome-module/welcome-module.component';
import { CardsModule1Component } from './shared/cards-module/modulo1/cards-module1/cards-module1.component';
import { TextoPlanoComponent } from './shared/texto-plano/texto-plano.component';
import { ModalSabiasComponent } from './shared/modal-sabias/modal-sabias.component';
import { QuizFormativoComponent } from './shared/quiz-formativo/quiz-formativo.component';
import { FeedbackAsksComponent } from './shared/feedback-asks/feedback-asks.component';
import { ConclusionModuloComponent } from './shared/conclusion-modulo/conclusion-modulo.component';
import { TextoPlano1Component } from './shared/texto-plano/texto-plano1/texto-plano1.component';
import { ModalModule2Component } from './shared/modal-module/modal-module2/modal-module2.component';
import { ModalModule3Component } from './shared/modal-module/modal-module3/modal-module3.component';
import { ModalModule4Component } from './shared/modal-module/modal-module4/modal-module4.component';
import { ModalModule5Component } from './shared/modal-module/modal-module5/modal-module5.component';
import { ModalModule6Component } from './shared/modal-module/modal-module6/modal-module6.component';
import { ModalModule7Component } from './shared/modal-module/modal-module7/modal-module7.component';
import { ModalModule8Component } from './shared/modal-module/modal-module8/modal-module8.component';
import { ModalModule9Component } from './shared/modal-module/modal-module9/modal-module9.component';
import { ModalModule10Component } from './shared/modal-module/modal-module10/modal-module10.component';
import { ModuloBase2Component } from './components/modulo/modulo-base/modulo-base2/modulo-base2.component';
import { ModuloBase3Component } from './components/modulo/modulo-base/modulo-base3/modulo-base3.component';
import { ModuloBase4Component } from './components/modulo/modulo-base/modulo-base4/modulo-base4.component';
import { ModuloBase5Component } from './components/modulo/modulo-base/modulo-base5/modulo-base5.component';
import { ModuloBase6Component } from './components/modulo/modulo-base/modulo-base6/modulo-base6.component';
import { ModuloBase7Component } from './components/modulo/modulo-base/modulo-base7/modulo-base7.component';
import { ModuloBase8Component } from './components/modulo/modulo-base/modulo-base8/modulo-base8.component';
import { ModuloBase9Component } from './components/modulo/modulo-base/modulo-base9/modulo-base9.component';
import { ModuloBase10Component } from './components/modulo/modulo-base/modulo-base10/modulo-base10.component';
import { ContentModule2Component } from './shared/content-module/content-module2/content-module2.component';
import { ContentModule3Component } from './shared/content-module/content-module3/content-module3.component';
import { ContentModule4Component } from './shared/content-module/content-module4/content-module4.component';
import { ContentModule5Component } from './shared/content-module/content-module5/content-module5.component';
import { ContentModule6Component } from './shared/content-module/content-module6/content-module6.component';
import { ContentModule7Component } from './shared/content-module/content-module7/content-module7.component';
import { ContentModule8Component } from './shared/content-module/content-module8/content-module8.component';
import { ContentModule9Component } from './shared/content-module/content-module9/content-module9.component';
import { ContentModule10Component } from './shared/content-module/content-module10/content-module10.component';
import { ModalSabias2Component } from './shared/modal-sabias/modal-sabias2/modal-sabias2.component';
import { ModalSabias3Component } from './shared/modal-sabias/modal-sabias3/modal-sabias3.component';
import { ModalSabias4Component } from './shared/modal-sabias/modal-sabias4/modal-sabias4.component';
import { ModalSabias5Component } from './shared/modal-sabias/modal-sabias5/modal-sabias5.component';
import { ModalSabias6Component } from './shared/modal-sabias/modal-sabias6/modal-sabias6.component';
import { ModalSabias7Component } from './shared/modal-sabias/modal-sabias7/modal-sabias7.component';
import { ModalSabias8Component } from './shared/modal-sabias/modal-sabias8/modal-sabias8.component';
import { ModalSabias9Component } from './shared/modal-sabias/modal-sabias9/modal-sabias9.component';
import { ModalSabias10Component } from './shared/modal-sabias/modal-sabias10/modal-sabias10.component';
import { QuizFormativo2Component } from './shared/quiz-formativo/quiz-formativo2/quiz-formativo2.component';
import { QuizFormativo3Component } from './shared/quiz-formativo/quiz-formativo3/quiz-formativo3.component';
import { QuizFormativo4Component } from './shared/quiz-formativo/quiz-formativo4/quiz-formativo4.component';
import { QuizFormativo5Component } from './shared/quiz-formativo/quiz-formativo5/quiz-formativo5.component';
import { QuizFormativo6Component } from './shared/quiz-formativo/quiz-formativo6/quiz-formativo6.component';
import { QuizFormativo7Component } from './shared/quiz-formativo/quiz-formativo7/quiz-formativo7.component';
import { QuizFormativo8Component } from './shared/quiz-formativo/quiz-formativo8/quiz-formativo8.component';
import { QuizFormativo9Component } from './shared/quiz-formativo/quiz-formativo9/quiz-formativo9.component';
import { QuizFormativo10Component } from './shared/quiz-formativo/quiz-formativo10/quiz-formativo10.component';
import { FeedbacksAsks2Component } from './shared/feedback-asks/feedbacks-asks2/feedbacks-asks2.component';
import { TextoPlano2Component } from './shared/texto-plano/texto-plano2/texto-plano2.component';
import { TextoPlano12Component } from './shared/texto-plano/texto-plano12/texto-plano12.component';
import { TextoPlano21Component } from './shared/texto-plano/texto-plano21/texto-plano21.component';
import { TextoPlano3Component } from './shared/texto-plano/texto-plano3/texto-plano3.component';
import { TextoPlano31Component } from './shared/texto-plano/texto-plano31/texto-plano31.component';
import { TextoPlano32Component } from './shared/texto-plano/texto-plano32/texto-plano32.component';
import { TextoPlano4Component } from './shared/texto-plano/texto-plano4/texto-plano4.component';
import { TextoPlano41Component } from './shared/texto-plano/texto-plano41/texto-plano41.component';
import { TextoPlano42Component } from './shared/texto-plano/texto-plano42/texto-plano42.component';
import { TextoPlano43Component } from './shared/texto-plano/texto-plano43/texto-plano43.component';
import { TextoPlano44Component } from './shared/texto-plano/texto-plano44/texto-plano44.component';
import { TextoPlano5Component } from './shared/texto-plano/texto-plano5/texto-plano5.component';
import { TextoPlano51Component } from './shared/texto-plano/texto-plano51/texto-plano51.component';
import { TextoPlano52Component } from './shared/texto-plano/texto-plano52/texto-plano52.component';
import { TextoPlano53Component } from './shared/texto-plano/texto-plano53/texto-plano53.component';
import { TextoPlano6Component } from './shared/texto-plano/texto-plano6/texto-plano6.component';
import { TextoPlano61Component } from './shared/texto-plano/texto-plano61/texto-plano61.component';
import { TextoPlano62Component } from './shared/texto-plano/texto-plano62/texto-plano62.component';
import { TextoPlano63Component } from './shared/texto-plano/texto-plano63/texto-plano63.component';
import { TextoPlano64Component } from './shared/texto-plano/texto-plano64/texto-plano64.component';
import { TextoPlano7Component } from './shared/texto-plano/texto-plano7/texto-plano7.component';
import { TextoPlano71Component } from './shared/texto-plano/texto-plano71/texto-plano71.component';
import { TextoPlano72Component } from './shared/texto-plano/texto-plano72/texto-plano72.component';
import { TextoPlano8Component } from './shared/texto-plano/texto-plano8/texto-plano8.component';
import { TextoPlano9Component } from './shared/texto-plano/texto-plano9/texto-plano9.component';
import { TextoPlano91Component } from './shared/texto-plano/texto-plano91/texto-plano91.component';
import { TextoPlano92Component } from './shared/texto-plano/texto-plano92/texto-plano92.component';
import { TextoPlano93Component } from './shared/texto-plano/texto-plano93/texto-plano93.component';
import { TextoPlano94Component } from './shared/texto-plano/texto-plano94/texto-plano94.component';
import { TextoPlano10Component } from './shared/texto-plano/texto-plano10/texto-plano10.component';
import { TextoPlano101Component } from './shared/texto-plano/texto-plano101/texto-plano101.component';
import { TextoPlano102Component } from './shared/texto-plano/texto-plano102/texto-plano102.component';
import { TextoPlano103Component } from './shared/texto-plano/texto-plano103/texto-plano103.component';
import { ConclusionModulo2Component } from './shared/conclusion-modulo/conclusion-modulo2/conclusion-modulo2.component';
import { ConclusionModulo3Component } from './shared/conclusion-modulo/conclusion-modulo3/conclusion-modulo3.component';
import { ConclusionModulo4Component } from './shared/conclusion-modulo/conclusion-modulo4/conclusion-modulo4.component';
import { ConclusionModulo5Component } from './shared/conclusion-modulo/conclusion-modulo5/conclusion-modulo5.component';
import { ConclusionModulo6Component } from './shared/conclusion-modulo/conclusion-modulo6/conclusion-modulo6.component';
import { ConclusionModulo7Component } from './shared/conclusion-modulo/conclusion-modulo7/conclusion-modulo7.component';
import { ConclusionModulo8Component } from './shared/conclusion-modulo/conclusion-modulo8/conclusion-modulo8.component';
import { ConclusionModulo9Component } from './shared/conclusion-modulo/conclusion-modulo9/conclusion-modulo9.component';
import { ConclusionModulo10Component } from './shared/conclusion-modulo/conclusion-modulo10/conclusion-modulo10.component';
import { FeedbacksAsks3Component } from './shared/feedback-asks/feedbacks-asks3/feedbacks-asks3.component';
import { FeedbacksAsks4Component } from './shared/feedback-asks/feedbacks-asks4/feedbacks-asks4.component';
import { FeedbacksAsks5Component } from './shared/feedback-asks/feedbacks-asks5/feedbacks-asks5.component';
import { FeedbacksAsks6Component } from './shared/feedback-asks/feedbacks-asks6/feedbacks-asks6.component';
import { FeedbacksAsks7Component } from './shared/feedback-asks/feedbacks-asks7/feedbacks-asks7.component';
import { FeedbacksAsks8Component } from './shared/feedback-asks/feedbacks-asks8/feedbacks-asks8.component';
import { FeedbacksAsks9Component } from './shared/feedback-asks/feedbacks-asks9/feedbacks-asks9.component';
import { FeedbacksAsks10Component } from './shared/feedback-asks/feedbacks-asks10/feedbacks-asks10.component';
import { LineaTiempoComponent } from './shared/linea-tiempo/linea-tiempo.component';
import { LineaTiempo1Component } from './shared/linea-tiempo/linea-tiempo1/linea-tiempo1.component';
import { ContentModule1Component } from './shared/content-module/content-module1/content-module1.component';
import { DiccionarioComponent } from './shared/diccionario/diccionario.component';
import { ContentEmbeddedComponent } from './shared/content-embedded/content-embedded.component';
import { PruebaComponent } from './shared/prueba/prueba.component';
import { TerminosComponent } from './shared/terminos/terminos.component';
import { Resultados1Component } from './shared/resultados/resultados1/resultados1.component';
import { AdminHomeComponent } from './user/admin/pages/admin-home/admin-home.component';
import { DocHomeComponent } from './user/docente/pages/doc-home/doc-home.component';
import { VisitHomeComponent } from './user/visitante/pages/visit-home/visit-home.component';
import { VistContentComponent } from './user/visitante/components/vist-content/vist-content.component';
import { AdminContentComponent } from './user/admin/components/admin-content/admin-content.component';
import { ExamComponent } from './course/pages/exam/exam.component';
import { FeedbackExamComponent } from './course/pages/feedback-exam/feedback-exam.component';
import { ErrorComponent } from './home/pages/error/error.component';
import { RefreshTokenInterceptor } from './utils/refresh-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SectionHomeComponent,
    SectionCardsComponent,
    CardCourseComponent,
    SectionNewsComponent,
    FooterColaborationsComponent,
    ParticlesComponent,
    FormLoginComponent,
    FormRegisterComponent,
    UserHomeComponent,
    UserContentComponent,
    UserNavbarComponent,
    RegisterComponent,
    LoadingComponent,
    DescriptionCourseComponent,
    CourseContentComponent,
    CourseBodyComponent,
    FooterTeacherComponent,
    CourseBaseComponent,
    CourseComponent,
    CardModuleComponent,
    ModalModuleComponent,
    ModuloBaseComponent,
    Modulo1Component,
    Modulo2Component,
    Modulo3Component,
    Modulo4Component,
    Modulo5Component,
    Modulo6Component,
    Modulo7Component,
    Modulo8Component,
    Modulo9Component,
    Modulo10Component,
    ModuleNavbarComponent,
    ContentDropdownsComponent,
    ContentModuleComponent,
    WelcomeModuleComponent,
    CardsModule1Component,
    TextoPlanoComponent,
    ModalSabiasComponent,
    QuizFormativoComponent,
    FeedbackAsksComponent,
    ConclusionModuloComponent,
    TextoPlano1Component,
    ModalModule2Component,
    ModalModule3Component,
    ModalModule4Component,
    ModalModule5Component,
    ModalModule6Component,
    ModalModule7Component,
    ModalModule8Component,
    ModalModule9Component,
    ModalModule10Component,
    ModuloBase2Component,
    ModuloBase3Component,
    ModuloBase4Component,
    ModuloBase5Component,
    ModuloBase6Component,
    ModuloBase7Component,
    ModuloBase8Component,
    ModuloBase9Component,
    ModuloBase10Component,
    ContentModule2Component,
    ContentModule3Component,
    ContentModule4Component,
    ContentModule5Component,
    ContentModule6Component,
    ContentModule7Component,
    ContentModule8Component,
    ContentModule9Component,
    ContentModule10Component,
    ModalSabias2Component,
    ModalSabias3Component,
    ModalSabias4Component,
    ModalSabias5Component,
    ModalSabias6Component,
    ModalSabias7Component,
    ModalSabias8Component,
    ModalSabias9Component,
    ModalSabias10Component,
    QuizFormativo2Component,
    QuizFormativo3Component,
    QuizFormativo4Component,
    QuizFormativo5Component,
    QuizFormativo6Component,
    QuizFormativo7Component,
    QuizFormativo8Component,
    QuizFormativo9Component,
    QuizFormativo10Component,
    FeedbacksAsks2Component,
    TextoPlano2Component,
    TextoPlano12Component,
    TextoPlano21Component,
    TextoPlano3Component,
    TextoPlano31Component,
    TextoPlano32Component,
    TextoPlano4Component,
    TextoPlano41Component,
    TextoPlano42Component,
    TextoPlano43Component,
    TextoPlano44Component,
    TextoPlano5Component,
    TextoPlano51Component,
    TextoPlano52Component,
    TextoPlano53Component,
    TextoPlano6Component,
    TextoPlano61Component,
    TextoPlano62Component,
    TextoPlano63Component,
    TextoPlano64Component,
    TextoPlano7Component,
    TextoPlano71Component,
    TextoPlano72Component,
    TextoPlano8Component,
    TextoPlano9Component,
    TextoPlano91Component,
    TextoPlano92Component,
    TextoPlano93Component,
    TextoPlano94Component,
    TextoPlano10Component,
    TextoPlano101Component,
    TextoPlano102Component,
    TextoPlano103Component,
    ConclusionModulo2Component,
    ConclusionModulo3Component,
    ConclusionModulo4Component,
    ConclusionModulo5Component,
    ConclusionModulo6Component,
    ConclusionModulo7Component,
    ConclusionModulo8Component,
    ConclusionModulo9Component,
    ConclusionModulo10Component,
    FeedbacksAsks3Component,
    FeedbacksAsks4Component,
    FeedbacksAsks5Component,
    FeedbacksAsks6Component,
    FeedbacksAsks7Component,
    FeedbacksAsks8Component,
    FeedbacksAsks9Component,
    FeedbacksAsks10Component,
    LineaTiempoComponent,
    LineaTiempo1Component,
    ContentModule1Component,
    DiccionarioComponent,
    ContentEmbeddedComponent,
    PruebaComponent,
    TerminosComponent,
    Resultados1Component,
    AdminHomeComponent,
    DocHomeComponent,
    VisitHomeComponent,
    VistContentComponent,
    AdminContentComponent,
    ExamComponent,
    FeedbackExamComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:AddTokenInterceptor, multi: true},
    LocalStorageService,
    { provide: HTTP_INTERCEPTORS, useClass:RefreshTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
