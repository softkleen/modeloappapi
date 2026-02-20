import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-produto-imagem',
  templateUrl: './produto-imagem.page.html',
  styleUrls: ['./produto-imagem.page.scss'],
  standalone: false
})
export class ProdutoImagemPage implements OnInit {

  idProduto:any;
  imagemFile!:File;
  preview:any;

  constructor(
    private route:ActivatedRoute,
    private api:Vendas,
    private router:Router
  ) { 
    this.idProduto = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit() {}
  



  async tirarFoto(){

    
    // se quiser pega a geo localização (coordenadas GPS - Glonas)
    const position = await Geolocation.getCurrentPosition({
      enableHighAccuracy:true
    });
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(url, '_system');


    // instalar pluguin da camera: npm install @capacitor/camera >>>> npx cap sync 
    const foto = await Camera.getPhoto({
      quality: 80,
      allowEditing:false,
      resultType: CameraResultType.Base64,
      source:CameraSource.Prompt
    });
    this.preview = 'data:image/jpeg;base64, ' + foto.base64String; 
    const blob  = this.base64ToBlob(foto.base64String!,'image/jpeg');
    this.imagemFile = new File([blob], `produto_${Date.now()}.jpg`),{type: 'image/jpeg'};
  }

  base64ToBlob(base64:string, mime:string){
    const byteChars = atob(base64);
    const byteNumbers = new Array(byteChars.length);
    for (let i = 0; i < byteChars.length; i++){
      byteNumbers[i] = byteChars.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers)
    return new Blob([byteArray],{type:mime})
  }

  enviar(){
    if(!this.imagemFile){
      console.error('Nenhuma imagem selecionada');
      return;
    }
    this.api.uploadImagem(this.idProduto, this.imagemFile)
    .subscribe((res:any)=>{
      if(res.success){
        this.router.navigate(['/produto-list'])
      }
    });

  }

}
