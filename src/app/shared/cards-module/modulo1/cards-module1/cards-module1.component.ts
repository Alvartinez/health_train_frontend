import { Component, Input } from '@angular/core';

@Component({
  selector: 'cards-module1',
  templateUrl: './cards-module1.component.html',
  styleUrls: ['./cards-module1.component.css']
})
export class CardsModule1Component {

  @Input() tituloCarta: string | undefined;
  @Input() urlRecurso: string | undefined;

}
