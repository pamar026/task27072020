import {InMemoryDbService} from 'angular-in-memory-web-api';
import {User} from './user.model';

export class UserData implements InMemoryDbService {
  createDb(){
    const users: User[]=[
        {
            firstName : "Amar",
            lastName : "Patil",
            age : 26,
            id : 1
        },
        {
           
            firstName : "Ram",
            lastName : "Kale",
            age : 28,
            id : 2
        },
        {
           
            firstName : "Bhushan",
            lastName : "Patil",
            age : 23,
            id : 3
        } 

    ];
    return {users};
  }
}