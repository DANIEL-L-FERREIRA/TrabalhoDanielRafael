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
    { codigo: 1, categoria: 1, descricao: 'Refrigerante elaborado a partir de água gaseíficada, açúcar, extrato de noz de cola e cafeína - Bebida não Alcoólica. - Contém 350ml.', nome: 'Coca-Cola lata 350ml - Original', valor: 4.99, imagens: ['COCA LATA.jpg', 'cocagelo.png'], visibled: false },
    { codigo: 2, categoria: 1, descricao: 'Com sabor irresistível e único, o Refrigerante FANTA Laranja faz muito sucesso no mercado entre os refrigerantes nacionais e internacionais. Produzido com água gaseificada, açúcar e suco de laranja é uma excelente opção para matar a sede! Compre Refrigerante FANTA Laranja e experimente esse sabor inconfundível! Compartilhe com amigos e familiares!', nome: 'Fanta Laranja lata 350ml - Original', valor: 4.59, imagens: ['FANTA LATA.jpg'], visibled: false },
    { codigo: 3, categoria: 1, descricao: 'Refrigerante elaborado a partir de água gaseíficada, açúcar, extrato de noz de cola e cafeína - Bebida não Alcoólica.', nome: 'Coca-Cola 1,5 Litros - Original', valor: 6.99, imagens: ['COCA 1,5 L.png'], visibled: false },
    { codigo: 4, categoria: 1, descricao: 'Com sabor irresistível e único, o Refrigerante FANTA Laranja faz muito sucesso no mercado entre os refrigerantes nacionais e internacionais. Produzido com água gaseificada, açúcar e suco de laranja é uma excelente opção para matar a sede! Compre Refrigerante FANTA Laranja e experimente esse sabor inconfundível! Compartilhe com amigos e familiares!', nome: 'Fanta Laranja 2 Litros - Original', valor: 7.99, imagens: ['FANTA 2L.png'], visibled: false },
    { codigo: 5,  categoria: 2, descricao: 'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado, produzida com ingredientes 100% naturais: água, malte e lúpulo. Durante o processo de fermentação da Heineken, a exclusiva Levedura A é responsável pelo sabor característico e bem equilibrado, com notas frutadas sutis. A cerveja é fabricada em tanques horizontais para mais sabor e consistência. É por isso que nenhuma outra cerveja tem o gosto de Heineken.', nome: 'Heineken long neck 330 ml', valor: 6.50, imagens: ['Heineken long neck.png'],  visibled: false },
    { codigo: 6,  categoria: 2, descricao: 'Produzida com ingredientes de alta qualidade e cuidadosamente selecionados, ela traz o melhor do estilo Premium American Lager para dentro do seu copo.',   nome: 'Stella long neck 330 ml',   valor: 5.50, imagens: ['stella.png'], visibled: false },
    { codigo: 7,  categoria: 2, descricao: 'Budweiser é feita do seu próprio jeito desde 1876. Fabricada com água, malte de cevada, arroz, lúpulo e nada mais. Maturada com madeira Beechwood, pra um sabor marcante no começo e suave no final.', nome: 'Budweiser long neck 330 ml', valor: 4.50, imagens: ['budw.png'], visibled: false },
    { codigo: 8,  categoria: 2, descricao: 'A cerveja Cacildis ou Cerveja do Mussum é provavelmente a mais conhecida da linha. É uma cerveja puro malte, leve e refrescante. Ela possui 5% de teor alcoólico e traz notas de miolo de pão, proveniente do malte, e frescor floral, oriundo do lúpulo.', nome: 'Cacildes long neck 330 ml', valor: 4.20, imagens: ['cacildes.jpg'],   visibled: false },
    { codigo: 9,  categoria: 3, descricao: 'Com cortes de uva Isabel e predominância da uva bordô, obtém-se um vinho de paladar suave, coloração rubi intensa, aroma típicos das variedades.',           nome: 'Vinho tinto Suave Góes 5 litros',   valor: 35.90, imagens: ['VINHO 5 LITROS.png'],        isibled: false },
    { codigo: 10, categoria: 3, descricao: 'Nos terroirs da Serra Gaúcha a vinícola Campo Larga produz um vinho branco tradicional. Produzido com a variedade niágara branca tem-se um vinho de aspecto visual límpido, brilhante com tonalidade amarelo palha. Aromas característicos da uva, intenso com notas adocicadas. No paladar é leve, com baixa acidez e bem equilibrado.',      nome: 'Vinho Branco Seco 750 ml',     valor: 76.63, imagens: ['VINHO BRANCO SECO.png'],     visibled: false },
    { codigo: 11, categoria: 3, descricao: 'Experimente o Vinho Quinta do Morgado Tinto Seco, um vinho brasileiro produzido na Serra Gaúcha pela Vinícola Fante com as variedades de uvas Isabel e Bordô.', nome: 'Vinho Tinto Seco 750 ml',      valor: 25.64, imagens: ['VINHO TINTO SECO.png'],      visibled: false },
    { codigo: 12, categoria: 3, descricao: 'Em Lisboa, os vinhos Cigarra são produzidos a partir de castas tradicionais da região. É o caso deste vinho fresco e aromático, resultado de um harmonioso equilíbrio entre a natureza e as práticas sustentáveis na cultura das vinhas realizado pela tradicional vinícola portuguesa Casa Santos Lima.',                nome: 'Vinho Rose Cigarra 750 ml',           valor: 34.99, imagens: ['VINHO ROSE.png'],   visibled: false },
    { codigo: 13, categoria: 4, descricao: 'Suco de laranja integral Pratts,100% natural, sem conservantes e não fermentado. ', nome: 'Suco de Laranja 900 ml',  valor: 4.99, imagens: ['SUCO LARANJA.jpg'],  visibled: false },
    { codigo: 14, categoria: 4, descricao: 'Refresco Fresh sabor limão Del Valle 1,5L: Del Valle é produzido com frutas cuidadosamente cultivadas.',                 nome: 'Suco de Limão 1,5 L',     valor: 4.59, imagens: ['SUCO LIMAO.png'],    visibled: false },
    { codigo: 15, categoria: 4, descricao: 'Suco Del valle Concentrado de Maracuja 500 ML', nome: 'Suco de Maracuja 500 ml', valor: 6.99, imagens: ['SUCO MARACUJA.png'], visibled: false },
    { codigo: 16, categoria: 4, descricao: 'Sem adição de água, açúcar ou corantes.Variedade: corte de uvas americanas. Característica: suave; Temperatura ideal para consumo: 4º a 6ºC', nome: 'Suco de Uva 1 L',         valor: 7.99, imagens: ['SUCO UVA.png'],      visibled: false },
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
