import { Component, Input } from '@angular/core';

@Component({
  selector: 'modulo-base8',
  templateUrl: './modulo-base8.component.html',
  styleUrls: ['./modulo-base8.component.css']
})
export class ModuloBase8Component {
  @Input() tittle: String | undefined;
  @Input() module: String | undefined;

}
