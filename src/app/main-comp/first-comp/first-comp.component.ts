import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit, AfterViewInit {
  @ViewChild('userForm') userForm: NgForm
  users: any = [];
  editUserId
  newEditMode: boolean
  constructor(private _userService: UserService) {

  }

  ngOnInit(): void {
    this.onFetchUser()
    this._userService.editMode.subscribe(
      (data) => {
        this.newEditMode = data
      }
    )
    this._userService.newUserId.subscribe(
      (data) => {
        this.editUserId = data
      }
    )
    this._userService.getUserForm(this.userForm)
  }

  ngAfterViewInit() {
    this._userService.getUserForm(this.userForm)
  }

  onFetchUser() {
    this._userService.getUserData()
      .subscribe(data => {
        this.users = data;
        this._userService.newAddedUser.next(this.users)
      });
  }

  // to add user
  onAddUser() {
    if (this.userForm.valid) {
      if (this.newEditMode) {
        this.users[this.editUserId] = this.userForm.value
        this._userService.newAddedUser.next(this.users)
        console.log("ussseees=>", this.users)
        this.userForm.reset();
        this.newEditMode = false;
      } else {
        this._userService.addUser(this.userForm.value).subscribe(data => {
          this.users = data;
          console.log(this.users);
        });
        this.onFetchUser();
        this.userForm.reset();
      }
    } else {

    }
  }
}