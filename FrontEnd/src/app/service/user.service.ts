import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  url="http://localhost:8080/user/login ";
  constructor(private httpClient: HttpClient){}
 // private cookie: CookieService
//   login(user : User):Observable<any>{
//     let (Response: any) = this.httpClient.post<any>("http://localhost:8080/user/login" , user,{responseType: 'text' as 'json' 
//   Response.subscribe((data: any) =>{this.cookie.set('Token', data); this.cookie.set('Role', user.role)});
//   return this.httpClient.post<any>("http://localhost:8080/user/login",user,{responseType: 'text' as 'json'})
// });

  public generateToken(loginData:any)
  {
    console.log(loginData);
    return this.httpClient.post(this.url,loginData)

    }
  
  public loginUser(token: string)
  {
    localStorage.setItem("token", token);
    return true;
  }

  //islogin:user is login or not

  public isLoggedIn()
  {
    let tokenStr=localStorage.getItem("token")
    if(tokenStr==undefined || tokenStr==null || tokenStr==' ')
    {
      return false;
    }
    else{
      return true;
    }
  }
  
  //logout: remove token from local storage
  public logout(){

    localStorage.removeItem('token');
    return true;
  }

  //get token from local storage
  public getToken(){
    return localStorage.getItem('token');
  }

  //set Userdetails
  public setUser(user: any)
  {
    localStorage.setItem('user', JSON.stringify(user));
  }
 
  //get user
  public getUser()
  {
    let userStr=localStorage.getItem("user");
    if(userStr!=null)
    {
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }
}



