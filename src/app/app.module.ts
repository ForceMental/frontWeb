import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { LoginComponent } from './iniciar_sesion/login/login.component';
import { RestorePasswordComponent } from './iniciar_sesion/restore-password/restore-password.component';
import { NavegacionComponent } from './home/navegacion/navegacion.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { EjecutivoVentasComponent } from './stats/ejecutivo-ventas/ejecutivo-ventas.component';
import { ClienteComponent } from './stats/cliente/cliente.component';
import { ProductoComponent } from './stats/producto/producto.component';
import { VisitasComponent } from './stats/visitas/visitas.component';
import { VentasSectorizadasComponent } from './stats/ventas-sectorizadas/ventas-sectorizadas.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RestorePasswordComponent,
    NavegacionComponent,
    EjecutivoVentasComponent,
    ClienteComponent,
    ProductoComponent,
    VisitasComponent,
    VentasSectorizadasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
