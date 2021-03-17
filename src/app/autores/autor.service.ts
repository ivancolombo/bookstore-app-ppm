import { Injectable } from '@angular/core';
import { Autor } from './autor.model';
import { Genero } from './genero.enum';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  
  private autores: Autor[];

  constructor() { 
    this.autores = [      
      {
        id: 1,
        nome: 'Ivan',
        dataNascimento: new Date(1998, 1, 13),
        genero: Genero.MASCULINO
      },
      {
        id: 2,
        nome: 'Felipe',
        dataNascimento: new Date(1981, 4, 19),
        genero: Genero.FEMININO
      },
      {
        id: 3,
        nome: 'Leonardo',
        dataNascimento: new Date(1811, 9, 29),
        genero: Genero.FEMININO
      },
    ];
  }

  public getAutores() : Autor[] {
    return this.autores;
  }

  excluir(id: any) {
    this.autores = this.autores.filter(a => a.id !== id);
  }

}
