import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { DondeEstamosComponent } from './components/donde-estamos/donde-estamos.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dondeestamos', component: DondeEstamosComponent},
  {path: 'instrumentos', component: InstrumentosComponent},
  {path: 'detalleinstrumento/:id', component: DetalleInstrumentoComponent},
  {path: 'buscar/:termino', component: BuscadorComponent },
  {path: 'lista', component: ListaComponent },
  {path: 'formulario/:id', component: FormularioComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
