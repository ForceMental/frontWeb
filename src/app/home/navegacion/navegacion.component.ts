import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent {
  @ViewChild('drawer') drawer!: MatSidenav;
  isMenuOpen = false;

  isHandset$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  menuOpened(isOpen: boolean) {
    this.isMenuOpen = isOpen;
  }
  toggleSidenavAndMenu() {
    this.drawer.toggle();
    this.isMenuOpen = false; // Oculta el menú al hacer clic en un elemento de la lista
  }
  
  toggleSidenavButton() {
    this.drawer.toggle();
    this.isMenuOpen = !this.isMenuOpen; // Alterna la visibilidad del menú
  }
}
