import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChartConfigService {
  getDefaultChartConfig(): any {
    return {
      view: [700, 400],
      gradient: true,
      showLegend: true,
      showLabels: true,
      isDoughnut: false,
      colorScheme: {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
      },
    };
  }

  getSampleChartData(): any[] {
    return [
      { name: 'Germany', value: 8940000 },
      { name: 'USA', value: 5000000 },
      { name: 'France', value: 7200000 },
      { name: 'UK', value: 6200000 },
    ];
  }
}

