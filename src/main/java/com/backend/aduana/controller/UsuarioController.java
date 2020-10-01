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

import com.backend.aduana.model.Usuario;
import com.backend.aduana.pojo.Response;
import com.backend.aduana.service.UsuarioService;

import io.swagger.annotations.Api;

@CrossOrigin
@RestController
@Api(tags = "Usuarios")
public class UsuarioController {

	@Autowired
	UsuarioService service;
	

	@GetMapping("/usuario")
	public ResponseEntity<Response> getAll() {
		try {
			Object response = service.getAll();
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	
	@GetMapping("/usuario/id")
	public ResponseEntity<Response> getByID(@RequestParam int id) {
		try {
			Object response = service.getUserId(id);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	
	@GetMapping("/usuario/nombre")
	public ResponseEntity<Response> getByRFC(@RequestParam String rfc) {
		try {
			Object response = service.getUsuarioRFC(rfc);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	
	@GetMapping("/usuario/login")
	public ResponseEntity<Response> getByRFAndPassword(@RequestParam String rfc,@RequestParam String password) {
		try {
			Object response = service.getUserByPassword(rfc, password);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	
		@DeleteMapping("/usuario/id")
		public ResponseEntity<Response> deleteByID(@RequestParam("id") int id) {
			try {
				Object response = service.getUserId(id);
				service.deleteById(id);
				return new ResponseEntity<Response>(new Response(true, "Success Eliminado", response), HttpStatus.OK);
			} catch (Exception e) {

				return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
			}
		}
		
		@PostMapping("/usuario")
		public ResponseEntity<Response> add(@RequestBody Usuario usuario) {
			try {
				this.service.save(usuario);
				Response response = new Response(true, "Success!", usuario);
				return new ResponseEntity<Response>(response, HttpStatus.OK);

			} catch (Exception e) {
				Response response = new Response(false, "Error!, ..." + e.getMessage(), null);
				return new ResponseEntity<Response>(response, HttpStatus.OK);
			}
		}

		@PutMapping("/usuario")
		public ResponseEntity<Response> update(@RequestBody Usuario usuario) {
			try {
				this.service.update(usuario);
				Response response = new Response(true, "Success!", usuario);
				return new ResponseEntity<Response>(response, HttpStatus.OK);

			} catch (Exception e) {
				Response response = new Response(false, "Error!, ..." + e.getMessage(), null);
				return new ResponseEntity<Response>(response, HttpStatus.OK);
			}
		}
}
