import { Component, OnInit } from '@angular/core';
import { FuncionesService } from 'src/app/servicios/funciones.service';
import { Router } from '@angular/router';
import { Instrumento } from 'src/entidades/Instrumento';

@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrls: ['./instrumentos.component.css']
})
export class InstrumentosComponent implements OnInit {

  instrumentosArray: Instrumento[] = [];
  loading = true;

  constructor(private servicio: FuncionesService, private router: Router) { }

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



}
