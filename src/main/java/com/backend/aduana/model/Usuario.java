package com.backend.aduana.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "usuario", uniqueConstraints = {   @UniqueConstraint(columnNames = {"rfc"}), @UniqueConstraint(columnNames = {"correo"})})
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String nombre;
	String apellidos;
	String rfc;
	String password;
	String correo;
	@ManyToOne
	@JoinColumn(name = "idrol", table = "usuario")
	Roles idrol;
}
