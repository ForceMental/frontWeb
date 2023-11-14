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
  showChart = false; // Agregado para manejar la visibilidad del gráfico

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
    this.isMenuOpen = false;
    // No estoy seguro de qué hacer aquí, depende de cómo se maneje el gráfico en tu aplicación
    // Puedes llamar a un método del componente del gráfico si es necesario.
  }

  toggleSidenavButton() {
    this.drawer.toggle();
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Nuevo método para mostrar/ocultar el gráfico
  toggleChartVisibility(): void {
    this.showChart = !this.showChart;
    // Lógica adicional para manejar la visibilidad del gráfico
    // Puedes llamar a métodos específicos o hacer otras acciones según tus necesidades.
  }
}
