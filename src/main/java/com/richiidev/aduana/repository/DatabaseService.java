package com.richiidev.aduana.repository;

import java.sql.Connection;
import java.sql.ResultSet;

public interface DatabaseService {

	public ResultSet getResultSet(Connection connection, String query);

	public Integer updateQuery(Connection connection, String query);
}
