import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ropa, TiendaRopaService } from '../../services/tienda-ropa.service';
import { ActivatedRoute } from '@angular/router';
import { SelectedRopaService } from '../../services/tienda-productos-buy';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})
export class RopaComponent implements OnInit {

  ropa: any = {};
 loading: boolean;

  constructor( private router: Router,
               private trService: TiendaRopaService,
               private activatedRoute: ActivatedRoute,
               private selectedRopa: SelectedRopaService ) { 
                 this.loading = true;
                this.activatedRoute.params.subscribe( params => {
                  this.ropa = this.trService.getRopaUnica( params ['id']);
                  this.loading = false;
                });

               }

  ngOnInit(): void {
  }

  volver(){
    this.router.navigate(["/home"]);
  }

  agregarCarrito(){
  this.selectedRopa.addRopa(this.ropa);
  }

}
