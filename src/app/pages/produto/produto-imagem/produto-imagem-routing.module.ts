import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoImagemPage } from './produto-imagem.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoImagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoImagemPageRoutingModule {}
