package com.richiidev.aduana.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.richiidev.aduana.model.Mail;
import com.richiidev.aduana.pojo.Response;
import com.richiidev.aduana.service.SendEmailsService;

import io.swagger.annotations.Api;

@CrossOrigin
@RestController
@Api(tags = "Emails")
public class SendEmailController {

	//Mail mail = new Mail();
	@Autowired
	SendEmailsService service;

	@PostMapping("/sendEmails")
	public ResponseEntity<Response> sendEmail(@RequestBody Mail mail){
		try {
			this.service.sendEmail(mail);
			Response response = new Response(true, "Success!", mail);
			return new ResponseEntity<Response>(response, HttpStatus.OK);
		} catch (Exception e) {
			Response response = new Response(false, "Error!, ..." + e.getMessage(), null);
			return new ResponseEntity<Response>(response, HttpStatus.OK);
		}
	}

}
