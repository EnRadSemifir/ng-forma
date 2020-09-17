import { Adress } from './../modeles/adress';
import { User } from './../modeles/user';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from './../../api/resource.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ResourceService<string, User>{

  constructor(private http: HttpClient) {
    super(http, 'users');
  }

  createUser(fg: FormGroup): Observable<User> {
    const user = Object.assign(new User(), fg.value);
    const adress = Object.assign(new Adress(), fg.get('adress').value);
    user.adress = adress;
    console.log(user)
    return this.create(user);
  }

  getUsers(): Observable<User[]> {
    return this.list();
  }
}
