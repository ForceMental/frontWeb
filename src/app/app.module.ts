import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
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
import { AdministracionComponent } from './Administracion/administracion/administracion.component';
import { ClientesComponent } from './Administracion/administracion/clientes/clientes.component';
import { ProductosComponent } from './Administracion/administracion/productos/productos.component';
import { ClienteEditDialogComponent } from './Administracion/administracion/clientes/cliente-edit-dialog/cliente-edit-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common'; // 
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductoEditDialogComponent } from './Administracion/administracion/productos/producto-edit-dialog/producto-edit-dialog.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './Administracion/administracion/clientes/confirm-dialog/confirm-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NuevoClienteDialogComponent } from './Administracion/administracion/clientes/nuevo-cliente-dialog/nuevo-cliente-dialog.component';

@NgModule({
  declarations: [
    // Tus componentes aquí
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
    AdministracionComponent,
    ClientesComponent,
    ProductosComponent,
    ClienteEditDialogComponent,
    ProductoEditDialogComponent,
    ConfirmDialogComponent,
    NuevoClienteDialogComponent,
    // No incluyas módulos en declarations
  ],
  imports: [
    // Tus módulos aquí
    CommonModule, 
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
    MatMenuModule,
    NgxChartsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
  

})
export class AppModule { }
