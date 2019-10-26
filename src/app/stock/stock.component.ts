import { Component, OnInit ,Input, OnChanges, SimpleChanges,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnChanges {

  @Input() stockvalue
  stock:number=20
  msg:string;
  inAlert=false;
  outAlert=false;

  @Output() boo=new EventEmitter;
  @Output() astock=this.stock;
  ngOnChanges(changes:SimpleChanges){
    if(changes.stockvalue.currentValue){
      this.stock=this.stock-this.stockvalue;
      if(this.stock >= 0)
      {
      this.msg = "In stock";
      this.inAlert=true;
      this.outAlert=false;
      console.log(this.stock)
      }
      else{
      this.msg = "Out of stock";
      this.outAlert=true;
      this.inAlert=false;
      this.boo.emit(true);
      }
    }
  }

}
