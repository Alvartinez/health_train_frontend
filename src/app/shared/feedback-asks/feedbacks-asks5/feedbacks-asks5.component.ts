import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedbacks-asks5',
  templateUrl: './feedbacks-asks5.component.html',
  styleUrls: ['./feedbacks-asks5.component.css']
})
export class FeedbacksAsks5Component {

  constructor(private router: Router) {}


  conclusion(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/feedback')[0];

    console.log(baseUrl);

    this.router.navigate([baseUrl, "conclusion", 5]);

  }

}
