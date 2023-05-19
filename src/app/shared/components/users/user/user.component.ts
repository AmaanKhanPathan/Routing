import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/model/users.interface';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId! : number
  userObject! : Iusers

  constructor(
    private _route : ActivatedRoute,
    private _router : Router,
    private _usersService : UsersService
    ) { }

  ngOnInit(): void {
    console.log(this._route.snapshot);
    this.userId = +this._route.snapshot.params['id']
    console.log(this.userId);
    this.userObject = this._usersService.getSingleUSer(this.userId)
    console.log(this.userObject);

    this._route.params
      .subscribe((myparams : Params)=>{
        console.log(myparams);
        this.userId = +myparams['id']
        this.userObject = this._usersService.getSingleUSer(this.userId)        
      })   
    }

    goToEditUser(){
      this._router.navigate(['/users', this.userId, 'edit'])
    }

}
