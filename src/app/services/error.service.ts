import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

    msgError( event: HttpErrorResponse ) {
    if (event.error.msg) {
      console.log(event.error.msg);
    } else {
      alert("¡Ups! Se ocurrio un error, comuniquese con el administrador");
    }
  }

  constructor() { }
}