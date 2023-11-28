import { Component, Input } from '@angular/core';

@Component({
  selector: 'modulo-base10',
  templateUrl: './modulo-base10.component.html',
  styleUrls: ['./modulo-base10.component.css']
})
export class ModuloBase10Component {
  @Input() tittle: String | undefined;
  @Input() module: String | undefined;

}
