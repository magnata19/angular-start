import { Component } from '@angular/core';

@Component({
  selector: 'app-componente02',
  imports: [],
  templateUrl: './componente02.html',
  styleUrl: './componente02.css',
})
export class Componente02 {
  //event binding
  exibirMensagem() {
    alert('Mensagem exibida ao clicar no botão!');
  }
}
