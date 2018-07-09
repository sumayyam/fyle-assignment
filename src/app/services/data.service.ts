import { Injectable } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { RequestOptions } from "@angular/http";

@Injectable()
export class DataService {
  firstname: any;
    lastname:string;
    username:string;
    mobilenumber:string;
    password:string;
    Confirmpwd:string;

  constructor(private http : Http) { }

     login(user) {
     
    if(this.register(user)){
      
      this.username=localStorage.getItem("username");
      this.password=localStorage.getItem("password");
    }
      return true;
  
  }

   register(user) {

  
       localStorage.setItem("firstname", user.firstname);
      localStorage.setItem("lastname",user.lastname);
      localStorage.setItem("username", user.username);
      localStorage.setItem("mobilenumber", user.mobilenumber);
      localStorage.setItem("password",user.password);
       localStorage.setItem("Confirmpwd",user.Confirmpwd);
      console.log('authenticatedUser::',localStorage.getItem("username"))
       console.log('mobilenumber::',localStorage.getItem("mobilenumber"))

  console.log('password match')
  return true;
}

getBranchDetails(value){
		let headers = new Headers({ 'Content-Type': 'application/json'});
		let options = new RequestOptions({ headers: headers });
		return this.http.get('https://app.fyle.in/api/bank_branches?city=BANGALORE&offset=0&limit=50',options).map(response => {
			if (response['_body']) { 
				return response.json()
			} else {
				return {} 
			}
		});
	}

}
