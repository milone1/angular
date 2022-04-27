import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Product } from '../interfaces/product.interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(): void {
    console.log('click en en elbutton', this.product);
    this.addToCart.emit(this.product);
  }
} 

