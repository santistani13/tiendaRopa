import { Component, OnInit } from '@angular/core';
import { TiendaRopaService } from '../../services/tienda-ropa.service';
import { Router } from '@angular/router';
import { Ropa } from '../../services/tienda-ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ropa : Ropa [] = [];
loading: boolean;

  constructor( private trService: TiendaRopaService,
               private router: Router ) {
this.loading = true;
                }

  ngOnInit(): void {
    this.loading = false;
    this.ropa = this.trService.getRopa();
  }

  verRopa( idx: number ){
    this.router.navigate(["/ropa", idx]);
  }

}
