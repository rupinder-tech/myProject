package com.product.demo.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product.demo.entity.Product;
import com.product.demo.repository.ProductRepository;

@Service
@Transactional
public class ProductService {

	@Autowired
	private ProductRepository repo;
	
	public List<Product> getAll() {
		return repo.findAll();
	}
	
	public Product getById(Integer id) {
		Optional<Product> prod = repo.findById(id);
		Product pd = new Product();
		if(prod.isPresent()) {
			pd = prod.get();
		}
		return pd;
	}
	
	public void deleteById(Integer id) {
		repo.deleteById(id);
	}
	
	public void addProduct(Product prod) {
		repo.save(prod);
	}
	
	public Product findById(Integer id) {
		
		Optional<Product> pd = repo.findById(id);
		Product prod = new Product();
		if(pd.isPresent()) {
			prod = pd.get();
		}
		return prod;
	}
}
