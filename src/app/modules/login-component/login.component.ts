import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'LogisticFE Login';
  email = '';
  password = '';

  /**
   *
   */
  constructor(private router: Router, private requestService: RequestService) {
  }

  login(){
    this.requestService.login(this.email, this.password)
                       .subscribe(res => {
                        localStorage.setItem("user", JSON.stringify(res));
                        this.router.navigateByUrl('/delivery-schedule')
                       });
  }

  redirectSignUp() {
    this.router.navigateByUrl('signup');
  }
}
