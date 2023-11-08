import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './iniciar_sesion/login/login.component';
import { RestorePasswordComponent } from './iniciar_sesion/restore-password/restore-password.component';
import { NavegacionComponent } from './home/navegacion/navegacion.component';
import { ClienteComponent } from './stats/cliente/cliente.component';
import { EjecutivoVentasComponent } from './stats/ejecutivo-ventas/ejecutivo-ventas.component';
import { ProductoComponent } from './stats/producto/producto.component';
import { VentasSectorizadasComponent } from './stats/ventas-sectorizadas/ventas-sectorizadas.component';
import { VisitasComponent } from './stats/visitas/visitas.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'restore-password', component: RestorePasswordComponent },
  { path: 'navegacion', component: NavegacionComponent },
  { path:  'cliente', component: ClienteComponent },
  { path:  'ejecutivo-ventas', component: EjecutivoVentasComponent },
  { path:  'productos', component: ProductoComponent },
  { path:  'ventas-sectorizadas', component: VentasSectorizadasComponent },
  { path:  'visitas', component: VisitasComponent },
  

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
