import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[AuthService],
})
export class NavbarComponent implements OnInit {
  countProduct = 0;
  public user$: Observable <any>=   this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  
  }

  async onLogut(){
    try {
     await this.authSvc.logout();
     this.router.navigate(['/login']);

    } catch (error) {
      console.log(error);
    }
  }

}
