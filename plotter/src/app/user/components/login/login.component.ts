import { Component } from '@angular/core';
import {LoginService} from "../../login.service";
import {ICredentials} from "../../credentials";
import {Observable} from "rxjs";
import {UserModel} from "../../user.model";
import {NgForm,NgModel} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent {
  register:boolean = false;
  password:string ="";
  credential:ICredentials = {userId:"",sessionId:""};
  user:UserModel = {userName: "",accountType: "", email: ""}
  constructor(private loginService:LoginService,private router:Router) {
  }

  onSubmit(form:NgForm):void {
    // if (form.valid ) {
    //      this.loginService.login(this.user.userName, this.password).subscribe(
    //        (param:ICredentials) => {
    //       this.credential.userId = param.userId;
    //       this.credential.sessionId = param.sessionId;
    //     }
    //   )
    // }
    // if (this.credential.userId != ""  ||  this.credential.sessionId != ""){
    //   this.router.navigate(['/story-list']);
    // }
  }

  dropCredentials():void{
    this.credential.userId ="";
    this.credential.sessionId="";
  }

}
