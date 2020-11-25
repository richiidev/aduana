package com.richiidev.aduana.model;


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
@Table(name = "pagos", uniqueConstraints = {   @UniqueConstraint(columnNames = {"factura"})})
public class Pagos {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String factura;
	String rfc;
	String awb;
	String hbw;
	String pedimento;
	String fecha;
	String almacen;
	String agente;
}
