import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCompComponent } from './main-comp/main-comp.component';
import { FirstCompComponent } from './main-comp/first-comp/first-comp.component';
import { SecondCompComponent } from './main-comp/second-comp/second-comp.component';
import { UserService } from './user.service';
import { UserData } from './main-comp/user-data';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    MainCompComponent,
    FirstCompComponent,
    SecondCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(UserData)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
