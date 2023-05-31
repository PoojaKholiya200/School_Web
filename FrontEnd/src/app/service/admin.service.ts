import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  httpClient: any;

  API ='http://localhost:8081/user';
  constructor(private http: HttpClient) { }
  
  // add user user

  public addUser(userdata: any){
    return this.http.post(this.API+ '/adding' ,userdata);
  }

  public getAdminData(){
    return this.http.get(this.API);
  }
  public updateUsers(user: any){
   
    return this.http.put(this.API + '/updateUser' , user);
  }
}
