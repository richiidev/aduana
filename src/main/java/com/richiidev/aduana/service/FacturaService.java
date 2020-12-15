package com.richiidev.aduana.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.richiidev.aduana.model.Facturas;
import com.richiidev.aduana.repository.FacturasRepo;



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
	public List<Facturas> getPaginasFactura(int rango1,int rango2){
		return this.repo.getPaginas(rango1, rango2);
	}
	public List<Facturas> getPaginasByDate(String rango1,String rango2){
		return this.repo.getFacturasByDate(rango1, rango2);
	}
	
	public List<Facturas> getFacturaFolio(String factura){
		return this.repo.findByFactura(factura);
	}
	public List<Facturas> getFacturasRfc(String rfc){
		return this.repo.findByRfc(rfc);
	}
	public List<Facturas> getFacturasByAgente(String agente){
		return this.repo.findByAgente(agente);
	}
	
	public void deleteById(int id) {
		this.repo.deleteById(id);
	}
	public void deleteFacturaByFolio(String folio) {
		this.repo.deleteFolio(folio);
	}
	
	public void save(Facturas factura) {
		this.repo.save(factura);
	}
	
	public void update(Facturas factura) {
		this.repo.save(factura);
	}
	public void deletePaginasByDate(String rango1,String rango2){
		this.repo.deleteByDate(rango1, rango2);
	}
}
