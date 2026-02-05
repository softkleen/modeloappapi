import { Injectable } from "@angular/core";
import { CanActivate,  Router } from "@angular/router";
import { Auth } from "../services/auth";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{ // interface
  constructor(
    private auth: Auth,
    private router: Router
  ){}

  canActivate():boolean {
    if(this.auth.isLogado()){
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}