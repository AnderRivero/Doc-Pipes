import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(nombre: string, b:boolean = true): string {
    if (b) {
      let pass:string = "";
        for (let i = 0; i <= nombre.length; i++) {
          pass += '*';        
        }
      return pass;
    } else {
      return nombre;
    } 
  }

}
