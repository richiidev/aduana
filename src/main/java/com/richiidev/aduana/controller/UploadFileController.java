package com.richiidev.aduana.controller;

import java.io.File;
import java.io.FileFilter;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.richiidev.aduana.pojo.Response;
import com.richiidev.aduana.service.UploadFileService;

import io.swagger.annotations.Api;

@CrossOrigin
@RestController
@Api(tags = "file")
public class UploadFileController {

	String urlServidorFacturas = "C:\\Program Files\\Apache Software Foundation\\Tomcat 8.5\\webapps\\file\\";
	String urlLocalFacturas = "/usr/share/tomcat/webapps/file/";
	String urlProyecto = ".//src//main//webapp//file//";

	@Autowired
	private UploadFileService uploadFileService;

	@PostMapping("upload")
	public ResponseEntity<Response> uploadFile(@RequestParam("file") MultipartFile file) {

		try {
			if (file.isEmpty()) {
				return new ResponseEntity<Response>(new Response(true,"Success","archivo cargado"), HttpStatus.OK);
			}
			uploadFileService.saveFile(file);
			return new ResponseEntity<Response>(new Response(true,"Success","archivo cargado"), HttpStatus.OK);

		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Response>(new Response(false,"Error","Error"+e.getMessage()), HttpStatus.OK);	        
		}
	}

	/*@GetMapping("descarga")
	public ResponseEntity<Response> descargarArchivo(@RequestParam String archivo,@RequestParam String ubicacion ) throws IOException{
		System.out.println("opening connection");
		URL url = new URL(archivo);
		InputStream in = url.openStream();
		FileOutputStream fos = new FileOutputStream(new File(ubicacion));

		System.out.println("reading from resource and writing to file...");
		int length = -1;
		byte[] buffer = new byte[1024];// buffer for portion of data from connection
		while ((length = in.read(buffer)) > -1) {
			fos.write(buffer, 0, length);
		}
		fos.close();
		in.close();
		System.out.println("File downloaded");
		return new ResponseEntity<Response>(new Response(true, "Success", "File downloaded"), HttpStatus.OK);							 
	}*/

	@GetMapping("borrarArchivo")
	public ResponseEntity<Response> borrarFile(@RequestParam String url){
		try {
			File fichero = new File(urlProyecto+url);
			if (fichero.delete())
				return new ResponseEntity<Response>(new Response(true, "Success", "El fichero ha sido borrado satisfactoriamente"), HttpStatus.OK);	
			else
				return new ResponseEntity<Response>(new Response(true, "Success", "El fichero no se pudo borrar"), HttpStatus.OK);							 

		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}  	
	}
	@PostMapping("borrarMultiplesArchivos")
	public ResponseEntity<Response> borrarMultiplesArchivos(@RequestBody String[] archivo){
		try {
			String[]entries = archivo;
			for(String s: entries){
			       File currentFile = new File(""+urlProyecto,s);
			       currentFile.delete();	
			}			
			return new ResponseEntity<Response>(new Response(true, "Success", "El fichero ha sido borrado satisfactoriamente"), HttpStatus.OK);	

				
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}  	
	}

	@GetMapping("borrarTodosLosZip")
	public ResponseEntity<Response> borrarArchivos(){
		try {

			File[] archivos = new File(urlProyecto).listFiles(new FileFilter() {
				public boolean accept(File archivo) {

					if (archivo.isFile())

						return archivo.getName().endsWith(".zip" );
					return false;
				}
			});
			for (File archivo : archivos)
				archivo.delete();
			return new ResponseEntity<Response>(new Response(true, "Success", "Los archivos .zip se borraron satisfactoriamente"), HttpStatus.OK);	


		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<Response>(new Response(false, "Error " + e.getMessage(), null), HttpStatus.OK);
		}  	
	}


	@PostMapping("crearZip")
	public ResponseEntity<Response> crearZip(@RequestParam String zipFile,@RequestBody String[] srcFiles ) {  
		try {
			// create byte buffer
			byte[] buffer = new byte[1024];


			FileOutputStream fos = new FileOutputStream(urlProyecto+zipFile+".zip");


			ZipOutputStream zos = new ZipOutputStream(fos);

			for (int i=0; i < srcFiles.length; i++) {

				File srcFile = new File(srcFiles[i]);
				FileInputStream fis = new FileInputStream(urlProyecto+srcFile);


				// begin writing a new ZIP entry, positions the stream to the start of the entry data
				zos.putNextEntry(new ZipEntry(srcFile.getName()));
				System.out.println(srcFile);

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

			return new ResponseEntity<Response>(new Response(true, "Success", "se creo el zip: "+zipFile), HttpStatus.OK);	
		} catch (Exception e) {
			return new ResponseEntity<Response>(new Response(true, "Success", "ERROR: "+e), HttpStatus.OK);	
		}


	}



}
