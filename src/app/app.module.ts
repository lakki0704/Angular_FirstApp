import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsComponent } from './components/components.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule } from '@angular/router';  
import {MatIconModule} from '@angular/material/icon';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {MatDialogModule} from '@angular/material/dialog';

// import {MatDialog, MatDialogRef} from '@angular/material/dialog';


// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    
    ComponentsComponent,
         LoginComponent,
         SignupComponent,
         WelcomeComponent
  ],
  imports: [

    // AngularFireModule.initializeApp(config),
    // AngularFirestoreModule, // firestore
    // AngularFireAuthModule, // auth
    // AngularFireStorageModule // storage
 
    
    MatDialogModule,
   
    ReactiveFormsModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule.forRoot([  
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'welcome', component: WelcomeComponent }])
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
