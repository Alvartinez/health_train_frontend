import { Component, Input } from '@angular/core';

@Component({
  selector: 'modulo-base5',
  templateUrl: './modulo-base5.component.html',
  styleUrls: ['./modulo-base5.component.css']
})
export class ModuloBase5Component {
  @Input() tittle: String | undefined;
  @Input() module: String | undefined;

}
