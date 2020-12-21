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

import com.richiidev.aduana.model.Usuario;
import com.richiidev.aduana.pojo.Response;
import com.richiidev.aduana.service.UsuarioService;

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
	@GetMapping("/usuario/rfc")
	public ResponseEntity<Response> getByRFC(@RequestParam String rfc) {
		try {
			Object response = service.getUsuarioConRFC(rfc);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	@GetMapping("/usuario/correo")
	public ResponseEntity<Response> getByCorreo(@RequestParam String correo) {
		try {
			Object response = service.getUsuarioCorreo(correo);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}

	@GetMapping("/usuario/rfcValidacion")
	public ResponseEntity<Response> getByRFCExiste(@RequestParam String rfc) {
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
	@PutMapping("/usuario/info")
	public ResponseEntity<Response> updateUsuario(@RequestParam String nombre, @RequestParam String apellidos, 
			@RequestParam String correo,@RequestParam String rfc,@RequestParam int id) {
		try {
			this.service.updateUsuario(nombre, apellidos, correo, rfc, id);
			Object response = service.getUserId(id);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	@PutMapping("/usuario/password")
	public ResponseEntity<Response> updateUsuario(@RequestParam String password,@RequestParam int id) {
		try {
			this.service.updatePassword(password, id);
			Object response = service.getUserId(id);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	@PutMapping("/usuario/rol")
	public ResponseEntity<Response> updateUsuario(@RequestParam int idrol,@RequestParam int id) {
		try {
			this.service.updateRol(idrol, id);
			Object response = service.getUserId(id);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
}
