import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { 
  }

  public loginUserFromRemote(user :User):Observable<any>{
    return this.http.post<any>('http://localhost:8001/loginUser',user)
  }

  public registerUserFromRemote(user :User):Observable<any>{
    return this.http.post<any>('http://localhost:8001/registerUser',user)
  }

}
