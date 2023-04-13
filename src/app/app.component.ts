import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiniCalculadora Angular';

  numero1:number = 0;
  numero2:number = 0;
  resultado:number = 0;

  Sumar():void{
    this.resultado = this.numero1 + this.numero2;
  }
  Restar():void{
    this.resultado = this.numero1 - this.numero2;
  }
  Multiplicar():void{
    this.resultado = this.numero1 * this.numero2;
  }
  Dividir():void{
    this.resultado = this.numero1 / this.numero2;
  }

}
