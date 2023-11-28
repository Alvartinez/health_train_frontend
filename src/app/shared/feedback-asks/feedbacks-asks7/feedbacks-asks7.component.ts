import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedbacks-asks7',
  templateUrl: './feedbacks-asks7.component.html',
  styleUrls: ['./feedbacks-asks7.component.css']
})
export class FeedbacksAsks7Component {

  constructor(private router: Router) {}


  conclusion(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/feedback')[0];

    console.log(baseUrl);

    this.router.navigate([baseUrl, "conclusion", 7]);

  }

}
