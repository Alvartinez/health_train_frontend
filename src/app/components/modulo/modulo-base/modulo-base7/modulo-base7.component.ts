import { Component, Input } from '@angular/core';

@Component({
  selector: 'modulo-base7',
  templateUrl: './modulo-base7.component.html',
  styleUrls: ['./modulo-base7.component.css']
})
export class ModuloBase7Component {
  @Input() tittle: String | undefined;
  @Input() module: String | undefined;

}
