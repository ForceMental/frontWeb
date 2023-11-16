
import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';  // Añade esta línea para importar Observable
import { CircularChartService } from 'src/app/graficos/circular-chart.service';
import { VerticalBarChartService } from 'src/app/graficos/vertical-bar-chart.service';
import { PieChartService } from 'src/app/graficos/pie-chart.service';
import { NumberCardService } from 'src/app/graficos/number-card.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  view: any;
  colorScheme: any;
  single: any[] = [];
  barChartData: any[] = [];
  barChartConfig: any;
  pieChartData: any[] = [];
  numberCardData$: Observable<any>;  // Utiliza el símbolo $ para indicar que es un Observable
  numberCardConfig: any;
  cardColor: string = '#232837';
  gradient: boolean = false;
  showChart: boolean = false;
  circularChartVisible: boolean = true;
  barChartVisible: boolean = true;
  pieChartVisible: boolean = true;
  numberCardChartVisible: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private circularChartService: CircularChartService,
    private verticalBarChartService: VerticalBarChartService,
    private pieChartService: PieChartService,
    private numberCardService: NumberCardService
  ) {
    this.numberCardData$ = this.numberCardService.getNumberCardData();
  }
  

  ngOnInit(): void {
    this.view = this.circularChartService.getDefaultChartConfig().view;
    this.colorScheme = this.circularChartService.getDefaultChartConfig().colorScheme;
    this.circularChartService.getSampleChartData().subscribe(
      (data) => {
        this.single = data;
      },
      (error) => {
        console.error('Error obteniendo los datos:', error);
      }
    );

    this.verticalBarChartService.getSampleChartData().subscribe(
      (data) => {
        this.barChartData = data;
        console.log(this.barChartData);
      },
      (error) => {
        console.error('Error obteniendo los datos:', error);
      }
    );
    this.barChartConfig = this.verticalBarChartService.getDefaultChartConfig();

    this.pieChartService.getPieChartData().subscribe(
      (data) => {
        this.pieChartData = data;
      },
      (error) => {
        console.error('Error obteniendo los datos del gráfico de pie:', error);
      }
    );

    this.numberCardConfig = this.numberCardService.getNumberCardConfig();
    this.numberCardData$ = this.numberCardService.getNumberCardData();  // Usa el observable

    console.log('Datos para el gráfico de barras:', this.barChartData);
    console.log('Configuración para el gráfico de barras:', this.barChartConfig);
    console.log('Datos para el gráfico de pie:', this.pieChartData);
    console.log('Datos para el NumberCard:', this.numberCardData$);
  }

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Total de Visitas', cols: 1, rows: 1, circularChartVisible: true, barChartVisible: false, pieChartVisible: false, numberCardVisible: false },
          { title: 'Ventas de Productos', cols: 1, rows: 1, circularChartVisible: false, barChartVisible: true, pieChartVisible: false, numberCardVisible: false },
          { title: 'Tipo de Visitas', cols: 1, rows: 1, circularChartVisible: false, barChartVisible: false, pieChartVisible: true, numberCardVisible: true },
          { title: 'Venta de Productos por Ejecutivos', cols: 1, rows: 1, circularChartVisible: false, barChartVisible: false, pieChartVisible: false, numberCardVisible: true },
        ];
      }
  
      return [
        { title: 'Total de Visitas', cols: 2, rows: 1, circularChartVisible: true, barChartVisible: false, pieChartVisible: false, numberCardVisible: false },
        { title: 'Ventas de Productos', cols: 2, rows: 1, circularChartVisible: false, barChartVisible: true, pieChartVisible: false, numberCardVisible: false },
        { title: 'Tipo de Visitas', cols: 2, rows: 1, circularChartVisible: false, barChartVisible: false, pieChartVisible: true, numberCardVisible: true },
        { title: 'Venta de Productos por Ejecutivos', cols: 2, rows: 1, circularChartVisible: false, barChartVisible: false, pieChartVisible: false, numberCardVisible: true },
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
