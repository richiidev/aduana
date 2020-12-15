package com.richiidev.aduana.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.richiidev.aduana.model.RFC;
import com.richiidev.aduana.model.Usuario;
import com.richiidev.aduana.repository.RFCRepo;
import com.richiidev.aduana.repository.UsuarioRepo;



@Service
public class UsuarioService {

	@Autowired
	UsuarioRepo repo; 
	
	@Autowired
	RFCRepo repoRfc;
	
	public List<Usuario> getAll(){
		return this.repo.findAll();
	}
	
	public List<Usuario> getUserId(int id){
		return this.repo.findById(id);
	}
	public List<Usuario> getUsuarioConRFC(String rfc){
		return this.repo.findByRfc(rfc);
	}
	
	public List<RFC> getUsuarioRFC(String rfc){
		 return this.repoRfc.getUserRFC(rfc);
	}
	
	public List<Usuario> getUserByPassword(String rfc, String password){
		return this.repo.getUserpasswordRFC(rfc, password);
	}
	
	public void deleteById(int id) {
		this.repo.deleteById(id);
	}
	
	public void save(Usuario factura) {
		this.repo.save(factura);
	}
	
	public void update(Usuario factura) {
		this.repo.save(factura);
	}
	public void updateUsuario(String nombre, String apellidos,String correo,String rfc,int id) {
		this.repo.updateUsuario(nombre, apellidos, correo, rfc, id);
	}
	
	public void updatePassword(String password,int id) {
		this.repo.updatePassword(password, id);
	}
	public void updateRol(int idrol,int id) {
		this.repo.updateRol(idrol, id);
	}
}
