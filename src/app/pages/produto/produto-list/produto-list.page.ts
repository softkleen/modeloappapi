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
    this.api.operacao({requisicao:'produto-listar'})
    .subscribe((retornoDaApi:any)=>{
      if(retornoDaApi.success){

        this.produtos = retornoDaApi.data;
     console.log(this.produtos);
      }
    });
  }



  abrir(id:number){
    this.router.navigate(['/produto-detalhe', id]);
  }


}
