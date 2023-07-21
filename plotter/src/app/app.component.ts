import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BackendService} from "./services/backend.service";
import {Observable} from "rxjs";
import {LocalStorageService} from "./services/local-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  selectedStory:boolean = false;

  constructor(private router: Router, private backend:BackendService,private local:LocalStorageService) {}

  ngOnInit() {
   this.local.clear();
  this.router.navigate([{outlets: {details: null}}]);

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
