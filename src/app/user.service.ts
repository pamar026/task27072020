import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './main-comp/user.model';
import { tap } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  apiurl = 'api/users';
  fetchId : number
  newAddedUser = new Subject()
  newUserId = new Subject()
  editMode = new BehaviorSubject(false)
  newUserForm: NgForm
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { }

  getUserForm(userForm) {
    this.newUserForm = userForm
  }

  getUserData() {
    return this.http.get('api/users')
  }

  addUser(users: User) {
    return this.http.post(this.apiurl, users, this.httpOptions)
      .pipe(tap(data => console.log(data))
      );
  }

}
