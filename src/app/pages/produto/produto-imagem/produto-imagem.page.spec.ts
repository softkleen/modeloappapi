import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoImagemPage } from './produto-imagem.page';

describe('ProdutoImagemPage', () => {
  let component: ProdutoImagemPage;
  let fixture: ComponentFixture<ProdutoImagemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoImagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
