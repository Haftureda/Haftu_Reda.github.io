
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>welcome</title>
</head>
<body>
<p> You successfully logged in</p>
    <%
        response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        if(session.getAttribute("userName") == null)
            response.sendRedirect("login.jsp");

    %>

    <form action="logout" method="post">

    <input type="submit" name="logout" value="logout">
    </form>
</body>
</html>
