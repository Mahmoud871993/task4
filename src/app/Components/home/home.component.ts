import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Iproduct } from 'src/app/Interfaces/iproduct';
import { ProductInputComponent } from '../product-input/product-input.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    // this.recordarr.push(this.prodparent)
    //  console.log(this.recordarr); 
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.recordarr.push(this.prodparent)
    // console.log(this.recordarr); 
   }
  // ngOnInit(): void {
    
    
  // }

  prodparent: Iproduct ={
    name: "default",
    price : 0
  }
  // getdata(pro:any){
  //   console.log(pro);
  //   this.prodparent.name = pro.name;
  //   this.prodparent.price = pro.price;

    recordarr: Iproduct[] = []
    
  // }
  getinput(msg: any)
  {
    console.log(msg);
    console.log("from parent");
    
    let newProduct = {
      name: msg.name,
      price: msg.price
    };
  
    // Push the new object 
    this.recordarr.push(newProduct);
    console.log(this.recordarr);
    
    
  }
  
  }



