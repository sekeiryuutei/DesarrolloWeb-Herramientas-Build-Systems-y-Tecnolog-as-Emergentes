import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './auth/main/main.component';
import { RegisterComponent } from './auth/register/register.component';
import { SendEmailComponent } from './auth/send-email/send-email.component';

import { NavbarComponent } from './shared/navbar/navbar.component';

import { FormsModule } from '@angular/forms';


import {ReactiveFormsModule } from '@angular/forms';

import{AngularFireAuthModule} from '@angular/fire/auth';
import{AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';
import { ProductFormComponent } from './carrito/product-form/product-form.component';
import { ProductsComponent } from './carrito/products/products.component';
import { ComprasComponent } from './carrito/compras/compras.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    SendEmailComponent,
    NavbarComponent,
    ProductFormComponent,
    ProductsComponent,
    ComprasComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
