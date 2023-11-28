import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedbacks-asks3',
  templateUrl: './feedbacks-asks3.component.html',
  styleUrls: ['./feedbacks-asks3.component.css']
})
export class FeedbacksAsks3Component {

  constructor(private router: Router) {}


  conclusion(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/feedback')[0];

    console.log(baseUrl);

    this.router.navigate([baseUrl, "conclusion", 3]);

  }

}
