import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente01 } from './componente01/componente01';
import { Componente02 } from './componente02/componente02';
import { Componente03 } from './componente03/componente03';
import { Componente04 } from './componente-04/componente-04';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componente03, Componente04],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-start');
}
