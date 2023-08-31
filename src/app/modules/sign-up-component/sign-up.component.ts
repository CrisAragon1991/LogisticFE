import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  title = 'LogisticFE';
  name = '';
  lastName = '';
  role: number = 0;
  email = '';
  password = '';

  /**
   *
   */
  constructor(private requestService: RequestService, private router: Router) {
  }

  signUp() {
    if (this.name && this.lastName && this.email && this.password ){
      console.log(this.role);
      this.requestService.signUp({name: this.name, lastName: this.lastName, email: this.email, password: this.password, role: this.role})
                         .subscribe(res => {
                          this.router.navigateByUrl('login');
                         })
    }
  }
}
