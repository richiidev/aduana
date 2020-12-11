package com.richiidev.aduana.repository;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.richiidev.aduana.model.RFC;

public interface RFCRepo extends JpaRepository<RFC, Serializable> {

	@Query(value = "Select rfc from usuario where rfc = ?;", 
			nativeQuery = true) List<RFC> getUserRFC(String rfc);
}
