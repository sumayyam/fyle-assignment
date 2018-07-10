import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app.routing';
import {DataService  } from './services/data.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BangaloreBranchesSearchComponent } from './bangalore-branches-search/bangalore-branches-search.component';
import { FilterPipe } from "src/app/filter.pipe";




@NgModule({
  declarations: [
    AppComponent,
    BangaloreBranchesSearchComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
      FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],

})
export class AppModule { }
