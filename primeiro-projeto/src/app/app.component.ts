import { Component } from '@angular/core';

@Component({
  selector: 'app-root', /*está no index html esse app-root*/
  templateUrl: './app.component.html', /*index que vai ser usado */
  styleUrls: ['./app.component.scss'] /*css que vai ser usado */
})
export class AppComponent {

  title: string = 'Primeiro-projeto-Angular';
  nome: string = 'Camila Pessotti s2';

  // fazConsoleLog():  void{ /*void qdo  não tem retorno*/
  //   console.log('Algo')
  //   this.nome = 'Camila' /*esse diz troca o valor do nome que estva lá em cima */

  }


