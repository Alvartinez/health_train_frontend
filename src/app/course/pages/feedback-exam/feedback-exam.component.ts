import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '@rutas/services/error.service';
import jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feedback-exam',
  templateUrl: './feedback-exam.component.html',
  styleUrls: ['./feedback-exam.component.css']
})
export class FeedbackExamComponent {

  constructor(private router: Router, private toastr: ToastrService) {}

  fin(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/exam')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);

    this.toastr.success("Has realizado exitosamente la evaluación", "Exitoso");

  }

}
