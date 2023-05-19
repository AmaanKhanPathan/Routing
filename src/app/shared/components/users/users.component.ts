import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Iusers } from '../../model/users.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersInfo : Array<Iusers> = []
  // selectedUserId! : number
  selectedUser ! : Iusers

  constructor(private _usersService : UsersService) { }

  ngOnInit(): void {
    this.usersInfo = this._usersService.getAllUsers()
    // this.selectedUserId = this.usersInfo[0].id
    this.selectedUser = this.usersInfo[0]
  }

}
