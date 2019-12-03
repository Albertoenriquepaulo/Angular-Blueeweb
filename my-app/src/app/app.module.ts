import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';

import { ContactoComponent } from './contacto/contacto.component';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
// Services
import { EquipoService } from './equipo.service';
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'equipo/:id', component: EquipoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: '', component : InicioComponent ,pathMatch: 'full' }, //si lo dejamos vacio nos llevará a la pagina de inicio
  { path: '**', redirectTo: '/', pathMatch: 'full' }, //si escribmos algo que no existe en la url nos llevara a la pagina de inicio
];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
//    CuerpoComponent,
//    CuerpodosComponent,
    ContactoComponent,
    InicioComponent,
    NosotrosComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EquipoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
