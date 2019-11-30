import { Component, OnInit } from '@angular/core';
import { templatemodel } from '../shared/model/templatemodel' ;
import {UserserviceService} from '../userservice.service'

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent{

  // gender='male';
  // qualification='selectedQualification';
  submittedStatus=false;
  usermodel = new templatemodel('','','','selectedQualification')
  submit(r)
  {
    // console.log(r, r.value)
    this.callservice.create(r.value).subscribe((res)=>{
      console.log(res)
    }, (err)=>{
      console.log(err)
    });
    // console.log(this.usermodel)
    // this.submittedStatus=true;
  }
  constructor(private callservice:UserserviceService){
    this.getData()
  }
  datareceived;
  getData()
  {
    this.callservice.getAll().subscribe(res=>{
      this.datareceived=res;
      console.log(this.datareceived);
    });
  }
  viewTable=false;
  viewForm=true;
  // view()
  // {
  //   this.getData()
  // }
  
}
