import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Vendas {
  private url = "https://sublimegrace.com.br/modelo-api";

//set PATH=%PATH%;C:\users\wellington.vsantos4\appdata\roaming\npm

  constructor(private http: HttpClient){}
  
  // saída para o primeiro end-point
  operacao(dados:any){
    return this.http.post(this.url + '/api.php', dados);
  }

  // upload de imagem 
  uploadImagem(idProdudto: number, arquivo: File){
    const formData = new FormData();
    formData.append('requisicao','produto-upload-imagem');
    formData.append('id_produto', idProdudto.toString());
    formData.append('imagem', arquivo)

    return this.http.post(this.url + '/api.php',formData);

  }





}
