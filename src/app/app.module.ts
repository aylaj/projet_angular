import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component'; //importer les classes
import { Routes } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';



const appRoutes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  {path: 'appareils/:id',component: SingleAppareilComponent},
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), //activer les routes
  ],
  providers: [AppareilService,
              AuthService], //pour injecter les services
  bootstrap: [AppComponent]
})
export class AppModule { }
