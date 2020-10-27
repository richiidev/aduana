package com.backend.aduana.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
}
