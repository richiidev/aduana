package com.richiidev.aduana.repository;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.richiidev.aduana.model.Facturas;



public interface FacturasRepo extends JpaRepository<Facturas, Serializable> {

	public List<Facturas> findAll();
	public List<Facturas> findById(int id);
	public List<Facturas> findByFactura(String factura);
	public List<Facturas> findByRfc(String rfc);
}
