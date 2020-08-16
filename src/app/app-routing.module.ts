import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { MainComponent } from './auth/main/main.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {ProductFormComponent} from './carrito/product-form/product-form.component';
import { ComprasComponent} from './carrito/compras/compras.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: MainComponent},
  { path: 'login', component:LoginComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'main', component: MainComponent},
  { path: 'verification-email', component: SendEmailComponent, },
  { path: 'producto/:id', component: ProductFormComponent, },
  { path: 'CarritoCompras', component: ComprasComponent, },
  { path: '**', component: MainComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
