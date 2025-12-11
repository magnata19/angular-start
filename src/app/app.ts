import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente01 } from './componente01/componente01';
import { Componente02 } from './componente02/componente02';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componente01, Componente02],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-start');
}
