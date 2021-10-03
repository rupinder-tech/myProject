import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from '../Bean/Product';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [DecimalPipe]
})
export class ProductsComponent implements OnInit {

  product: Product[];
  deleteId;

  filter = new FormControl('');

  constructor(private service:ProductService, pipe: DecimalPipe,
              private router: Router, private modalService: NgbModal) { 
  }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe(data => {
        console.log(data)
        this.product = data;
    })
  }

  editProduct(id) {
    this.router.navigateByUrl("detail/" + id);
  }

  deleteProduct(){
    this.service.deleteById(this.deleteId).subscribe();
    this.modalService.dismissAll();
    this.goToDashboard();
  }

  openModal(deleteModal,id) {
    this.modalService.open(deleteModal, { size: 'md' });
    this.deleteId = id;
    console.log(id)
  }

  goToDashboard(){
    this.router.navigateByUrl("/dashboard");
  }

}
