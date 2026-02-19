import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoImagemPageRoutingModule } from './produto-imagem-routing.module';

import { ProdutoImagemPage } from './produto-imagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoImagemPageRoutingModule
  ],
  declarations: [ProdutoImagemPage]
})
export class ProdutoImagemPageModule {}
