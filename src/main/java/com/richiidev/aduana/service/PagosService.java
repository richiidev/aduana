package com.richiidev.aduana.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.richiidev.aduana.model.Facturas;
import com.richiidev.aduana.model.Pagos;
import com.richiidev.aduana.repository.PagosRepo;




@Service
public class PagosService {

	@Autowired
	PagosRepo repo;
	

	public List<Pagos> getAll(){
		return this.repo.findAll();
	}
	
	public List<Pagos> getPagosId(int id){
		return this.repo.findById(id);
	}
	public List<Pagos> getPaginasPagos(int rango1,int rango2){
		return this.repo.getPaginas(rango1, rango2);
	}
	public List<Pagos> getPagosByDate(String rango1,String rango2){
		return this.repo.getPagosByDate(rango1, rango2);
	}
	public List<Pagos> getPagosByDateRfc(String rfc, String rango1,String rango2){
		return this.repo.getPagosByDateAndRfc(rfc, rango1, rango2);
	}
	public List<Pagos> getPagosByDateAgente(String agente, String rango1,String rango2){
		return this.repo.getPagosByDateAndAgente(agente, rango1, rango2);
	}
	public List<Pagos> getPagosFolio(String factura){
		return this.repo.findByFactura(factura);
	}
	
	public List<Pagos> getPagosRfc(String rfc){
		return this.repo.findByRfc(rfc);
	}
	
	public List<Pagos> getPagosAgente(String agente){
		return this.repo.findByAgente(agente);
	}
	
	public void deletePagosByFolio(String folio) {
		this.repo.deleteFolio(folio);
	}
	public void deleteById(int id) {
		this.repo.deleteById(id);
	}
	
	public void save(Pagos factura) {
		this.repo.save(factura);
	}
	
	public void update(Pagos factura) {
		this.repo.save(factura);
	}
	public void deletePagosByDate(String rango1,String rango2){
		this.repo.deleteByDate(rango1, rango2);
	}
}
