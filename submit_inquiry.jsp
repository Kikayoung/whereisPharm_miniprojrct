<%@ page import="java.sql.*" %>
<%@ page import="java.util.logging.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>문의 제출 결과</title>
</head>
<body>

<%
    String name = request.getParameter("name");
    String email = request.getParameter("email");
    String message = request.getParameter("message");

    out.println("<h2>전송된 파라미터:</h2>");
    out.println("<p>이름: " + name + "</p>");
    out.println("<p>이메일: " + email + "</p>");
    out.println("<p>메시지: " + message + "</p>");

    Connection conn = null;
    PreparedStatement pstmt = null;
    Logger logger = Logger.getLogger("InquirySubmission");

    try {
        // 데이터베이스 연결 정보
        String url = "jdbc:mysql://210.117.212.110:3306/test";
        String username = "user1234";
        String password = "101810";

        // JDBC 드라이버 로드
        Class.forName("com.mysql.cj.jdbc.Driver");
        
        // 데이터베이스 연결
        conn = DriverManager.getConnection(url, username, password);

        String insertQuery = "INSERT INTO Inquiry (name, email, message) VALUES (?, ?, ?)";
        pstmt = conn.prepareStatement(insertQuery);

        // 파라미터 설정
        pstmt.setString(1, name);
        pstmt.setString(2, email);
        pstmt.setString(3, message);

        // 쿼리 실행
        int rowsAffected = pstmt.executeUpdate();

        if (rowsAffected > 0) {
            out.println("<h1>문의가 성공적으로 제출되었습니다.</h1>");
        } else {
            out.println("<h1>문의 제출에 실패했습니다.</h1>");
        }
    } catch (Exception e) {
        out.println("<h1>문의 제출에 실패했습니다.</h1>");
        out.println("<p>오류 메시지: " + e.getMessage() + "</p>");
    } finally {
        if (pstmt != null) {
            pstmt.close();
        }
        if (conn != null) {
            conn.close();
        }
    }
%>

</body>
</html>
