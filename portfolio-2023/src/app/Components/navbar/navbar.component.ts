import { AfterViewInit, Component, HostListener } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent{

  isGlassEffect = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 100;

    this.isGlassEffect = scrollPosition > scrollThreshold;
  }

}
