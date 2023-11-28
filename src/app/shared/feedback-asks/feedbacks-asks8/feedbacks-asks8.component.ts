import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedbacks-asks8',
  templateUrl: './feedbacks-asks8.component.html',
  styleUrls: ['./feedbacks-asks8.component.css']
})
export class FeedbacksAsks8Component {

  constructor(private router: Router) {}


  conclusion(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/feedback')[0];

    console.log(baseUrl);

    this.router.navigate([baseUrl, "conclusion", 8]);

  }

}
