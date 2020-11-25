package com.richiidev.aduana.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.richiidev.aduana.model.Roles;
import com.richiidev.aduana.repository.RolRepo;







@Service
public class RolService {

	@Autowired
	RolRepo repo;
	
	public List<Roles> getAll(){
		return this.repo.findAll();
	}
	
	public List<Roles> getRolId(int id){
		return this.repo.findById(id);
	}
	
	public List<Roles> getRol(String rol){
		return this.repo.findByRol(rol);
	}
	
	public void deleteById(int id) {
		this.repo.deleteById(id);
	}
	
	public void saveRol(Roles rol) {
		this.repo.save(rol);
	}
	
	public void updateRol(Roles rol) {
		this.repo.save(rol);
	}
}
