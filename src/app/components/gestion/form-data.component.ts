import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  forma: FormGroup;

  usuario: any = {
    nombrecompleto:{
      nombre: 'Mauricio',
      apellido: 'lucero'
    },
    email: 'mauricio@personal.com',
    pasatiempo: ['correr', 'dormir', 'comer']
  }

  constructor() { 

      this.forma = new FormGroup({
        'nombrecompleto': new FormGroup({
          'nombre': new FormControl('', [Validators.required , Validators.minLength(3)]),
          'apellido': new FormControl('', [Validators.required, this.noVera])
        }),
        'email': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ),
        'pasatiempos': new FormArray([
          new FormControl('correr', Validators.required)
        ]),
        'username': new FormControl('',  Validators.required, this.existeUsuario ),
        // 'username': new FormControl('', [ Validators.required]),
        'password1': new FormControl('', Validators.required),
        'password2': new FormControl('')
});


this.forma.controls['email'].statusChanges
.subscribe( data => {
  console.log( data);
});
this.forma.controls['email'].valueChanges
.subscribe( data => {
  console.log( data);
});


      this.forma.controls['password2'].setValidators([
        Validators.required,
        this.noIgual.bind(this.forma)
      ]);

      // this.forma.controls['username'].valueChanges.subscribe( data =>{ console.log(data)});
      // this.forma.controls['username'].statusChanges.subscribe( data =>{ console.log(data)});

      // this.forma.setValue(this.usuario);
  }

  agregarPasatiempos(){
    ( <FormArray> this.forma.controls['pasatiempos']).push(new FormControl('dormir', Validators.required));
  }

 noVera(control: FormControl):{[s:string]:boolean}{
   if(control.value === 'vera'){
     return{noVera: true}
   }
   return null;
 }

  noIgual(control: FormControl): {[s: string]: boolean}{
    let forma: any = this;
    if(control.value !== forma.controls['password1'].value){
      return{noIgual: true}
    }
    return null;
  }


 existeUsuario(control: FormControl): Promise<any> | Observable<any> {
   let promesa = new Promise(
     ( resolve , reject ) => {
         setTimeout( () => {
          if ( control.value === 'strider') {
            resolve({existe: true})
          } else {
            resolve( null )
          }
        }, 3000);
     }
   );
      return promesa;
 }




  guardarCambios(){

  console.log(this.forma.value);

  //restaurar el form luego de guardar
  // this.forma.reset({
  //   nombrecompleto:{
  //     nombre: '',
  //     apellido: ''
  //   },
  //   email: ''
  // });
}

  ngOnInit() {
  }

}
