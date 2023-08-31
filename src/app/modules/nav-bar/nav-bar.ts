import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.html',
  styleUrls: ['./nav-bar.scss']
})
export class NavBarComponent {
  title = 'LogisticFE';

  /**
   *
   */
  constructor(private router: Router) {
  }

  logOut(){
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}
