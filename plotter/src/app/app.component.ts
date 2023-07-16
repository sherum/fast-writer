import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BackendService} from "./services/backend.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  selectedStory:boolean = false;

  constructor(private router: Router, private backend:BackendService) {}

  ngOnInit() {

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
