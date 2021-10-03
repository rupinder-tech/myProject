import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Bean/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent implements OnInit {
  name;
  category;
  description;
  units;
  product: Product;

  constructor(private service: ProductService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.product = new Product(
      this.name,
      this.category,
      this.description,
      this.units
    );
    this.service.addProduct(this.product).subscribe();
    this.router.navigateByUrl("")
  }
}
