import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/model/users.interface';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userId!: number
  selectedUser!: Iusers

  constructor
    (
      private _route: ActivatedRoute,
      private _router: Router,
      private _usersService: UsersService,
    ) { }

  ngOnInit(): void {
    this.userId = +this._route.snapshot.params['id']
    this.selectedUser = this._usersService.getSingleUSer(this.userId)!
  }

  onUserUpdate(username: HTMLInputElement) {
    let obj: Iusers = {
      username: username.value,
      id: this.userId
    }
    this._usersService.updateUser(obj)
    this._router.navigate(['/users', this.userId])
  }

}
