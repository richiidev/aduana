package com.backend.aduana.repo;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.backend.aduana.model.Usuario;

public interface UsuarioRepo extends JpaRepository<Usuario, Serializable> {

	public List<Usuario> findAll();
	public List<Usuario> findById(int id);
	public List<Usuario> findByRfc(String rfc);
	
	@Query(value = "Select * from usuario where rfc = ? and password = ?;", 
			nativeQuery = true) List<Usuario> getUserpasswordRFC(String rfc, String password);
	
	@Query(value = " UPDATE usuario SET apellidos = ?, correo =? where id = ?; ", 
			nativeQuery = true) List<Usuario> updateUsuario(String rfc, String password);
}
