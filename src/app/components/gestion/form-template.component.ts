import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

usuario: Object = {
                  nombre: null,
                  apellido: null,
                  email: null,
                  pais: '',
                  sexo: 'Hombre',
                  acepta: false }


paises = [
  {nombre: 'Paraguay', codigo: 'pa'},
  {nombre: 'Uruguay', codigo: 'ur'},
  {nombre: 'Argentina', codigo: 'ar'},
];

sexos: string[] = ['Hombre' , 'Mujer', 'ND'];


  constructor() { }


guardar(forma: NgForm){
  console.log( forma );
  console.log( 'form ' );


}



  ngOnInit() {
  }

}
