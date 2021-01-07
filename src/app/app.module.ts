import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RopaComponent } from './components/ropa/ropa.component';
import { LoadingComponent } from './components/loading/loading.component';
import '@angular/compiler';

import { TiendaRopaService } from './services/tienda-ropa.service';
import { SearchComponent } from './componenets/search/search.component';
import { SelectedRopaService } from '../../src/app/services/tienda-productos-buy';
import { PagoRopaComponent } from './components/pago-ropa/pago-ropa.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarritoComprasComponent,
    NavbarComponent,
    RopaComponent,
    LoadingComponent,
    SearchComponent,
    PagoRopaComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [
    TiendaRopaService,
    SelectedRopaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
