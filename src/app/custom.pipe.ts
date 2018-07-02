import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
    name:'pipename'
})


export class custompipe implements PipeTransform
{
transform(val:any)
{
   return val.substr(2).toUpperCase();
}
/*transform(val:any,limit:number)
 {
     if(val.length>limit)
     {
     return val.substr(0,limit);
    }
    return val;
 }*/
}