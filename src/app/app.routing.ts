import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import { RegisterPageComponent } from "src/app/register-page/register-page.component";
import { BangaloreBranchesSearchComponent } from "src/app/bangalore-branches-search/bangalore-branches-search.component";
import { LoginpageComponent } from "src/app/loginpage/loginpage.component";

const routes: Routes = [
  {
    path: '',
    component: AuthenticationPageComponent
  },

    {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'bankbrancgsearch',
    component: BangaloreBranchesSearchComponent
  },
    {
    path: 'loginpage',
    component: LoginpageComponent
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }