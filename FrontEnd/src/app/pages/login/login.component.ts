import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
//hide= true;
//loginForm:any = FormGroup;
//responseMessage:any;
loginData={
  email:'',
  password:'',
};




  constructor(private snack:MatSnackBar,private user:UserService, private router: Router) {
  // this.roles= [
  //   '',
  //   'Admin',
  //   'Student'
  // ]
}
  
    ngOnInit(): void {}

    formSubmit()
    {
     
      //request to server to generate token
      this.user.generateToken(this.loginData).subscribe(
        (data: any) => {
          console.log('success');
          alert("Login Successully");
          console.groupCollapsed(data);
          this.router.navigate(['admin']);
        },
        (error: any) => {
          console.log('Error !');
          alert("user not found!!");
          console.log(error);
        }
      );

    }
  }

