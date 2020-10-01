package com.backend.aduana.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.aduana.model.Facturas;
import com.backend.aduana.model.Facturas;
import com.backend.aduana.repo.FacturasRepo;

@Service
public class FacturaService {

	@Autowired
	FacturasRepo repo;
	

	public List<Facturas> getAll(){
		return this.repo.findAll();
	}
	
	public List<Facturas> getFacturaId(int id){
		return this.repo.findById(id);
	}
	
	public List<Facturas> getFacturaFolio(String factura){
		return this.repo.findByFactura(factura);
	}
	public List<Facturas> getFacturasRfc(String rfc){
		return this.repo.findByRfc(rfc);
	}
	
	public void deleteById(int id) {
		this.repo.deleteById(id);
	}
	
	public void save(Facturas factura) {
		this.repo.save(factura);
	}
	
	public void update(Facturas factura) {
		this.repo.save(factura);
	}
}
