import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

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

  public bebidas = [
    { codigo: 1,  categoria: 1, descricao: 'Refrigerante Coca Cola Original - Lata 350 ml - Contém açucar',     nome: 'Coca-Cola lata 350ml - Original',     valor: 4.99, imagens: ['COCA LATA.jpg'],  visibled: false },
    { codigo: 2,  categoria: 1, descricao: 'Refrigerante Fanta Laranja Original - Lata 350 ml - Contém açucar', nome: 'Fanta Laranja lata 350ml - Original', valor: 4.59, imagens: ['FANTA LATA.jpg'], visibled: false },
    { codigo: 3,  categoria: 1, descricao: 'Refrigerante Coca Cola Original PET 1,5L - Contém açucar',          nome: 'Coca-Cola 1,5 Litros - Original',     valor: 6.99, imagens: ['COCA 1,5 L.png'], visibled: false },
    { codigo: 4,  categoria: 1, descricao: 'Refrigerante Fanta Laranja Original PET 2L - Contém açucar',        nome: 'Fanta Laranja 2 Litros - Original',   valor: 7.99, imagens: ['FANTA 2L.png'],   visibled: false },
    { codigo: 5,  categoria: 2, descricao: 'Cerveja Brahma lata 350ml', nome: 'Brahma lata 350ml',         valor: 3.50, imagens: ['COCA LATA.jpg'],  visibled: false },
    { codigo: 6,  categoria: 2, descricao: 'Cerveja Skol lata 350ml',   nome: 'Cerveja Skol lata 350ml',   valor: 3.50, imagens: ['FANTA LATA.jpg'], visibled: false },
    { codigo: 7,  categoria: 2, descricao: 'Cerveja Spaten lata 350ml', nome: 'Cerveja Spaten lata 350ml', valor: 4.28, imagens: ['COCA 1,5 L.png'], visibled: false },
    { codigo: 8,  categoria: 2, descricao: 'Cerveja Amstel lata 350ml', nome: 'Cerveja Amstel lata 350ml', valor: 4.60, imagens: ['FANTA 2L.png'],   visibled: false },
    { codigo: 9,  categoria: 3, descricao: 'Vinho Malbec 750 ml',                 nome: 'Vinho Malbec 750 ml',                 valor: 35.90, imagens: ['COCA LATA.jpg'],  visibled: false },
    { codigo: 10, categoria: 3, descricao: 'vinho tinto colina D oro 750 ml',     nome: 'vinho tinto colina D oro 750 ml',     valor: 76.63, imagens: ['FANTA LATA.jpg'], visibled: false },
    { codigo: 11, categoria: 3, descricao: 'vinho tinto Niágara crevelim 750 ml', nome: 'vinho tinto Niágara crevelim 750 ml', valor: 25.64, imagens: ['COCA 1,5 L.png'], visibled: false },
    { codigo: 12, categoria: 3, descricao: 'vinho tinto Pergola 750 ml',          nome: 'vinho tinto Pergola 750 ml',          valor: 34.99, imagens: ['FANTA 2L.png'],   visibled: false },
    
  ]

  public slideOpts = {
    slidesPerView: 2
  }

  public pathImgs = '../../assets/imagens/';


  public seleciona = 0;

  constructor(private navCtrl: NavController) {
    this.setSeleciona(1);
  }

  public setSeleciona(codigoCategoria: any) {
    this.seleciona = codigoCategoria;

    this.bebidas.map(el => el.visibled = false);

    this.bebidas
    .filter(el => el.categoria == this.seleciona)
    .map(el => el.visibled = true);
  }
  public goBebida(bebida: any) {
    this.navCtrl.navigateForward('produto', {
      queryParams: { bebida:bebida }
    });
  }

  public formataValor(valor:any) {
    let retorno = "";
    
    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

}
