import { Component } from '@angular/core';// pour implementer l'interface OnInit
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';
  
  constructor(private appareilService: AppareilService) { //ajouter le service au component
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
}
