package com.richiidev.aduana.repository;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.richiidev.aduana.model.Roles;



public interface RolRepo extends JpaRepository<Roles, Serializable>{

	public List<Roles> findAll();
	public List<Roles> findById(int id);
	public List<Roles> findByRol(String rol);
}
