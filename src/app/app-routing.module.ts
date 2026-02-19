import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard], //????????? 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '', // rota raiz
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'pdv',
    loadChildren: () => import('./pdv/pdv.module').then( m => m.PdvPageModule)
  },
  {
    path: 'usuario-add',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/usuario/usuario-add/usuario-add.module').then( m => m.UsuarioAddPageModule)
  },
  {
    path: 'usuario-list',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/usuario/usuario-list/usuario-list.module').then( m => m.UsuarioListPageModule)
  },
  {
    path: 'usuario-edit/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/usuario/usuario-edit/usuario-edit.module').then( m => m.UsuarioEditPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'produto-list',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/produto/produto-list/produto-list.module').then( m => m.ProdutoListPageModule)
  },
  {
    path: 'produto-detalhe/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/produto/produto-detalhe/produto-detalhe.module').then( m => m.ProdutoDetalhePageModule)
  },
  {
    path: 'produto-imagem/:id',
    loadChildren: () => import('./pages/produto/produto-imagem/produto-imagem.module').then( m => m.ProdutoImagemPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
