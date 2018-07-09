import { Pipe, PipeTransform,Injectable } from '@angular/core';



@Pipe({
    name: 'filter'
 
})

@Injectable()
export class FilterPipe implements PipeTransform {
   transform(branches: any, searchText: any): any {
    if(searchText == null) return branches;

    return branches.filter(function(filter){
      return filter.branch.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
  }