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

  constructor(private api: Vendas, private router:Router) { }

  ngOnInit() {
    this.listar();
    
  }
  listar(){
    this.api.operacao({requisicao:'produto-listar', limit:100, start:0})
    .subscribe((retornoDaApi:any)=>{
      if(retornoDaApi.success){
        this.produtos = retornoDaApi.data;
      }
    });
  }

   atualizar(event: any) {
    this.listar();

    setTimeout(() => {
      event.target.complete(); // Finaliza animação
    }, 1000);
  }

carregarMais(event: any) {
  //this.pagina++;
  this.atualizar(event);

  setTimeout(() => {
    event.target.complete();
  }, 800);
}

  abrirDetalhes(id:number){
    this.router.navigate(['/produto-detalhe', id]);
  }
  abrirImagem(id:number){
    this.router.navigate(['/produto-imagem', id]);
  }


}
