import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Bean/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: ProductService,
              private router: Router) {}

  product: Product;
  name;
  category;
  description;
  units;
  prodId;
  id;

  ngOnInit(): void {
     this.id = this.route.snapshot.paramMap.get('id');
    this.service.getById(this.id).subscribe((data) => {
      this.name = data.name;
      this.category = data.category;
      this.description = data.description;
      this.units = data.units
      this.prodId = data.id
    });
  }

  onSubmit(): void {
    this.product = new Product(
      this.name,
      this.category,
      this.description,
      this.units
    );
    this.service.editProduct(this.product, this.prodId).subscribe();
    this.router.navigateByUrl("/product");
  }
}
