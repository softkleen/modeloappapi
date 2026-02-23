import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.page.html',
  styleUrls: ['./produto-list.page.scss'],
  standalone:false
})
export class ProdutoListPage implements OnInit {

  produtos:any[]=[];
  start: number = 0; // Controla o início da busca
  limit: number = 20; // Quantidade de itens por página
  palavra: any;

  constructor(private api: Vendas, private router:Router) { }

  ngOnInit() {
    this.listar();   
  }
  
  listar(event?: any, atualizar: boolean = false) {
    // Se for um 'refresh', a gente reseta o contador e a lista
    if (atualizar) {
      this.start = 0;
      this.produtos = [];
    }

    // gatos e gatas----aqui a gente passa a quantidade de linhas que queremos exibir e incrementar 
    this.api.operacao({
      requisicao:'produto-listar', 
      limit:this.limit, 
      start:this.start,
      nome: this.palavra})
    .subscribe((retornoDaApi:any)=>{       
       console.log(retornoDaApi.data)
      if(retornoDaApi.success){
        // aqui agente acrescenta os novos itens aos existentes
        this.produtos = [...this.produtos, ...retornoDaApi.data];

        //e por fim incrementa o start para a próxima busca
        this.start += this.limit; // lembre: start inica valendo  zero(0) e aqui passa a valer 20, 40, 60 e assim por diante
      }
      // Finaliza a animação do componente que disparou o evento
      if (event) {
        event.target.complete();
      }
      // Opcional: Desativar infinite scroll se não houver mais dados
      if (retornoDaApi.data.length < this.limit && event?.target?.disabled !== undefined) {
        event.target.disabled = true;
      }
    });
  }
  // Puxar para atualizar (Reseta a lista)
  atualizar(event: any) {
    this.listar(event, true);
  }

  // Scroll infinito (Carrega mais)
  carregarMais(event: any) {
    this.listar(event);
  }

  abrirDetalhes(id:number){
    this.router.navigate(['/produto-detalhe', id]);
  }
  abrirImagem(id:number){
    this.router.navigate(['/produto-imagem', id]);
  }

// Função disparada pela Searchbar
  buscar(event: any) {
    this.palavra = event.target.value.toLowerCase();
    this.listar(null, true); // Reinicia a lista com o novo filtro
  }
}
