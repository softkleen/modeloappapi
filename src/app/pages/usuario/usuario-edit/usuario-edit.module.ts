import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UsuarioEditPageRoutingModule } from './usuario-edit-routing.module';

import { UsuarioEditPage } from './usuario-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UsuarioEditPage]
})
export class UsuarioEditPageModule {}
