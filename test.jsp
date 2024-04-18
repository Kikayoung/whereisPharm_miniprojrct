<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Insert Data</title>
    <script type="text/javascript" src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=u06izvem2x&amp;submodules=geocoder"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

</head>
<body>
<%
    String inputValue = request.getParameter("inputValue");
    if (inputValue != null && !inputValue.isEmpty()) {
        // Check if the input value is a number
        try {
            int number = Integer.parseInt(inputValue);
            // Insert the number into the database
            Connection conn = null;
            Statement stmt = null;
            try {
                String DB_URL = "jdbc:mysql://210.117.212.110:3306/inputNumber";
		String DB_USER = "user1234";
                String DB_PASSWORD = "101810";
                Class.forName("com.mysql.jdbc.Driver");
                conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
                stmt = conn.createStatement();
                String sql = "INSERT INTO numbers (user_number) VALUES (" + number + ")";
                stmt.executeUpdate(sql);
                out.println("<script>alert('숫자가 데이터베이스에 추가되었습니다.');</script>");
            } catch (SQLException se) {
                se.printStackTrace();
                out.println("<script>alert('데이터베이스에 값 추가 중 오류가 발생했습니다.');</script>");
            } finally {
                try {
                    if (stmt != null) stmt.close();
                    if (conn != null) conn.close();
                } catch (SQLException se) {
                    se.printStackTrace();
                }
            }
        } catch (NumberFormatException e) {
            // If input value is not a number, show an alert
            out.println("<script>alert('숫자를 입력하세요.');</script>");
        }
    }
%>
<form method="post">
    <label for="inputValue">숫자를 입력하세요:</label>
    <input type="text" id="inputValue" name="inputValue">
    <button type="submit">Submit</button>
</form>
</body>
</html>
