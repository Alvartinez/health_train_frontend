import { Person } from 'src/app/interfaces/persona';
import { Component } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/persona.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from 'jwt-decode';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  username: string = "";
  password: string = "";
  loading: boolean = false;

  constructor(private toastr: ToastrService,private _authService: AuthService, private _personService:PersonService, private router:Router, private _errorService: ErrorService){}

  login() {
     //Validación de datos
    if (this.username == "" || this.password == "") {
      this.toastr.error("Todos los campos son obligatorios", "Error");
      return;
    }

    //Creación del body
    const user: Person = {
      username: this.username,
      password: this.password
    }

    this.loading = true;

    this._authService.login(user).subscribe({
      next: (res:any) => {
        localStorage.setItem("x-token", res["token"]);
        const decodedToken: any = jwt_decode(res["token"]);

        let rol: string;

        if (decodedToken.rol && decodedToken.rol.length > 0) {
          rol = decodedToken.rol;
        } else {
          console.log("No se encontró información del rol en el token.");
          this.loading = false;
          localStorage.removeItem("x-token");
          return;
        }

        this._personService.getPerson().subscribe({
          next: (data)=>{
            this.loading = false;

            if(rol === "Aprendiz"){
              this.router.navigate(["healthtrain","users","apprentice", res["redirectTo"]]);
              this.toastr.success("Bienvenid@ "+data.nombre, " Éxitoso");

            }else if(rol === "Docente"){
              this.router.navigate(["healthtrain","users",'teacher', res["redirectTo"]]);
              this.toastr.success("Bienvenid@ "+data.nombre, " Éxitoso");

            }else if(rol === "Admin"){
              this.router.navigate(["healthtrain","users", 'admin', res["redirectTo"]]);
              this.toastr.success("Bienvenid@ "+data.nombre, " Éxitoso");

            }else if(rol === "Visitante"){
              this.router.navigate(["healthtrain","users", 'visitor', res["redirectTo"]]);
              this.toastr.success("Bienvenid@ "+data.nombre, " Éxitoso");

            }
            
          },
          error: (e: HttpErrorResponse) => {
            this.loading = false;
            this.vaciarCampos();
            localStorage.removeItem("x-token");
            this._errorService.msgError(e);
          }          
        });
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this.vaciarCampos();
        this._errorService.msgError(e);
      }
    });
  }

  //Campos vacios
  vaciarCampos() {
    this.username = "";
    this.password = "";
  }

  register(){
    this.router.navigate(["healthtrain","register"]);
  }

}
