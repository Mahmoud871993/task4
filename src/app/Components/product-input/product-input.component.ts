import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Iproduct } from 'src/app/Interfaces/iproduct';

@Component({
  selector: 'app-product-input',
  templateUrl: './product-input.component.html',
  styleUrls: ['./product-input.component.css']
})
export class ProductInputComponent implements OnInit {
  ngOnInit(): void {
    //this.myevent.emit(this.prod);
    
   }


  ngOnChanges(changes: SimpleChanges): void {
   
   
  }
  
  @Input() name:string =''
  @Input() price: number = 0;

  prod:Iproduct ={
    name:"default",
    price:0
  }
  //prodlist: Iproduct [] = []
 

  get isValidName(){

    return this.name !='' && this.name.length > 5
  }

  get isValidAge(){
    return this.price >=1000 && this.price <=9000
  }

  savedata()
  {
    this.prod.name = this.name;
    this.prod.price = this.price;
    console.log(this.prod);
    this.myevent.emit(this.prod);
    //this.prodlist.push(this.prod)
    //console.log(this.prodlist);
    
    

    
  }
  @Output()
  myevent:EventEmitter<Iproduct> = new EventEmitter<Iproduct>()

}
