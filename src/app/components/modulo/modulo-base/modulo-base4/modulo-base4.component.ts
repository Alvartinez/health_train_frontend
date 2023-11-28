import { Component, Input } from '@angular/core';

@Component({
  selector: 'modulo-base4',
  templateUrl: './modulo-base4.component.html',
  styleUrls: ['./modulo-base4.component.css']
})
export class ModuloBase4Component {

  @Input() tittle: String | undefined;
  @Input() module: String | undefined;

}
