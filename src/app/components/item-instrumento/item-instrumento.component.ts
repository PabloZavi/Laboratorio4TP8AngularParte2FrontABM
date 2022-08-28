import { Component, Input, OnInit } from '@angular/core';
import { Instrumento } from 'src/entidades/Instrumento';


@Component({
  selector: 'app-item-instrumento',
  templateUrl: './item-instrumento.component.html',
  styleUrls: ['./item-instrumento.component.css']
})
export class ItemInstrumentoComponent implements OnInit {

  @Input() instrumentoAux!:Instrumento;

  constructor() { }

  ngOnInit(): void {
  }

}
