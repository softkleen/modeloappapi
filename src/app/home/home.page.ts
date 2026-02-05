import { Component } from '@angular/core';
import { Vendas } from '../services/vendas';
import { ToastController } from '@ionic/angular';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {


  constructor(
     private api: Vendas,
     private toast:ToastController,
     private auth: Auth,
     private router: Router 
    ) {}

  ngOnInit(){
  }

  logout(){
    this.auth.logout();
    this.router.navigateByUrl('/login', {replaceUrl:true});
  }

  // async Listar(){
  //   // listar pedidos
  //   const pedidosLista = {
  //     requisicao: 'pedido-listar',
  //     id_pedido: this.idPedido ?? 100057
  //   }
  //   const resposta: any = await lastValueFrom(this.api.operacao(pedidosLista));
  //   this.mensage = resposta.msg;
  //   this.pedido = resposta.data[0];
  //   this.idPedido = this.pedido.id;

  //   console.log(this.pedido, this.idPedido) ;
  // }
  
// async geraPedido(){
//   const pedidoAdd = {
//          requisicao: 'pedido-add',
//          cliente_id: 33,
//          usuario_id: 1003
//       }

//     const resposta: any = await lastValueFrom(this.api.operacao(pedidoAdd));
//     this.idPedido = resposta.id;
    

// }

// async finalizarCompra() {
//     try {
//         // this.geraPedido();
  
//       // 3. Loop para salvar os itens usando o ID recebido
//       for (let item of this.carrinho) {
//         let itemInsert = {
//           requisicao: 'itempedido-add',
//           pedido_id: await this.idPedido, // AQUI usamos o ID gerado acima
//           produto_id: item.produto_id,
//           quantidade: item.quantidade,
//           desconto: item.desconto
//         };
        
//         //console.log(itemInsert);
//         const resposta: any = await lastValueFrom(this.api.operacao(itemInsert));
        
//         //console.log(`Item ${item.produto_id} gravado.` + resposta);
//       }

//       this.exibirMensagem('Venda realizada com sucesso!');
//       this.carrinho = []; // Limpa o carrinho

//     } catch (erro) {
//       console.error(erro);
//       this.exibirMensagem('Erro ao finalizar venda.');
//     }
//   }

//   async exibirMensagem(texto: string) {
//     const t = await this.toast.create({ message: texto, duration: 2000 });
//     t.present();
//   }
}



