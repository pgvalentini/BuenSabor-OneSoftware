import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsumoAdminComponent } from './components/admin/insumo-admin/insumo-admin.component';
import { HomeComponent } from './components/home/home.component';
import { InsumoComponent } from './components/insumo/insumo.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: 'insumos', component: InsumoComponent },
  { path: 'insumo-admin/:id', component: InsumoAdminComponent },
  { path: 'productos', component: ProductoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
