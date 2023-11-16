// number-card.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NumberCardService {
  getNumberCardConfig(): any {
    return {
      view: [700, 400],
      scheme: {
        domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
      },
      gradient: false,
      animations: true,
    };
  }

  getNumberCardData(): Observable<any> {  // Asegúrate de devolver un Observable
    return of({
      value: 75,
      label: 'Ejemplo',
      color: '#5AA454',
    });
  }
}
