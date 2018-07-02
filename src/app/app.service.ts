import { Http} from '@angular/http';
import{Injectable} from '@angular/core';
import { HttpComponent } from './Http/HttpComponent';
import { Observable } from "rxjs/Observable";
@Injectable()
export class Service 
{
    
    constructor(private http:Http)
    {

    }
   serviceFunction(serviceData:any)
  //serviceFunction()
    {
        //return this.http.get('https://api.github.com/users');
        return this.http.post('https://studentdetails-3c73a.firebaseio.com/data.json',serviceData);
    }
    
}