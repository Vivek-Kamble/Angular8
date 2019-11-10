import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent{

  gender='male';
  qualification='selectedQualification';
  submittedStatus=false;
  submit(r)
  {
    console.log(r.value)
    this.submittedStatus=true;
  }

}
