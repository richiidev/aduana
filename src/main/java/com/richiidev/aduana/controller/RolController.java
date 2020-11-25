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

import com.richiidev.aduana.model.Roles;
import com.richiidev.aduana.pojo.Response;
import com.richiidev.aduana.service.RolService;

import io.swagger.annotations.Api;

@CrossOrigin
@RestController
@Api(tags = "Rol APIs")
public class RolController {

	@Autowired
	RolService service;
	
	
	@GetMapping("/rol")
	public ResponseEntity<Response> getAllRoles() {
		try {
			Object response = service.getAll();
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	
	@GetMapping("/rol/id")
	public ResponseEntity<Response> getByID(@RequestParam int id) {
		try {
			Object response = service.getRolId(id);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	
	// Api para obtener el objeto alumno por numero de control
	@GetMapping("/rol/nombre")
	public ResponseEntity<Response> getByAlumno(@RequestParam String rol) {
		try {
			Object response = service.getRol(rol);
			return new ResponseEntity<Response>(new Response(true, "Success", response), HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}
	}
	
	// api para eliminar
		@DeleteMapping("/rol/id")
		public ResponseEntity<Response> deleteByID(@RequestParam("id") int id) {
			try {
				Object response = service.getRolId(id);
				service.deleteById(id);
				return new ResponseEntity<Response>(new Response(true, "Success Eliminado", response), HttpStatus.OK);
			} catch (Exception e) {
				return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
			}
		}
		
		// api post agregar
		@PostMapping("/rol")
		public ResponseEntity<Response> addAlumnos(@RequestBody Roles rol) {
			try {
				this.service.saveRol(rol);
				Response response = new Response(true, "Success!", rol);
				return new ResponseEntity<Response>(response, HttpStatus.OK);
			} catch (Exception e) {
				Response response = new Response(false, "Error!, ..." + e.getMessage(), null);
				return new ResponseEntity<Response>(response, HttpStatus.OK);
			}
		}

		// api para modificar
		@PutMapping("/rol")
		public ResponseEntity<Response> updateAlumnos(@RequestBody Roles rol) {
			try {
				this.service.updateRol(rol);
				Response response = new Response(true, "Success!", rol);
				return new ResponseEntity<Response>(response, HttpStatus.OK);
			} catch (Exception e) {
				Response response = new Response(false, "Error!, ..." + e.getMessage(), null);
				return new ResponseEntity<Response>(response, HttpStatus.OK);
			}
		}
}
