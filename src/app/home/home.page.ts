import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  gas: number
  alc: number
  resultadoMedia: String
  resultadoSe: String
  Calc() {
     this.resultadoMedia = (this.alc / this.gas).toFixed(2)
     
     if (this.resultadoMedia <= "0.73"){
      this.resultadoSe = "Alcool"
     } else {
      this.resultadoSe = "Gasolina"
      
     }
      
      
  }


}
