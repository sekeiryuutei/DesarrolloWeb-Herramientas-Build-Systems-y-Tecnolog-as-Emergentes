import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  });
  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (!this.loginForm.value.email) {
      console.log("Tienedatos?" + this.loginForm.value.email);
    }

  }

  async onLogin() {
    const { email, password } = this.loginForm.value;
    if (!email || email.trim() == "" || !password || password == "") {
      alert("digite todos los datos")
      return;
    }
    try {
      const user = await this.authSvc.login(email, password);
      if (user && user.user.emailVerified) {
        //redirecto a home page
        this.router.navigate(['/home'])
      } else if (user) {
        console.log("si no tienes cuenta, creea una!");
        this.router.navigate(['/verification-email']);
      } else {
        //   this.router.navigate(['/register'])
        console.log("El usurio no fue encontrado!, usuario:  " + email + " clave: " + password);
        alert("El usurio no fue encontrado")
        return;

      }

    } catch (error) {
      console.log(error);
    }
  }
}
