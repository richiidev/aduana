package com.backend.aduana;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.util.concurrent.ExecutorService;

@SpringBootApplication
public class AduanaApplication {

	private ExecutorService executor;
	
	public static void main(String[] args)  {
		SpringApplication.run(AduanaApplication.class, args);			
	}	

	public boolean shutDown() {
		executor.shutdown();
		return true;
	}

}
