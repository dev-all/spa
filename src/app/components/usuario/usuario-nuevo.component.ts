import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute) { 

    this.activatedRoute.parent.params.subscribe( parametros =>{
       console.log(" ruta hija usuarioNuevo ");
       console.log(parametros);
      //this.heroe = this._heroesService.getHeroe( params['id'] );      
  });

  }
  ngOnInit() {
  }

}
