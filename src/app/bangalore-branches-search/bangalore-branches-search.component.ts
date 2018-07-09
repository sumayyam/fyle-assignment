import { Component, OnInit } from '@angular/core';
import {DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Data } from "@angular/router";




@Component({
  selector: 'app-bangalore-branches-search',
  templateUrl: './bangalore-branches-search.component.html',
  styleUrls: ['./bangalore-branches-search.component.css'],
 
})
export class BangaloreBranchesSearchComponent implements OnInit {
    Data1: Data[];
    city: any;
    value: any;
    errorMsg: any;
    Data: any[];
    filteredData:Data[];
    public showmsg= false;
    public showError=false;
    private searchText:string;


  constructor(private dataService: DataService,private router:Router) { 
     console.log('going into component');
   
  }

  ngOnInit() {


     console.log('going into ngOnInit');
   
  }

dropdownChange(value)
{
  if (value.city == 1)
    {
   console.log('bangalore works');
    this.showmsg= true;
    this.showError=false;
     this.dataService.getBranchDetails(this.value).subscribe(data =>{
       this.Data = data;
       this.filteredData=this.Data;
       
       console.log('filteredData::::',this.filteredData[0].branch)
       this.Data=this.filteredData.filter(x=>x.branch==value)
       console.log('after filter::.',this.Data1)
      

     })
    }

   if(value.city == 2 || value.city == 3 || value.city == 4 || value.city == 5)
    {
       this.showmsg= false;
       this.showError=true;
    this.errorMsg = 'Oops! Bank details for the corresponding city is not available';


    }
}


}
