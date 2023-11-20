import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CircularChartService } from 'src/app/graficos/circular-chart.service';
import { VerticalBarChartService } from 'src/app/graficos/vertical-bar-chart.service';
import { PieChartService } from 'src/app/graficos/pie-chart.service';
import { NumberCardService } from 'src/app/graficos/number-card.service';
import { MapChartService } from 'src/app/graficos/map-chart.service';
import { HeatMapService } from 'src/app/graficos/heat-map.service';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  view: any;
  colorScheme: any;

  grafico1: any[] = [];
  grafico2: any[] = [];
  grafico3: any[] = [];
  grafico4: any[] = [];
  grafico5: any[] = [];
  grafico6: any[] = [];

  

  

  

  // visible
  
  circularChartVisible: boolean = true;
  barChartVisible: boolean = true;
  pieChartVisible: boolean = true;
  numberChartVisible: boolean = true;
  mapChartVisible: boolean = true;
  heatMapChartVisible: boolean = true;
  



  gradient: boolean = false; 
  showLegend:boolean = true;
  showLabels: boolean = true;
  cardColor: string = '#232837';
  showChart: boolean = true;
  isDoughnut: boolean = true;
  legendPosition: LegendPosition = 'below' as LegendPosition;

  
  
  showXAxis: boolean = true;  
  showXAxisLabel: boolean = true; 
  showYAxisLabel: boolean = true;
  showYAxis : boolean = true;
  xAxisLabel: string = '';
  yAxisLabel: string = '';
  animations: boolean = true;
  legend: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;

  multi: any[] = [];
  
  
  labelFormatting(c: any) {
    return `${(c.label)} Population`;
  }
  

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private circularChartService: CircularChartService,
    private verticalBarChartService: VerticalBarChartService,
    private pieChartService: PieChartService,
    private numberCardService: NumberCardService,
    private mapChartService: MapChartService,
    private heatMapChartService: HeatMapService,
  ) {}

  ngOnInit(): void { // circular-chart.service.ts 
    this.view = this.circularChartService.getDefaultChartConfig().view;
    this.colorScheme = this.circularChartService.getDefaultChartConfig().colorScheme;

    this.circularChartService.getSampleChartData().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        this.grafico1 = data;
        console.log('Datos para el gráfico circular:', this.grafico1);
      },
      error: (error) => {
        console.error('Error obteniendo los datos:', error);
      }
    });
      

      // vertical-bar-chart.service.ts

    this.verticalBarChartService.getVerticalBarData().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        this.grafico2 = data;
        console.log('Datos para el gráfico de barras:', this.grafico2);
      },
      error: (error) => {
        console.error('Error obteniendo los datos:', error);
      }
    });

    

    // pie-chart.service.ts

    this.pieChartService.getPieData().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        this.grafico3 = data;
        console.log('Datos para el gráfico de pie:', this.grafico3);
      },
      error: (error) => {
        console.error('Error obteniendo los datos del gráfico de pie:', error);
      }
    });
    
    


// number-chart.service.ts
    this.numberCardService.getNumberCardData().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        this.grafico4 = data;
        console.log('Datos para el gráfico numerico:', this.grafico4);
      },
      error: (error) => {
        console.error('Error obteniendo los datos del NumberCard:', error);
      }
    });

    

    // map-chart.service.ts

    this.mapChartService.getMapData().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        this.grafico5 = data;  // Asigna los datos a una propiedad diferente, no al servicio
        console.log('Datos para el gráfico de mapas:', this.grafico5);
          
      },
      error: (error) => {
        console.error('Error obteniendo los datos:', error);
      }
    });

    

    // heat-chart.service.ts

    this.heatMapChartService.getHeatMapData().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        this.grafico6 = data;
        console.log('Datos para el gráfico de calor:', this.grafico6);
      },
      error: (error) => {
        console.error('Error obteniendo los datos:', error);
      }
    });

    
    

  }

  

  


  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Total de Visitas', cols: 1, rows: 1, circularChartVisible: true, barChartVisible: false, pieChartVisible: false, numberChartVisible: false, mapChartVisible: false, heatMapChartVisible: false},
          { title: 'Ventas de Productos', cols: 1, rows: 1, circularChartVisible: false, barChartVisible: true, pieChartVisible: false, numberChartVisible: false, mapChartVisible: false, heatMapChartVisible: false },
          { title: 'Tipo de Visitas', cols: 1, rows: 1, circularChartVisible: false, barChartVisible: false, pieChartVisible: true, numberChartVisible: false, mapChartVisible: false, heatMapChartVisible: false },
          { title: 'Conteo de Ventas Ejecutivo', cols: 1, rows: 1, circularChartVisible: false, barChartVisible: false, pieChartVisible: false, numberChartVisible: true, mapChartVisible: false, heatMapChartVisible: false },
          { title: 'Grafico de Mapas', cols: 1, rows: 1, circularChartVisible: false, barChartVisible: false, pieChartVisible: false, numberChartVisible: false, mapChartVisible: true, heatMapChartVisible: false  },
          { title: 'Grafico de Calor', cols: 1, rows: 1, circularChartVisible: false, barChartVisible: false, pieChartVisible: false, numberChartVisible: false, mapChartVisible: false, heatMapChartVisible: true  },
        ];
      }

      return [
        { title: 'Total de Visitas', cols: 2, rows: 1, circularChartVisible: true, barChartVisible: false, pieChartVisible: false, numberChartVisible: false, mapChartVisible: false, heatMapChartVisible: false},
          { title: 'Ventas de Productos', cols: 2, rows: 1, circularChartVisible: false, barChartVisible: true, pieChartVisible: false, numberChartVisible: false, mapChartVisible: false, heatMapChartVisible: false },
          { title: 'Tipo de Visitas', cols: 2, rows: 1, circularChartVisible: false, barChartVisible: false, pieChartVisible: true, numberChartVisible: false, mapChartVisible: false, heatMapChartVisible: false },
          { title: 'Conteo de Ventas Ejecutivo', cols: 2, rows: 1, circularChartVisible: false, barChartVisible: false, pieChartVisible: false, numberChartVisible: true, mapChartVisible: false, heatMapChartVisible: false },
          { title: 'Grafico de Mapas', cols: 2, rows: 1, circularChartVisible: false, barChartVisible: false, pieChartVisible: false, numberChartVisible: false, mapChartVisible: true, heatMapChartVisible: false  },
          { title: 'Grafico de Calor', cols: 2, rows: 1, circularChartVisible: false, barChartVisible: false, pieChartVisible: false, numberChartVisible: false, mapChartVisible: false, heatMapChartVisible: true  },
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

  toggleSidenavAndMenu(menuItem: string): void {
    console.log(`Menú seleccionado: ${menuItem}`);

    
  }
}
