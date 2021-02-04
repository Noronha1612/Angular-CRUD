import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(
    private headerService: HeaderService,
    private router: Router
  ) {
      this.headerService.setHeaderData({
        icon: 'storefront',
        route: '/products',
        title: 'Cadastro de Produtos'
      });
  }

  ngOnInit(): void {
  }
  
  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }

}
