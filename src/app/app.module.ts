import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Módulo importante, es el archivo de ruteo
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { HomeComponent } from './components/home/home.component';
import { DondeEstamosComponent } from './components/donde-estamos/donde-estamos.component';
import { FuncionesService } from './servicios/funciones.service';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ItemInstrumentoComponent } from './components/item-instrumento/item-instrumento.component';

import { FormsModule } from '@angular/forms';


//Incluir para las peticiones http
import { HttpClientModule } from '@angular/common/http';
import { KeysPipe } from './pipes/keys.pipe';
import { ListaComponent } from './components/lista/lista.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InstrumentosComponent,
    DetalleInstrumentoComponent,
    HomeComponent,
    DondeEstamosComponent,
    BuscadorComponent,
    ItemInstrumentoComponent,
    KeysPipe,
    ListaComponent,
    FormularioComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FuncionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
