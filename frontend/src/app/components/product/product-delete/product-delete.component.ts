import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      const productId = Number(this.route.snapshot.paramMap.get('id'));
      for(let product of products) {
        if ( product.id === productId ) this.product = product;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

  deleteProduct(): void {
    this.productService.delete(this.product).subscribe(() => {
      this.productService.showMessage('Produto deletado!');
      this.router.navigate(['/products']);
    });
  }

}
