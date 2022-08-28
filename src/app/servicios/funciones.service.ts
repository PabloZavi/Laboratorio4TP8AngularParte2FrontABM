import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as data from 'src/assets/datos/instrumentos.json';
import { Instrumento } from 'src/entidades/Instrumento';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

  //instrumentosFile: any = (data as any).default;
  public instrumentosData:Instrumento[]=[];
  public instrumentoEncontrado:Instrumento | undefined;

  constructor(public http: HttpClient) { }

  /* public getInstrumentos(): any[] {
    //return this.instrumentosFile.instrumentos;
    this.getInstrumentosFromDataBase();
    return this.instrumentosData;
  }

  public getInstrumentoXId(idx: number): any {
    //for (let instrumento of this.instrumentosFile.instrumentos) {
      for(let instrumento of this.instrumentosData){
      if (instrumento.id == idx) {
        return instrumento;
      }
    }
  }
 */
  /* public buscarInstrumentos(termino:string):any[]{
    let instrumentosArr:any[] = [];
    termino = termino.toLowerCase();

    for(let instrumento of this.instrumentosFile.instrumentos){
      let nombre = instrumento.instrumento.toLowerCase();
      if(nombre.indexOf(termino) >= 0){
        instrumentosArr.push(instrumento);
      }

    }
    return instrumentosArr;
  } */

  //lee todos los instrumentos
  getInstrumentosFromDataBase(): Observable<Instrumento[]>{
    return this.http.get<Instrumento[]>("http://localhost:3001/api/instrumentos");
  }

  //busca un instrumento por el id
  getInstrumentoEnBaseDatosXId(idx:string): Observable<Instrumento>{
    return this.http.get<Instrumento>("http://localhost:3001/api/instrumentos/" + idx);
  }

  //busca los instrumentos por un termino de busqueda
  getInstrumentossBusquedaFromDataBase(termino:string): Observable<Instrumento[]>{
    return this.http.get<Instrumento[]>("http://localhost:3001/api/instrumentos/buscar/" + termino);
  }



  async deleteInstrumentoFetch(instrumentoId: string){
    let urlServer = 'http://localhost:3001/api/instrumentos/'+instrumentoId;
    console.log(urlServer);
    let result = await fetch(urlServer, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        mode: 'cors'
    });
  }

   async saveInstrumento(instrumento?: Instrumento) {
    let urlServer = 'http://localhost:3001/api/instrumentos/';
    let method:string = "POST";
    if(instrumento && instrumento.id > 0){
      urlServer = 'http://localhost:3001/api/instrumentos/' + instrumento.id;
      method = "PUT";
    }
    await fetch(urlServer, {
      "method": method,
      "body": JSON.stringify(instrumento),
      "headers": {
      "Content-Type": 'application/json'
      }
    });
    }

 /*  //busca un plato por el id
  getPlatoEnBaseDatosXId(idx:string){
    return this.http.get("http://localhost:8081/api/platoxid/" + idx).pipe(
      map( platoEncontrado => platoEncontrado));
  } */

  /* //busca los platos por un terminode busqueda
  getPlatosBusquedaFromDataBase(termino:string){
    return this.http.get("http://localhost:8081/api/buscar/" + termino).pipe(
      map( platosSearch => platosSearch));
  } */



   /* async getInstrumentosFetch() {
    let urlServer = "http://localhost:3001/api/instrumentos/";
    let datos = await fetch(urlServer, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      mode: 'cors'
    });
    console.log(datos);
    return await datos.json();
  }

  async getInstrumentoXIdFetch(id: number) {
    let urlServer = 'http://localhost:3001/api/instrumentos/' + id;
    let datos = await fetch(urlServer, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      mode: 'cors'
    });
    console.log(datos);
    return await datos.json();
  } */
  /*
  async deleteInstrumentoXIdFetch(id:number){
    console.log("Eliminar Instrumento ID " + id);
    let urlServer = 'http://localhost:3001/api/instrumentos/' + id;
    await fetch(urlServer, {
      method: 'DELETE',
          headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      },
          mode: 'cors'
    });
  }
  
  async saveInstrumentoFetch(instrumento?: Instrumento) {
    let urlServer = 'http://localhost:3001/api/instrumentos/';
    let method:string = "POST";
    if(instrumento && instrumento.id > 0){
      urlServer = 'http://localhost:3001/api/instrumentos/' + instrumento.id;
      method = "PUT";
    }
    await fetch(urlServer, {
      "method": method,
      "body": JSON.stringify(instrumento),
      "headers": {
      "Content-Type": 'application/json'
      }
    });
    }
  
    async getInstrumentosXBusquedaFetch(termino: String){
    let urlServer = 'http://localhost:3001/api/instrumentos/buscar/'+ termino;
    let response = await fetch(urlServer, {
      method: 'GET',
          headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      },
          mode: 'cors'
    });
    console.log(response);
    return await response.json();
  }
 */


}

