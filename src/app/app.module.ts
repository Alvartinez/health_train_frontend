import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login/login.component';
import { HomeComponent } from './components/home/home/home.component';
import { SectionHomeComponent } from './components/home/section-home/section-home.component';
import { SectionCardsComponent } from './components/home/section-cards/section-cards.component';
import { CardCourseComponent } from './shared/card-course/card-course.component';
import { SectionNewsComponent } from './components/home/section-news/section-news.component';
import { FooterColaborationsComponent } from './shared/footer-colaborations/footer-colaborations.component';
import { ParticlesComponent } from './components/login/particles/particles.component';
import { FormLoginComponent } from './components/login/form-login/form-login.component';
import { FormRegisterComponent } from './components/login/form-register/form-register.component';
import { UserHomeComponent } from './components/user-home/user-home/user-home.component';
import { UserContentComponent } from './components/user-home/user-content/user-content.component';
import { UserNavbarComponent } from './components/user-home/user-navbar/user-navbar.component';

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
    UserNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
