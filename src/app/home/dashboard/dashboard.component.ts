// En dashboard.component.ts
import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { ChartConfigService } from 'src/app/graficos/chart-config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);
  view: any;
  colorScheme: any;
  single: any[] = [];
  gradient: boolean = false;

  constructor(private chartConfigService: ChartConfigService) {
    this.view = this.chartConfigService.getDefaultChartConfig().view;
    this.colorScheme = this.chartConfigService.getDefaultChartConfig().colorScheme;
    this.single = this.chartConfigService.getSampleChartData();
  }

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [{ title: 'Card 1', cols: 1, rows: 1 }];
      }

      return [{ title: 'Card 1', cols: 2, rows: 1 }];
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
