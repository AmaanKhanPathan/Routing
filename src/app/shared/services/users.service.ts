import { Injectable } from '@angular/core';
import { Iusers } from '../model/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArray : Array<Iusers> = [
    {
      username : "Aman",
      id : 1,
    },
    {
      username : "Jack",
      id : 2,
    },
    {
      username : "Ruby",
      id : 3,
    },
  ]

  constructor() { }

  getAllUsers() : Array<Iusers>{
    return this.usersArray
  }

  getSingleUSer(id : number){
    return this.usersArray.find(user=>user.id === id)!
  }

  updateUser(uObj : Iusers){
    this.usersArray.forEach(user => {
      if(user.id === uObj.id){
        user.username = uObj.username; 
      }
    })
  }
}
