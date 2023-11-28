import { Component, Input } from '@angular/core';

@Component({
  selector: 'modulo-base9',
  templateUrl: './modulo-base9.component.html',
  styleUrls: ['./modulo-base9.component.css']
})
export class ModuloBase9Component {
  @Input() tittle: String | undefined;
  @Input() module: String | undefined;

}
