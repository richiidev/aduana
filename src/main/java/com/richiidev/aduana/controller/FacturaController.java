package com.richiidev.aduana.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.richiidev.aduana.model.Facturas;
import com.richiidev.aduana.pojo.Response;
import com.richiidev.aduana.service.FacturaService;

import io.swagger.annotations.Api;

@CrossOrigin
@RestController
@Api(tags = "Factura")
public class FacturaController {
	
	@Autowired
	FacturaService service;
	
	@GetMapping("/facturas")
	public ResponseEntity<Response> getAll() {
		try {
			Object response = service.getAll();
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	
	@GetMapping("/facturas/id")
	public ResponseEntity<Response> getByID(@RequestParam int id) {
		try {
			Object response = service.getFacturaId(id);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	
	@GetMapping("/facturas/factura")
	public ResponseEntity<Response> getByFactura(@RequestParam String folio) {
		try {
			Object response = service.getFacturaFolio(folio);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	@GetMapping("/facturas/paginas")
	public ResponseEntity<Response> getByPaginas(@RequestParam int rango1,@RequestParam int rango2) {
		try {
			Object response = service.getPaginasFactura(rango1, rango2);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	
	@GetMapping("/facturas/rfc")
	public ResponseEntity<Response> getByRfc(@RequestParam String rfc) {
		try {
			Object response = service.getFacturasRfc(rfc);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	@GetMapping("/facturas/agente")
	public ResponseEntity<Response> getByAgente(@RequestParam String agente) {
		try {
			Object response = service.getFacturasByAgente(agente);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	
	
	
		@DeleteMapping("/facturas/id")
		public ResponseEntity<Response> deleteByID(@RequestParam("id") int id) {
			try {
				Object response = service.getFacturaId(id);
				service.deleteById(id);
				return new ResponseEntity<Response>(new Response(true, "Success Eliminado", response), HttpStatus.OK);
			} catch (Exception e) {

				return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
			}
		}
		
		@PostMapping("/facturas")
		public ResponseEntity<Response> add(@RequestBody Facturas facturas) {
			try {
				this.service.save(facturas);
				Response response = new Response(true, "Success!", facturas);
				return new ResponseEntity<Response>(response, HttpStatus.OK);

			} catch (Exception e) {
				Response response = new Response(false, "Error!, ..." + e.getMessage(), null);
				return new ResponseEntity<Response>(response, HttpStatus.OK);
			}
		}

		@PutMapping("/facturas")
		public ResponseEntity<Response> update(@RequestBody Facturas facturas) {
			try {
				this.service.update(facturas);
				Response response = new Response(true, "Success!", facturas);
				return new ResponseEntity<Response>(response, HttpStatus.OK);

			} catch (Exception e) {
				Response response = new Response(false, "Error!, ..." + e.getMessage(), null);
				return new ResponseEntity<Response>(response, HttpStatus.OK);
			}
		}
	

}
