package com.backend.aduana;

import org.apache.commons.daemon.DaemonContext;
import org.apache.commons.daemon.DaemonInitException;
import org.springframework.boot.SpringApplication;

public class DaemonRun {
private AduanaApplication aduana;
	
	public void destroy() {
	}
	
	/**
	 * It's the first method execute it when we start the daemon
	 */
	public void init(DaemonContext arg0) throws DaemonInitException, Exception {
		// If we need to set arguments we use this variable when running the daemon
		// String [] arguments = arg0.getArguments();
		SpringApplication.run(AduanaApplication.class);
		System.out.println("INIT---------------------------------------------------------------------");
	}

	/**
	 * This method is executed when we type ./start.sh
	 */
	public void start() throws Exception {		
		System.out.println("START---------------------------------------------------------------------");
	}

	/**
	 * This method is executed when we type ./stop.sh
	 */
	public void stop() throws Exception {
		aduana.shutDown();
		System.out.println("STOP---------------------------------------------------------------------");
	}

}
