import { Person } from 'src/app/interfaces/persona';
import { Component } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/persona.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  email: string = "";
  password: string = "";
  loading: boolean = false;

  constructor(private toastr: ToastrService, private _personService:PersonService, private router:Router, private _errorService: ErrorService){}

  login() {
     //Validación de datos
    if (this.email == "" || this.password == "") {
      this.toastr.error("Todos los campos son obligatorios", "Error");
      return;
    }

    // Verificación del patrón del correo electrónico
    const domainPattern = /@\w+(\.\w{2,3})+$/i; 
    if (!domainPattern.test(this.email)) {
      this.toastr.error("El correo electrónico debe tener un formato válido", "Error");
      return;
    }

    //Creación del body
    const user: Person = {
      email: this.email,
      password: this.password
    }

    this.loading = true;

    this._personService.login(user).subscribe({
      next: (token) => {
        this.loading = false;
        this.router.navigate(["/user-home"]);
        localStorage.setItem("token", token);
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
    this.email = "";
    this.password = "";
  }

}
