package com.richiidev.aduana.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class UploadFileService {
	
	String urlServidorFacturas = "C:\\Program Files\\Apache Software Foundation\\Tomcat 8.5\\webapps\\file\\";
	String urlLocalFacturas = "/usr/share/tomcat/webapps/file/";
	String urlProyecto = ".//src//main//webapp//file//";

	    public void saveFile(MultipartFile file) throws IOException {
	        if(!file.isEmpty()){ 
	            byte[] bytes = file.getBytes();
	            Path path = Paths.get(urlProyecto + file.getOriginalFilename());
	            Files.write(path,bytes);
	        }
	    }
	    
	    
}
