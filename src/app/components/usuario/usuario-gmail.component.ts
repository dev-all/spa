import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-usuario-gmail',
  templateUrl: './usuario-gmail.component.html'
})

export class UsuarioGmailComponent implements OnInit {

  profile: any;

  constructor( private auth:AuthService ) { }

  ngOnInit() {

    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      console.log(this.profile);
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log(this.profile);
      });
    }

  }

}
