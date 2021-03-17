import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Autor } from './autor.model';
import { AutorService } from './autor.service';
import { Genero } from './genero.enum';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.page.html',
  styleUrls: ['./autores.page.scss'],
})
export class AutoresPage implements OnInit {
  autores: Autor[];  

  constructor(
    private alertController: AlertController,
    private autorService: AutorService
  ) { 
    this.autores = this.autorService.getAutores();
  }

  ngOnInit() {
  }

  listar() {
    this.autores = this.autorService.getAutores();
  }

  confirmarExclusao(autor: Autor) {
    this.alertController.create({
      header: 'Corfimação de exclusão',
      message: `Deseja excluir o autor ${autor.nome}?`,
      buttons: [
        {
          text: 'Sim',
          cssClass: 'success',
          handler: () => {
            this.excluir(autor)
          }
        },
        {
          text: 'Não',
          cssClass: 'danger'
        }
      ]
    }).then(alerta => alerta.present());
  }

  private excluir(autor: Autor) {
    this.autorService.excluir(autor.id);
    this.listar();
  }

}
