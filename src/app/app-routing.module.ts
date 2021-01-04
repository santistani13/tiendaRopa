import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';
import { HomeComponent } from './components/home/home.component';
import { RopaComponent } from './components/ropa/ropa.component';
import { SearchComponent } from '../../src/app/componenets/search/search.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ropa/:id', component: RopaComponent },
  { path: 'search/:termino', component: SearchComponent },
  { path: 'carrito-compras', component: CarritoComprasComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
