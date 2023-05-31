import { Component , OnInit} from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { adminModel } from 'src/app/model/admin-model';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  
  public people = {
    id: '',
    name: '',
    contactNumber: '',
    email: '',
    password: '',
    role: '',
    status: ''
  };

 users:Array<adminModel> | undefined

  
  constructor( private adminService:AdminService) {
  }

// to get the data

ngOnInit(){
  this.adminService.getAdminData().subscribe(
    (data: any)=>{
      //console.log(data)
      this.users= data
      console.log(data)
    })
}

add(){
  console.log(this.people);
  if(this.people.name== '' || this.people.name ==null){
    alert('name is required !!');
    return;
  }
  if(this.people.email== '' || this.people.name ==null){
    alert('correct email is required !!');
    return;
  }
//add user function
 this.adminService.addUser(this.people).subscribe(
  (data)=>{
    console.log(data);
    alert('success');
    location.reload();
  },
  (error) => {
    console.log(error);
    alert('something went wrong');
  }
 );

}
// edit details

  edit(user: any){
    this.people = user;
  }

  updateUsers(){
    this.adminService.updateUsers(this.people).subscribe(
      (response: any)=>{
        console.log(response);
        alert('success');
        
      },
      (error: any) => {
        console.log(error);
        alert('something went wrong');
      }
    );
  }

  
}
