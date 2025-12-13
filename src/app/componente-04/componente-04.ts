import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-04',
  imports: [CommonModule],
  templateUrl: './componente-04.html',
  styleUrl: './componente-04.css',
})
export class Componente04 {
  exibir: boolean = false;

  acao() {
    this.exibir = !this.exibir;
  }
}
