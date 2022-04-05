import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';


import {AmplifyAngularModule,AmplifyService} from 'aws-amplify-angular';
import {AmplifyAuthenticatorModule} from '@aws-amplify/ui-angular';
import { LegacyAmplifyUiModule } from '@aws-amplify/ui-angular/legacy';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    AmplifyAuthenticatorModule,
    LegacyAmplifyUiModule
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
