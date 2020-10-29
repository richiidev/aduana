package com.backend.aduana.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.backend.aduana.pojo.Response;
import com.backend.aduana.service.UploadFileService;

import io.swagger.annotations.Api;

@CrossOrigin
@RestController
@Api(tags = "file")
public class UploadFileController {
	
      

	 @Autowired
	    private UploadFileService uploadFileService;

	    @PostMapping("upload")
	    public ResponseEntity<Response> uploadFile(@RequestParam("file") MultipartFile file) {
	        if (file.isEmpty()) {
	            return new ResponseEntity<Response>(new Response(true,"archivo cargado",null), HttpStatus.OK);
	        }

	        try {
	            uploadFileService.saveFile(file);
	        } catch (IOException e) {
	            e.printStackTrace();
	        }

            return new ResponseEntity<Response>(new Response(true,"archivo cargado",null), HttpStatus.OK);
	    }
       
	    @PostMapping("zip")
	    public String convertirZip(@RequestParam String zipFile,@RequestParam String[] srcFiles) {
	    	try {
	             
	            // create byte buffer
	            byte[] buffer = new byte[1024];
	 
	            FileOutputStream fos = new FileOutputStream(zipFile);
	 
	            ZipOutputStream zos = new ZipOutputStream(fos);
	             
	            for (int i=0; i < srcFiles.length; i++) {
	                 
	                File srcFile = new File(srcFiles[i]);
	 
	                FileInputStream fis = new FileInputStream(srcFile);
	                
	 
	                // begin writing a new ZIP entry, positions the stream to the start of the entry data
	                zos.putNextEntry(new ZipEntry(srcFile.getName()));
	                
	                 
	                int length;
	 
	                while ((length = fis.read(buffer)) > 0) {
	                    zos.write(buffer, 0, length);
	                }
	 
	                zos.closeEntry();
	 
	                // close the InputStream
	                fis.close();
	                 
	            }
	 
	            // close the ZipOutputStream
	            zos.close();
	             
	        }
	        catch (IOException ioe) {
	            System.out.println("Error creating zip file: " + ioe);
	        }
	    	return "zip creado";
	    }
        
         
}