import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'pipes';

  arreglo = [1,2,3,4,5,6,7,8,9];
  nombre = 'Alfredo Rivero';
  nombrefull = "alFRedo anDer riVEro miranda"
  PI=Math.PI;  
  a = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: "Logar",
    clave: "Wolverine",
    edad: 500,
    direccion:{
        calle:"Primera",
        casa: "#12",

      }
  }


  valorDePromesa = new Promise( (res,rej)=>{
      setTimeout(()=> res('Llegó la data!'), 3500);
  });

  fecha = new Date();
  video = "anHSw9a8CdU";
  activar:boolean = true;

}
