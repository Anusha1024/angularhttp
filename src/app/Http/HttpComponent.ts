import { OnInit, Component, Input, EventEmitter, Output } from "@angular/core";
import { Service } from "../app.service";
import{NgForm,FormGroup,FormControl} from "@angular/forms";
import{custompipe} from '../custom.pipe';
@Component({
    selector:'service',
        templateUrl:'./HttpComponent.html'
})

export class HttpComponent implements OnInit
{
    anusha:String= "anu";
    input:String;
   @Input() inputnam:number;
   @Output() chang:EventEmitter<number>= new EventEmitter<number>();
   
    arra:any;
    serviceData=[{
         name:"anusha",
         company:"ness"
     }]
    userreact:FormGroup;
    //post=[];
    constructor(private svc:Service)
    {

    }
    ngOnInit()
    {
    //   this.svc.serviceFunction().subscribe(
    //       res=>{
    //           console.log(res);
    //           this.arra=res},
    //       error=>{console.log(error)}
    //   )
    
     this.userreact= new FormGroup({
         'user':new FormControl(null)
     })
    }
  formFunction(formobject:NgForm)

  {
     this.serviceData.push({name:formobject.value.user, company: formobject.value.company})      
       console.log(formobject);
  }
  ReactiveForm()
  {
     console.log(this.userreact);
  }
  countupdate()
  {
      this.inputnam++;
      this.chang.emit(this.inputnam);
  }
}