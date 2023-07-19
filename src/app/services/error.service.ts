import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toastr: ToastrService) { }

  msgError(event: HttpErrorResponse) {
    if (event.error.msg) { 
      this.toastr.error(event.error.msg, "Error");
    } else {
      this.toastr.error("Ocurrió un error, comuníquese con el Admin", "Error");
    }
  }

}