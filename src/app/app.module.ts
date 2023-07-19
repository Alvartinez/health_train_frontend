//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login/login.component';
import { HomeComponent } from './components/home/home/home.component';
import { SectionHomeComponent } from './components/home/section-home/section-home.component';
import { SectionCardsComponent } from './components/home/section-cards/section-cards.component';
import { CardCourseComponent } from './shared/card-course/card-course.component';
import { SectionNewsComponent } from './components/home/section-news/section-news.component';
import { FooterColaborationsComponent } from './shared/footer-colaborations/footer-colaborations.component';
import { ParticlesComponent } from './shared/particles/particles.component';
import { FormLoginComponent } from './components/login/form-login/form-login.component';
import { FormRegisterComponent } from './components/register/form-register/form-register.component';
import { UserHomeComponent } from './components/user-home/user-home/user-home.component';
import { UserContentComponent } from './components/user-home/user-content/user-content.component';
import { UserNavbarComponent } from './shared/user-navbar/user-navbar.component';
import { RegisterComponent } from './components/register/register/register.component';
import { LoadingComponent } from './shared/loading/loading.component';

//Intercetor
import { AddTokenInterceptor } from './utils/add-token.interceptor';
import { DescriptionCourseComponent } from './components/description-course/description-course/description-course.component';
import { CourseBodyComponent } from './shared/course-body/course-body.component';
import { CourseContentComponent } from './components/course-content/course-content.component';


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
    CourseBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:AddTokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
