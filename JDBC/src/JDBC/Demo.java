package JDBC;

import java.io.FileInputStream;
import java.sql.*;
import java.util.Properties;

public class Demo {

    public static void main(String[] args) throws Exception {

   	 Properties prop = new Properties();
     prop.load(new FileInputStream("db.properties"));

	Class.forName("com.mysql.cj.jdbc.Driver");
	
	Connection conn = DriverManager.getConnection( 
			prop.getProperty("db.url"),
			prop.getProperty("db.username"),
			prop.getProperty("db.pass"));
        // Create Statement
        Statement st = conn.createStatement();

        // Execute Query
        ResultSet rs =
            st.executeQuery("select * from users");

        // Process Result
        while(rs.next()) {

            System.out.println(
                rs.getInt(1) + " "
                + rs.getString(2)
            );
        }

        // Close Connection
        conn.close();
    }
}