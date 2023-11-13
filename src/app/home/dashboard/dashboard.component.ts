import { Component, inject, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { CircularChartService } from 'src/app/graficos/circular-chart.service';
import { VerticalBarChartService } from 'src/app/graficos/vertical-bar-chart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  view: any;
  colorScheme: any;
  single: any[] = [];
  barChartData: any[] = []; // Datos para el gráfico de barras
  barChartConfig: any; // Configuración para el gráfico de barras
  gradient: boolean = false;
  showChart: boolean = false;
  circularChartVisible: boolean = true; // Puedes establecer el valor inicial según tus necesidades
  barChartVisible: boolean = true; // Puedes establecer el valor inicial según tus necesidades

  constructor(
    private circularChartService: CircularChartService,
    private verticalBarChartService: VerticalBarChartService
  ) {}

  ngOnInit(): void {
    // Configuración para el gráfico circular
    this.view = this.circularChartService.getDefaultChartConfig().view;
    this.colorScheme = this.circularChartService.getDefaultChartConfig().colorScheme;
    this.single = this.circularChartService.getSampleChartData();

    // Configuración para el gráfico de barras
    this.barChartData = this.verticalBarChartService.getSampleChartData();
    this.barChartConfig = this.verticalBarChartService.getDefaultChartConfig();

    // Agrega el siguiente código para imprimir los datos en la consola
    console.log('Datos para el gráfico de barras:', this.barChartData);
    console.log('Configuración para el gráfico de barras:', this.barChartConfig);
  }

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Total de Visitas', cols: 1, rows: 1, circularChartVisible: true, barChartVisible: false },
          { title: 'Ventas de Productos', cols: 1, rows: 1, circularChartVisible: false, barChartVisible: true },
        ];
      }

      return [
        { title: 'Total de Visitas', cols: 2, rows: 1, circularChartVisible: true, barChartVisible: false },
        { title: 'Ventas de Productos', cols: 2, rows: 1, circularChartVisible: false, barChartVisible: true },
      ];
    })
  );

  onSelect(event: any): void {
    console.log('Item clicked', event);
  }

  onActivate(event: any): void {
    console.log('Activate', event);
  }

  onDeactivate(event: any): void {
    console.log('Deactivate', event);
  }
}
