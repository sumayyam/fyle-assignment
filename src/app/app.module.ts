import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app.routing';
import {DataService  } from './services/data.service';
import { AppComponent } from './app.component';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AlertService } from "src/app/services/alert.service";
import { UserService } from "src/app/services/user.service";
import { BangaloreBranchesSearchComponent } from './bangalore-branches-search/bangalore-branches-search.component';
import { FilterPipe } from "src/app/filter.pipe";
import { LoginpageComponent } from './loginpage/loginpage.component';




@NgModule({
  declarations: [
    AppComponent,
    AuthenticationPageComponent,
    RegisterPageComponent,
    BangaloreBranchesSearchComponent,
    FilterPipe,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
      FormsModule,
  ],
  providers: [DataService,AlertService,UserService],
  bootstrap: [AppComponent],

})
export class AppModule { }
