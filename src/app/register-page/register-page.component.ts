import { Component, OnInit } from '@angular/core';
import { AlertService } from "src/app/services/alert.service";
import { Router } from "@angular/router";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
    service: any;
    firstname: any;
    lastname:string;
    username:string;
    mobilenumber:string;
    password:string;
    Confirmpwd:string;

  constructor( private router: Router,private alertService: AlertService, private dataService:DataService) { }

  ngOnInit() {
    console.log('ngOnInit')
  }

register(value){
     if(this.dataService.register(value)){
          console.log('username,,,,',localStorage.getItem("username"))
           
        }
 this.firstname=localStorage.getItem("firstname");
 console.log('firstname:::',this.firstname);
}
}
