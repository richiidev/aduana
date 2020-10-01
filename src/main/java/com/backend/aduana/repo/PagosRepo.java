package com.backend.aduana.repo;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.aduana.model.Pagos;

public interface PagosRepo extends JpaRepository<Pagos, Serializable> {

	public List<Pagos> findAll();
	public List<Pagos> findById(int id);
	public List<Pagos> findByFactura(String factura);
	public List<Pagos> findByRfc(String rfc);
	
}
