import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AngularFireModule} from 'angularfire2';

import {AppComponent} from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBjDzWnL85tgJbin5NR6hWzSXfimaBDu9I",
  authDomain: "my-angular-app-101cd.firebaseapp.com",
  databaseURL: "https://my-angular-app-101cd.firebaseio.com",
  storageBucket: "my-angular-app-101cd.appspot.com",
  messagingSenderId: "768201682332"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
