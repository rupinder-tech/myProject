package com.product.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.product.demo.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

	public Product findByCategory(String category);
}
