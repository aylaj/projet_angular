import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

import { AuthGuard } from './services/auth-guard.service';

import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component'; //importer les classes
import { Routes } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './component/skill/skills/skills.component';



const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard],  component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuard]  ,component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'users', component: UserListComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: '**',redirectTo: 'not-found'}
];



@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent,
    SkillsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,// activer le FormsModule
    RouterModule.forRoot(appRoutes), //activer les routes
    HttpClientModule,//importer le serveur back
  ],
  providers: [AppareilService,
              AuthService, UserService,
            AuthGuard], //pour injecter les services
  bootstrap: [AppComponent]
})
export class AppModule { }
