import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedbacks-asks10',
  templateUrl: './feedbacks-asks10.component.html',
  styleUrls: ['./feedbacks-asks10.component.css']
})
export class FeedbacksAsks10Component {

  constructor(private router: Router) {}


  conclusion(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/feedback')[0];

    console.log(baseUrl);

    this.router.navigate([baseUrl, "conclusion", 10]);

  }

}
