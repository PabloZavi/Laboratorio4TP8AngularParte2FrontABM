import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FuncionesService } from 'src/app/servicios/funciones.service';
import { Instrumento } from 'src/entidades/Instrumento';

@Component({
  selector: 'app-detalle-instrumento',
  templateUrl: './detalle-instrumento.component.html',
  styleUrls: ['./detalle-instrumento.component.css']
})
export class DetalleInstrumentoComponent implements OnInit {

  instrumento: Instrumento | undefined;

  constructor(private activatedRoute: ActivatedRoute, private servicio: FuncionesService) {

  }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params =>{
      this.servicio.getInstrumentoEnBaseDatosXId(params['id'])
      .subscribe(instrummentoEncontrado => {
        this.instrumento = instrummentoEncontrado as Instrumento;
      });
    })

  }

}
