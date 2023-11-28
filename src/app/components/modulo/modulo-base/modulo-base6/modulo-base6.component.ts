import { Component, Input } from '@angular/core';

@Component({
  selector: 'modulo-base6',
  templateUrl: './modulo-base6.component.html',
  styleUrls: ['./modulo-base6.component.css']
})
export class ModuloBase6Component {
  @Input() tittle: String | undefined;
  @Input() module: String | undefined;

}
