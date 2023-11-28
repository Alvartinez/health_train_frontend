import { Component, Input } from '@angular/core';

@Component({
  selector: 'content-embedded',
  templateUrl: './content-embedded.component.html',
  styleUrls: ['./content-embedded.component.css']
})
export class ContentEmbeddedComponent {

  @Input() link: String | undefined;

}
