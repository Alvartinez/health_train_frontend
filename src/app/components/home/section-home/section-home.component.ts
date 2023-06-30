import { Component } from '@angular/core';

@Component({
  selector: 'app-section-home',
  templateUrl: './section-home.component.html',
  styleUrls: ['./section-home.component.css']
})
export class SectionHomeComponent {

  openHamburguesa: boolean = true;
  closeHamburguesa: boolean = false;
  menuHamburguesa: boolean = false;

  hamburguesa() {
    if (this.menuHamburguesa == false) {
      this.menuHamburguesa = true;
      this.openHamburguesa = false;
      this.closeHamburguesa = true;
    } else {
      this.menuHamburguesa = false;
      this.openHamburguesa = true;
      this.closeHamburguesa = false;
    }
  }

}
