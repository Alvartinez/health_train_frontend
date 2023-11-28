import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-asks',
  templateUrl: './feedback-asks.component.html',
  styleUrls: ['./feedback-asks.component.css']
})
export class FeedbackAsksComponent {

  tituloModulo: string = "HISTORIA Y EVOLUCIÓN";
  
  constructor(private router: Router) {}


  conclusion(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/feedback')[0];

    console.log(baseUrl);

    this.router.navigate([baseUrl, "conclusion", 1]);

  }

}
