import {Injectable} from '@angular/core';
import {ICredentials} from "../user/credentials";
import {LoginService} from "../user/login.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  constructor(private loginService: LoginService) {
  }

  makeId(length:number):string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

}
