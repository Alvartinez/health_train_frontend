import { Component, Input } from '@angular/core';

@Component({
  selector: 'modulo-base',
  templateUrl: './modulo-base.component.html',
  styleUrls: ['./modulo-base.component.css']
})
export class ModuloBaseComponent {

  @Input() tittle: String | undefined;
  @Input() module: String | undefined;

}
