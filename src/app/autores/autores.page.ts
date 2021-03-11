import { Component, OnInit } from '@angular/core';
import { Autor } from './autor.model';
import { Genero } from './genero.enum';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.page.html',
  styleUrls: ['./autores.page.scss'],
})
export class AutoresPage implements OnInit {

  autores: Autor[];

  constructor() { 
    this.autores = [
      {
        nome: 'Ivan',
        dataNascimento: new Date(1998, 1, 13),
        genero: Genero.MASCULINO
      },
      {
        nome: 'Felipe',
        dataNascimento: new Date(1981, 4, 19),
        genero: Genero.FEMININO
      },
      {
        nome: 'Leonardo',
        dataNascimento: new Date(1811, 9, 29),
        genero: Genero.FEMININO
      },
    ]
  }

  ngOnInit() {
  }

}
