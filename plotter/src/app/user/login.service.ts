import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICredentials} from "./credentials";
import {CommonService} from "../services/common.service";

@Injectable({
  providedIn: 'any'
})
export class LoginService {
  loggedIn: boolean = false;
  session: string = "";
  authendpoint: string = 'http://127.0.0.1:8000';


  constructor(private http: HttpClient) {
  }

  login(user: string, cred: string): Observable<ICredentials> {
    let url = this.authendpoint + '/login';
    return this.http.post<ICredentials>(url, {"uname": user, "cred": cred});
  }


}
