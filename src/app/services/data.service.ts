import { Injectable } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { RequestOptions } from "@angular/http";

@Injectable()
export class DataService {
 

  constructor(private http : Http) { }


 

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
