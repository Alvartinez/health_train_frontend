import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedbacks-asks2',
  templateUrl: './feedbacks-asks2.component.html',
  styleUrls: ['./feedbacks-asks2.component.css']
})
export class FeedbacksAsks2Component {

  constructor(private router: Router) {}

  conclusion(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/feedback')[0];

    console.log(baseUrl);

    this.router.navigate([baseUrl, "conclusion", 2]);

  }
}
