import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {

  }

  logOut(): void {
    //delete session token
    this.router.navigate(['/home']);
  }

  logIn():void{
    //go to login page
    this.router.navigate(['/login'])
  }


}
