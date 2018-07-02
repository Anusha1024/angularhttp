import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Service } from './app.service';
import { HttpComponent } from "./Http/HttpComponent";
import{custompipe} from './custom.pipe';

@NgModule({
  declarations: [
    AppComponent,HttpComponent,custompipe
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,ReactiveFormsModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
