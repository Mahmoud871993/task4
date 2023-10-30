import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Iproduct } from 'src/app/Interfaces/iproduct';

@Component({
  selector: 'app-product-output',
  templateUrl: './product-output.component.html',
  styleUrls: ['./product-output.component.css']
})
export class ProductOutputComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    //this.prodout.push(this.prodout)
    //console.log(this.records);
    
    
    
  }

  


  @Input() prodout: Iproduct[] = [
    { name: "default", price: 0 }
  ];
  

  

}
