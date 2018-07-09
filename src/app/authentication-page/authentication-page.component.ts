import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { DataService } from "src/app/services/data.service";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.css']
})
export class AuthenticationPageComponent implements OnInit {

password:any;
username:any;

  constructor(private service: DataService) { 

    console.log('inside constructor')
  }

 ngOnInit() {
    console.log('inside ngOnInit');
  }

onSubmit(value) {
  console.log('inside login');
        if(this.service.login(value)){
          console.log('user,,,,',localStorage.getItem("username"))
           
        }
    }

}
