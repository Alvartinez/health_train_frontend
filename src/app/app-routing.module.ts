import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/login/login/login.component';
import { UserHomeComponent } from './components/user-home/user-home/user-home.component';
import { RegisterComponent } from './components/register/register/register.component';
import { AuthGuard } from './utils/auth.guard';
import { DescriptionCourseComponent } from './components/description-course/description-course/description-course.component';
import { CourseContentComponent } from './components/course-content/course-content.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
    {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'user-home',
    component: UserHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'description-course',
    component: DescriptionCourseComponent
  },
  {
    path: "course-content",
    component: CourseContentComponent, 
    canActivate:[AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
