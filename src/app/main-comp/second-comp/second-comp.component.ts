import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { FirstCompComponent } from '../first-comp/first-comp.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent implements OnInit {
  @ViewChild ('FirstCompComponent') FirstCompComponent : FirstCompComponent 
  users:any =[];
  editUserId
  editUserForm
  userEditMode : boolean
  userForm : NgForm
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this.userForm = this._userService.newUserForm
    this.onFetchUser()
  }
  
  //to get users
  onFetchUser() {
    this._userService.newAddedUser
    .subscribe(data => {
       this.users=data;
       console.log("fetch user=>",data)
    });
  }

  //to update users
  onUpdateUser(i){
    this._userService.editMode.next(true);
    this._userService.newUserId.next(i)
    this.editUserForm = this._userService.newUserForm
    this.editUserForm.setValue(
      {
        firstName : this.users[i].firstName,
        lastName : this.users[i].lastName,
        age : this.users[i].age
      }
    )
  }

  onDeleteUser(id){
    if(confirm('Do you want to delete this user?'))
    this.users.splice(id,1)
    this.onFetchUser();
  }
}
