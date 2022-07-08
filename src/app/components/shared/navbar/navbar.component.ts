import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent   {



  // constructor( ) { }
  constructor( private router: Router , private auth: AuthService ) {
    auth.handleAuthentication();
  }


  buscarHeroe( termino: string ){   
     // console.log(termino);
    this.router.navigate( ['/buscar', termino] );
  }

  login(){
    this.auth.login();
  }

  salir(){
    this.auth.logout();
  }

}
