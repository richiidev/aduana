package com.backend.aduana.controller;

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

import com.backend.aduana.model.Pagos;
import com.backend.aduana.pojo.Response;
import com.backend.aduana.service.PagosService;

import io.swagger.annotations.Api;

@CrossOrigin
@RestController
@Api(tags = "Pagos")
public class PagosController {

	@Autowired
	PagosService service;
	
	@GetMapping("/pagos")
	public ResponseEntity<Response> getAll() {
		try {
			Object response = service.getAll();
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	
	@GetMapping("/pagos/id")
	public ResponseEntity<Response> getByID(@RequestParam int id) {
		try {
			Object response = service.getPagosId(id);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	
	@GetMapping("/pagos/factura")
	public ResponseEntity<Response> getByFactura(@RequestParam String factura) {
		try {
			Object response = service.getPagosFolio(factura);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	@GetMapping("/pagos/rfc")
	public ResponseEntity<Response> getByRfc(@RequestParam String rfc) {
		try {
			Object response = service.getPagosRfc(rfc);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	
	
		@DeleteMapping("/pagos/id")
		public ResponseEntity<Response> deleteByID(@RequestParam("id") int id) {
			try {
				Object response = service.getPagosId(id);
				service.deleteById(id);
				return new ResponseEntity<Response>(new Response(true, "Success Eliminado", response), HttpStatus.OK);
			} catch (Exception e) {

				return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
			}
		}
		
		@PostMapping("/pagos")
		public ResponseEntity<Response> add(@RequestBody Pagos pagos) {
			try {
				this.service.save(pagos);
				Response response = new Response(true, "Success!", pagos);
				return new ResponseEntity<Response>(response, HttpStatus.OK);

			} catch (Exception e) {
				Response response = new Response(false, "Error!, ..." + e.getMessage(), null);
				return new ResponseEntity<Response>(response, HttpStatus.OK);
			}
		}

		@PutMapping("/pagos")
		public ResponseEntity<Response> update(@RequestBody Pagos pagos) {
			try {
				this.service.update(pagos);
				Response response = new Response(true, "Success!", pagos);
				return new ResponseEntity<Response>(response, HttpStatus.OK);

			} catch (Exception e) {
				Response response = new Response(false, "Error!, ..." + e.getMessage(), null);
				return new ResponseEntity<Response>(response, HttpStatus.OK);
			}
		}
	
}
