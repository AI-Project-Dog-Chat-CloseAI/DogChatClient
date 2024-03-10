import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { MessageComponent } from './components/message/message.component';
import { FormsModule } from '@angular/forms';
import { VerifyComponent } from './components/verify/verify.component';
import { ActiveComponent } from './components/active/active.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    MessageComponent,
    VerifyComponent,
    ActiveComponent,
    ErrorComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ButtonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
