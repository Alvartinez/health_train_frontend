import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedbacks-asks6',
  templateUrl: './feedbacks-asks6.component.html',
  styleUrls: ['./feedbacks-asks6.component.css']
})
export class FeedbacksAsks6Component {

  constructor(private router: Router) {}


  conclusion(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/feedback')[0];

    console.log(baseUrl);

    this.router.navigate([baseUrl, "conclusion", 6]);

  }

}
