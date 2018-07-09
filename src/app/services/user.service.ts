import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Http } from "@angular/http";
import { User } from "src/app/services/models/user";

@Injectable()
export class UserService {

  constructor(private http: Http) { }

   create(user: User) {
        return this.http.post('/api/users', user);
    }

}
