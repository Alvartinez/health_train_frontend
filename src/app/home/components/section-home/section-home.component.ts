import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '@rutas/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-section-home',
  templateUrl: './section-home.component.html',
  styleUrls: ['./section-home.component.css']
})
export class SectionHomeComponent {

  openHamburguesa: boolean = true;
  closeHamburguesa: boolean = false;
  menuHamburguesa: boolean = false;

  constructor(private router:Router, private _authService: AuthService, private location: Location){}

   url = this.location.path();

  login(){
    const token:any = localStorage.getItem("x-token");
    const userRole = this._authService.obtenerRolDelToken(token);

    console.log(this.url);

    if(token){

      if(userRole === "Aprendiz"){
        this.router.navigate(["Services/healthtrain","users","apprentice", "user-home"]);
      }

      if(userRole === "Docente"){
        this.router.navigate(["Services/healthtrain","users","apprentice", "doc-home"]);
      }

      if(userRole === "Admin"){
        this.router.navigate(["Services/healthtrain","users","apprentice", "admin-home"]);
      }

      if(userRole === "Visitante"){
        this.router.navigate(["Services/healthtrain","users","apprentice", "vist-home"]);
      }

    }else{
      this.router.navigate(["Services/healthtrain","login"]);
    }

  }

  register(){
    const token:any = localStorage.getItem("x-token");
    const userRole = this._authService.obtenerRolDelToken(token);

    console.log(this.url);

    if(token){

      if(userRole === "Aprendiz"){
        this.router.navigate(["Services/healthtrain","users","apprentice", "user-home"]);
      }

      if(userRole === "Docente"){
        this.router.navigate(["Services/healthtrain","users","apprentice", "doc-home"]);
      }

      if(userRole === "Admin"){
        this.router.navigate(["Services/healthtrain","users","apprentice", "admin-home"]);
      }

      if(userRole === "Visitante"){
        this.router.navigate(["Services/healthtrain","users","apprentice", "vist-home"]);
      }

    }else{
      this.router.navigate(["Services/healthtrain","register"]);
    }

  }

}
