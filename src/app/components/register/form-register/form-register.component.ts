import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Person } from 'src/app/interfaces/persona';
import { ErrorService } from 'src/app/services/error.service';
import { PersonService } from 'src/app/services/persona.service';

@Component({
  selector: 'form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  username: string = "";
  email: string = "";
  password: string = "";
  passwordVerified: string = "";
  loading: boolean = false;

  constructor(private toastr: ToastrService, private _personService:PersonService, private router:Router, private _errorService: ErrorService){}

  registro() {
    //Validación de datos
    if (this.username == "" || this.email == "" || this.password == "" || this.passwordVerified == "") {
      this.toastr.error("Todos los campos son obligatorios", "Error");
      return;
    }
    
    // Verificación del patrón del correo electrónico
    const domainPattern = /@\w+(\.\w{2,3})+$/i; 
    if (!domainPattern.test(this.email)) {
      this.toastr.error("El correo electrónico debe tener un formato válido", "Error");
      return;
    }
        
    //Verificación del Password
    if (this.password != this.passwordVerified) {
      this.toastr.error("Correo electrónico o contraseña inválida", "Error");
      return;
    }
        
    //Se crea el body
    const user: Person = {
     nombre: this.username,
     email: this.email,
     password: this.password,
     estado: true
    }

    this.loading = true;

    this._personService.signIn(user).subscribe({
      next: () => {
        this.loading = false;
        this.toastr.success("El usuario fue registrado exitosamente", "Usuario Registrado");
        this.router.navigate(["/login"]);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this.vaciarCampos();
        this._errorService.msgError(e);
      },
      complete: () => console.info("complete")
    });

  }

  //Campos vacios
  vaciarCampos() {
    this.username = "";
    this.email = "";
    this.password = "";
    this.passwordVerified = "";
  }

}
