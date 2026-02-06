import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/services/auth';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone:false
})
export class SplashPage implements OnInit {

  constructor(private router:Router, private auth:Auth) { }

  ngOnInit() {
    setTimeout(()=>{
      if(this.auth.isLogado()){
        this.router.navigateByUrl('/home',{replaceUrl:true});
      }else{
        this.router.navigateByUrl('/login',{replaceUrl:true});
      }
    },1200);
  }

}
