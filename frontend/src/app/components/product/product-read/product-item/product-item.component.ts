import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css', '../product-read.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input('product') product: Product;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToUpdate() {
    this.router.navigate([`/products/update/${this.product.id}`]);
  }

  navigateToDelete() {
    this.router.navigate([`/products/delete/${this.product.id}`]);
  }
}
