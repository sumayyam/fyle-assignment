import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BangaloreBranchesSearchComponent } from "src/app/bangalore-branches-search/bangalore-branches-search.component";

const routes: Routes = [

  {
    path: '',
    component: BangaloreBranchesSearchComponent
  },
 
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }