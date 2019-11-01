import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular8';
  value=2;  
  childValue:any;
  showreset=false;

  getstock()
  {
    this.childValue = this.value
  }
  preset(event)
  {
    this.showreset=event;    
  }
}
