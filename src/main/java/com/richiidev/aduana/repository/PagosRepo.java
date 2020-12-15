package com.richiidev.aduana.repository;


import java.io.Serializable;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.richiidev.aduana.model.Pagos;



public interface PagosRepo extends JpaRepository<Pagos, Serializable> {

	public List<Pagos> findAll();
	public List<Pagos> findById(int id);
	public List<Pagos> findByFactura(String factura);
	public List<Pagos> findByRfc(String rfc);
	public List<Pagos> findByAgente(String agente);
	
	@Query(value = "select * from pagos ORDER BY id OFFSET :rango1 ROWS FETCH NEXT :rango2 ROWS ONLY;", 
			nativeQuery = true) List<Pagos> getPaginas(@Param("rango1") int rango1,@Param("rango2") int rango2);
	

	@Query(value = "select * from pagos where fecha >= ? and fecha <= ?;", 
			nativeQuery = true) List<Pagos> getPagosByDate(String rango1,String rango2);
	
	
	@Modifying
	@Transactional
	@Query(value = "delete from pagos where factura = :folio ;", 
			nativeQuery = true) void deleteFolio(@Param("folio") String folio);
	
	@Modifying
	@Transactional
	@Query(value = "delete  from pagos where where fecha >= :rango1 and fecha <= :rango2;", 
			nativeQuery = true) void deleteByDate(@Param("rango1") String rango1,@Param("rango2") String rango2);
	
	
}
