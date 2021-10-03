package com.product.demo.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.product.demo.entity.Product;
import com.product.demo.service.ProductService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ProductController {
	
	@Autowired
	private ProductService service;

	@GetMapping("/product")
	public List<Product> getAll() {
		return service.getAll();
	}
	
	@GetMapping("/product/{id}")
	public ResponseEntity<Product> get(@PathVariable Integer id) {
		Product pd = service.getById(id);
		return new ResponseEntity<Product>(pd, HttpStatus.OK);
	}
	
	@PutMapping("/product/{id}")
	public void updateProduct(@RequestBody Product prod, @PathVariable Integer id) {
			Product product = service.findById(id);
			if(product != null) {
				product.setCategory(prod.getCategory());
				product.setDescription(prod.getDescription());
				product.setName(prod.getName());
				product.setUnits(prod.getUnits());
				service.addProduct(product);
			}
	}
	
	@PostMapping("/product")
	public void addProduct(@RequestBody Product prod) {
		service.addProduct(prod);
	}
	
	@DeleteMapping("/product/{id}")
	public void deleteProduct(@PathVariable Integer id) {
		service.deleteById(id);
	}
}
