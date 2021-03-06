import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number;

  constructor() {
    this.contador = 10;
  }

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }
}
