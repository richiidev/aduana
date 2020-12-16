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

import com.richiidev.aduana.model.Pagos;
import com.richiidev.aduana.pojo.Response;
import com.richiidev.aduana.service.PagosService;

import io.swagger.annotations.Api;

@CrossOrigin
@RestController
@Api(tags = "Pagos")
public class PagosController {

	@Autowired
	PagosService service;
	UploadFileController archivos = new UploadFileController(); 
	String urlServidorFacturas = "C:\\Program Files\\Apache Software Foundation\\Tomcat 8.5\\webapps\\file\\";
	String urlLocalFacturas = "/usr/share/tomcat/webapps/file/";
	

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

	@GetMapping("/pagos/pago")
	public ResponseEntity<Response> getByPago(@RequestParam String factura) {
		try {
			Object response = service.getPagosFolio(factura);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	@GetMapping("/pagos/paginas")
	public ResponseEntity<Response> getByPaginas(@RequestParam int rango1,@RequestParam int rango2) {
		try {
			Object response = service.getPaginasPagos(rango1, rango2);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	@GetMapping("/pagos/fecha")
	public ResponseEntity<Response> getPagosByDate(@RequestParam String rango1,@RequestParam String rango2) {
		try {
			Object response = service.getPagosByDate(rango1, rango2);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	
	@DeleteMapping("/pagos/fecha")
	public ResponseEntity<Response> deletePagosByDate(@RequestParam String rango1,@RequestParam String rango2) {
		try {
			Object response = service.getPagosByDate(rango1, rango2);
			service.deletePagosByDate(rango1, rango2);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	@DeleteMapping("/pagos/folio")
	public ResponseEntity<Response> deletePagoByFolio(@RequestParam String folio) {
		try {
			Object response = service.getPagosFolio(folio);
			archivos.borrarFile(urlServidorFacturas+folio+".pdf");
			archivos.borrarFile(urlServidorFacturas+folio+".xml");
			service.deletePagosByFolio(folio);
			
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

	@GetMapping("/pagos/agente")
	public ResponseEntity<Response> getByAgente(@RequestParam String agente) {
		try {
			Object response = service.getPagosAgente(agente);
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
