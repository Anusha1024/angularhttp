import { Component, Output, EventEmitter } from '@angular/core';
import{HttpComponent} from './Http/HttpComponent';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  inputname:number=10;
   sname:String="";
  cname:String="";
  //@Output() outcreated = new EventEmitter<{sname:String,cname:String}>
  ParentFunction($event)
  {
    this.inputname++;
  }
}
