import { Person } from 'src/app/interfaces/persona';
import { LoginComponent } from './../login/login.component';
import { Component } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/persona.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  username: string = "";
  password: string = "";

  constructor(private loginComponent: LoginComponent, private _userService: PersonService, private router:Router, private _errorService: ErrorService) { }


  login() {
     //Validación de datos
    if (this.username == "" || this.password == "") {
      alert("Todos los campos son obligatorios");
      return;
    }

    //Creación del body
    const person: Person = {
      email: this.username,
      password: this.password
    }

    this._userService.login(person).subscribe({
      next: (token) => {
        localStorage.setItem("token", token);
        this.router.navigate(["/user-home"]);
      },

      error: (e: HttpErrorResponse) => {
        this._errorService.msgError(e);
      }
    })
  }

  Registrate() {
    this.loginComponent.login = false;
    this.loginComponent.register = true;
  }

  ngOnInit(): void {
  }
}
