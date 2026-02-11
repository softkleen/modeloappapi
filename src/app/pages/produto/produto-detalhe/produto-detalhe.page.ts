
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.page.html',
  styleUrls: ['./produto-detalhe.page.scss'],
  standalone:false
})
export class ProdutoDetalhePage implements OnInit {
id!:number;
form!:FormGroup;
categorias:any[]=[];
produto:any[]=[];

  constructor(
    private route: ActivatedRoute,
    private fb:FormBuilder,
    private api:Vendas,
    private router: Router,
    private toast: ToastController
  ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.listaCategorias();
    this.buscaProduto(this.id);
  }

  listaCategorias(){
    this.api.operacao({requisicao:'categoria-listar'}).subscribe((res:any)=>{
      if(res.success){
        this.categorias = res.data;
      }
    });
  }
  buscaProduto(is:number){
        this.api.operacao({requisicao:'produto-listar', id:this.id}).subscribe((res:any)=>{
      if(res.success){
        this.produto = res.data;
      }
      console.log(this.produto);
    });
  }


}
