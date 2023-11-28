import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '@rutas/services/error.service';
import { ToastrService } from 'ngx-toastr';
import { Role } from '@rutas/interfaces/rol';
import { inscripcion } from '@rutas/interfaces/inscrito';

@Component({
  selector: 'app-course-body',
  templateUrl: './course-body.component.html',
  styleUrls: ['./course-body.component.css']
})
export class CourseBodyComponent {

  constructor(private router: Router, private _authService: AuthService, private _errorService: ErrorService, private toastr: ToastrService){}

  ingreso:any;
  rol:any;
  id:any;
  id_curso:any;
  numero:any;

  ngOnInit(): void {
    const token:any = localStorage.getItem("x-token");
    const decoded:any = jwt_decode(token);
    const tokenRol:any = decoded.rol;
    this.id = decoded.id;
    this.rol = tokenRol;

    const currentUrl = this.router.url;
    const cursoUrl = currentUrl.split('/course-content')[0];

    const currentPath = cursoUrl;
    const segments = currentPath.split('/');
    const ultimoSegmento = segments[segments.length - 1];

    this.numero = parseInt(ultimoSegmento, 10);

    const inscrito: inscripcion = {
      idCurso: this.numero,
      idPersona: this.id
    }

    this._authService.inscrito(inscrito).subscribe({
      next: (activo) =>{

        if(activo){
          this.ingreso = "Ingresar"
        }else{
          this.ingreso = "Inscribirse"
        }

      },
        error: (e: HttpErrorResponse) => {
          this._errorService.msgError(e);
        }
    });

  }

  retroceder(){
    const currentUrl = this.router.url;
    const baseUrl = currentUrl.split('/visitor')[0];

    if(this.rol === "Visitante"){
      this.router.navigateByUrl(baseUrl+"/visitor/vist-home");

    }

    if(this.rol === "Aprendiz"){
      this.router.navigateByUrl(baseUrl+"/apprentice/user-home");
    }
  }

  ingresar(){

    const currentUrl = this.router.url;
    const baseUrl = currentUrl.split('/visitor')[0];
    const cursoUrl = currentUrl.split('/course-content')[0];

    const currentPath = cursoUrl;
    const segments = currentPath.split('/');
    const ultimoSegmento = segments[segments.length - 1];

    this.numero = parseInt(ultimoSegmento, 10);

    const role: Role = {
      id: this.id,
      rol: "Aprendiz"
    }

    const inscrito: inscripcion = {
      idCurso: this.numero,
      idPersona: this.id
    }


    if(this.rol === "Aprendiz"){
      this.router.navigateByUrl(baseUrl+"/apprentice/courses/course/1");
    }

    if(this.rol === "Visitante"){
      this._authService.changeRol(role).subscribe({
        next: (res) => {

          const newToken = res?.newToken; // Accede al nuevo token

          if (newToken) {
            this._authService.inscripcion(inscrito).subscribe({
              next: () => {
                localStorage.setItem("x-token", newToken);
                this.toastr.success("Inscrito", "Exitoso");
                this.router.navigateByUrl(baseUrl+"/apprentice/courses/course/1");
              },
              error: (e: HttpErrorResponse) => {
                this._errorService.msgError(e);
              }
            });
          } else {
            this.toastr.error("Token no recibido en la respuesta", "Error");
          }
        },
        error: (e: HttpErrorResponse) => {
          this._errorService.msgError(e);
        }
      });

    }

  }

}
