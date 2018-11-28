import { Component, OnInit } from '@angular/core';// pour implementer l'interface OnInit
import { AppareilService } from './services/appareil.service';
import { of } from 'rxjs/observable/of'; //import type Observable
import 'rxjs/add/observable/interval'; //accèes à la methode interval()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isAuth = false;
  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';
  secondes: number;
  counterSubscription: Subscription;

  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

  ngOnDestroy() {
   this.counterSubscription.unsubscribe();
 }

  constructor(private appareilService: AppareilService) { //ajouter le service au component//
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
}
