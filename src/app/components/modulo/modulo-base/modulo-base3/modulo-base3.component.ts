import { Component, Input } from '@angular/core';

@Component({
  selector: 'modulo-base3',
  templateUrl: './modulo-base3.component.html',
  styleUrls: ['./modulo-base3.component.css']
})
export class ModuloBase3Component {

  @Input() tittle: String | undefined;
  @Input() module: String | undefined;

}
