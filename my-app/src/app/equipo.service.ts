import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  equipo:any[] =[
    {
      nombre: 'Alberto',
      especialidad: 'HTML',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi aut et odit dolore suscipit sint veritatis eos ut similique ullam earum, expedita, natus minima tempore aliquid unde voluptatibus, itaque consequuntur.'
    },
    {
      nombre: 'Paola',
      especialidad: 'Administracion',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi aut et odit dolore suscipit sint veritatis eos ut similique ullam earum, expedita, natus minima tempore aliquid unde voluptatibus, itaque consequuntur.'
    }
  ]
  constructor() { 
    console.log('Servicio Fucionando');
  }

  /*getEquipo(){
    return this.equipo;
  }*/

  getEquipo = () => {
    return this.equipo;
  }
  getEquipoByID = (i) =>{
    return this.equipo[i];
  }

}
