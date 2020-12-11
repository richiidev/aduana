package com.richiidev.aduana.repository;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.richiidev.aduana.model.Facturas;
import com.richiidev.aduana.model.Usuario;



public interface FacturasRepo extends JpaRepository<Facturas, Serializable> {

	public List<Facturas> findAll();
	public List<Facturas> findById(int id);
	public List<Facturas> findByFactura(String factura);
	public List<Facturas> findByRfc(String rfc);
	public List<Facturas> findByAgente(String agente);
	
	@Query(value = "select * from factura ORDER BY id OFFSET :rango1 ROWS FETCH NEXT :rango2 ROWS ONLY;", 
			nativeQuery = true) List<Facturas> getPaginas(@Param("rango1") int rango1,@Param("rango2") int rango2);
}
