import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedbacks-asks4',
  templateUrl: './feedbacks-asks4.component.html',
  styleUrls: ['./feedbacks-asks4.component.css']
})
export class FeedbacksAsks4Component {

  constructor(private router: Router) {}


  conclusion(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/feedback')[0];

    console.log(baseUrl);

    this.router.navigate([baseUrl, "conclusion", 4]);

  }

}
