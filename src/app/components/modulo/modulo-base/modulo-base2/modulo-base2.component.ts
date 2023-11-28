import { Component, Input } from '@angular/core';

@Component({
  selector: 'modulo-base2',
  templateUrl: './modulo-base2.component.html',
  styleUrls: ['./modulo-base2.component.css']
})
export class ModuloBase2Component {

  @Input() tittle: String | undefined;
  @Input() module: String | undefined;

}
