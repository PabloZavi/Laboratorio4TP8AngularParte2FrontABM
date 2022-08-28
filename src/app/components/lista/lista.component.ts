import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FuncionesService } from 'src/app/servicios/funciones.service';
import { Instrumento } from 'src/entidades/Instrumento';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  instrumentosArray: Instrumento[] = [];
  loading = true;

  constructor(private servicio: FuncionesService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.servicio.getInstrumentosFromDataBase()
      .subscribe(data => {
        console.log(data);
        for (let instrumento in data) {
          console.log(data[instrumento]);
          this.instrumentosArray.push(data[instrumento]);
        }
        this.loading = false;
      });
  }

  delete(id:number){
    this.servicio.deleteInstrumentoFetch(id.toString());
      location.reload();
  }

}
