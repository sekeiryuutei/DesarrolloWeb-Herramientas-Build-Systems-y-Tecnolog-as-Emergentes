import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css'],
  providers: [AuthService]
})
export class SendEmailComponent implements OnInit {
  public user$: Observable<any>=this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
  }


  onSendEmail():void{
    //servicio enviar email
    this.authSvc.sendVerificationEmail();
  }
}
