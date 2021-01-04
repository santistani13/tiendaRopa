import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TiendaRopaService } from 'src/app/services/tienda-ropa.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
ropa: any [] = [];
  constructor( private activatedRoute: ActivatedRoute,
               private trService: TiendaRopaService,
               private router: Router ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => { 
      this.ropa = this.trService.getRopaBuscada( params [ 'termino' ] );
     } )
  }
  verRemera(i: number){
    this.router.navigate( [ '/ropa', i ] );

  }

}
