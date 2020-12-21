package com.richiidev.aduana.repository;

import java.io.Serializable;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.richiidev.aduana.model.Usuario;



public interface UsuarioRepo extends JpaRepository<Usuario, Serializable> {

	public List<Usuario> findAll();
	public List<Usuario> findById(int id);
	public List<Usuario> findByRfc(String rfc);
	public List<Usuario> findByCorreo(String correo);

	
	@Query(value = "Select * from usuario where rfc = ? and password = ?;", 
			nativeQuery = true) List<Usuario> getUserpasswordRFC(String rfc, String password);
	
	@Modifying
	@Transactional
	@Query(value = " UPDATE usuario SET nombre = ?, apellidos = ?, correo =?, rfc =? where id = ?; ", 
			nativeQuery = true) void updateUsuario(String nombre, String apellidos,String correo,String rfc,int id);
	@Modifying
	@Transactional
	@Query(value = " UPDATE usuario SET password =? where id = ?; ", 
			nativeQuery = true) void updatePassword(String password, int id);
	@Modifying
	@Transactional
	@Query(value = " UPDATE usuario SET idrol =? where id = ?; ", 
			nativeQuery = true) void updateRol(int idrol, int id);
}
