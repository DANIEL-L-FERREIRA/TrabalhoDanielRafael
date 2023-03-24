import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    public categorias = [
    { codigo: 1, nome: 'Refrigerantes'},
    { codigo: 2, nome: 'Cervejas'},
    { codigo: 3, nome: 'Vinhos'},
    { codigo: 4, nome: 'Sucos'}
  ]

  constructor() {}

}
