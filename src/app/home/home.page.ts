import { Component } from '@angular/core';
import { Vendas } from '../services/vendas';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  pedido: any = null;
  mensage = '';
  constructor(private api: Vendas) {}

  ngOnInit(){
   
  }

  async Listar(){
    // listar pedidos
    const pedidosLista = {
      requisicao: 'pedido-listar',
      id_pedido: 100055
    }
    const resposta: any = await lastValueFrom(this.api.operacao(pedidosLista));
    this.mensage = resposta.msg;
    this.pedido = resposta.data[0];

    console.log(this.pedido);
  }
  
}
