import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-module',
  templateUrl: './card-module.component.html',
  styleUrls: ['./card-module.component.css']
})
export class CardModuleComponent {
  @Input() modulo: string | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() urlRouter: string | undefined;

}
