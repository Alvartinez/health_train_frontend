import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedbacks-asks9',
  templateUrl: './feedbacks-asks9.component.html',
  styleUrls: ['./feedbacks-asks9.component.css']
})
export class FeedbacksAsks9Component {

  constructor(private router: Router) {}


  conclusion(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/feedback')[0];

    console.log(baseUrl);

    this.router.navigate([baseUrl, "conclusion", 9]);

  }

}
