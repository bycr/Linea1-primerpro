import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pri-proy';
  numero1 : number;
  numero2 : number;
  resultado : number;

  public operar(op: string):void{

    switch(op){
      case 's': 
        this.resultado = this.numero1 + this.numero2;
        break;
      case 'r':
        this.resultado = this.numero1 - this.numero2;
        break;
      case 'm':
        this.resultado = this.numero1 * this.numero2;
        break;
        case 'd':
          this.resultado = this.numero1 / this.numero2;
          break; 
        default:
           this.resultado = 0;
    }
  }
    

  public teclear(e: any):void{
      console.log("la tecla que se oprimio fue: "+e.key);
      console.log("la palabra al momento es: "+e.target.value)
  }
  
}
