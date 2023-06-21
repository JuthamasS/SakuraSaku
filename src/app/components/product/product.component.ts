import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public ProductID: string;
  public ProductName: string;
  public ProductPrice: number;

  constructor(){
    this.ProductID = '001';
    this.ProductName = 'AAA';
    this.ProductPrice = 350;
  }

  ngOnInit() {
    this.ProductID = '001';
    this.ProductName = 'AAA';
    this.ProductPrice = 350;
  }
}
