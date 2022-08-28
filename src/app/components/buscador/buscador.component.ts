import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionesService } from 'src/app/servicios/funciones.service';
import { Instrumento } from 'src/entidades/Instrumento';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  instrumentosBusqueda: Instrumento[] = [];
  termino: string = "";

  constructor(private activatedRoute: ActivatedRoute, private servicio: FuncionesService, private router: Router) { }

  ngOnInit(): void {

    /* this.activatedRoute.params.subscribe(params=>{
      this.termino = params['termino'];
      //this.instrumentosBusqueda = this.servicio.buscarInstrumentos(params['termino']);
    });
    
    this.servicio.getInstrumentossBusquedaFromDataBase(this.termino)
      .subscribe(data => {
        console.log(data);
        for (let instrumento in data) {
          console.log(data[instrumento]);
          this.instrumentosBusqueda.push(data[instrumento]);
          
        }
      }); */

    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.servicio.getInstrumentossBusquedaFromDataBase(this.termino)
        .subscribe(data => {
          this.instrumentosBusqueda = [];
          for (let inst in data) {
            this.instrumentosBusqueda.push(data[inst]);
          }
        });
    });

  }

}
