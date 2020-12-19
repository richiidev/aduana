package com.richiidev.aduana.service;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Logger;

import com.richiidev.aduana.repository.DatabaseService;


public class DatabaseServiceImpl implements DatabaseService {

	private static final Logger LOGGER = Logger.getLogger(DatabaseServiceImpl.class.getName());

	@Override
	public ResultSet getResultSet(Connection connection, String query) {
		try {
			Statement stmt = connection.createStatement();

			ResultSet resultSet = stmt.executeQuery(query);

			return resultSet;

		} catch (SQLException sqle) {
			LOGGER.warning("getResultSet : " + sqle.getMessage());
		}

		return null;
	}

	public Integer updateQuery(Connection connection, String query) {
		try {
			Statement stmt = connection.createStatement();
			return Integer.valueOf(stmt.executeUpdate(query));
		} catch (SQLException sqle) {
			LOGGER.warning(sqle.getMessage());
		}

		return null;
	}

}