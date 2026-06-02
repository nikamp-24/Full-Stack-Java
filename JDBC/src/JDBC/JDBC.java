package JDBC;


import java.io.FileInputStream;
import java.sql.*;
import java.util.Properties;
public class JDBC {
public static void main(String[] args) throws Exception{
	
	 Properties prop = new Properties();
     prop.load(new FileInputStream("db.properties"));

	Class.forName("com.mysql.cj.jdbc.Driver");
	
	Connection conn = DriverManager.getConnection( 
			prop.getProperty("db.url"),
			prop.getProperty("db.username"),
			prop.getProperty("db.pass"));
	
	Statement st = conn.createStatement();
	
//     int rows =   st.executeUpdate("insert into users values (5, 'Pooja', 'pqr@gmail.com')");
//     System.out.println(rows);
//	
	
	
	ResultSet rs = st.executeQuery("select * from users");
	
	while(rs.next()) {
		System.out.println(rs.getInt(1)+" " + rs.getString(2)+ " " + rs.getString(3));
	}
	
	st.executeUpdate("Update users set username = 'Nikam' where userid = 5");
	
	 rs = st.executeQuery("select * from users");
		
		while(rs.next()) {
			System.out.println(rs.getInt(1)+" " + rs.getString(2)+ " " + rs.getString(3));
		}
	conn.close();
}
}
