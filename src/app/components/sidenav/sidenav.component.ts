import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  isMenuOpen = true;
  contenMargin = 270;

  onToolbarMenuToggle(){
    console.log('Abre ', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contenMargin = 70;
    } else {
      this.contenMargin = 270;
    }
  }

  }


