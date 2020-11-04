package com.backend.aduana;



import java.io.File;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AduanaApplication {

	public static void main(String[] args) {
		SpringApplication.run(AduanaApplication.class, args);
		File fichero = new File("/home/richiidev/Descargas/prueba.zip");
		if (fichero.delete())
			   System.out.println("El fichero ha sido borrado satisfactoriamente");
			else
			   System.out.println("El fichero no puede ser borrado");

	}
}
