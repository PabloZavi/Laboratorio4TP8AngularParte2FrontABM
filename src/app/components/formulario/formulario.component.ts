import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FuncionesService } from 'src/app/servicios/funciones.service';
import { Instrumento } from 'src/entidades/Instrumento';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  instrumento:Instrumento = {
    id:0,
    instrumento:"",
    marca:"",
    modelo:"",
    imagen: "",
    precio:"",
    costoEnvio:"",
    cantidadVendida:"",
    descripcion:"",
};

  new = false;
  idInstrumento: string = "";
  resultadoOperacion = "";

  constructor(private servicio:FuncionesService, private router:Router, private activeRoute:ActivatedRoute) {

    this.activeRoute.params
    .subscribe(
      parametros => {
        this.idInstrumento = parametros['id'];
        if(this.idInstrumento != "nuevo"){
          servicio.getInstrumentoEnBaseDatosXId(this.idInstrumento)
          .subscribe(instrumentoEncontrado => this.instrumento = instrumentoEncontrado as Instrumento);
        }else{
          console.log("ES NUEVO");
        }
      }
    );
   }

  ngOnInit(): void {
  }

  async guardarPOST() {
    this.servicio.saveInstrumento(this.instrumento);
    this.resultadoOperacion = "Operación finalizada, verifique los datos";
    this.router.navigate(['/lista']);
  }

}
