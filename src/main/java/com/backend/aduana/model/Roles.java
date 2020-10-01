package com.backend.aduana.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
@Table(name = "roles", uniqueConstraints = {   @UniqueConstraint(columnNames = {"rol"})})
public class Roles {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id; 
	String rol;
	
}
