
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>login</title>
</head>
<body>

<%
    Cookie[] cookies=request.getCookies();
    String userName = "";
    String rememberme = "";
    if (cookies != null) {
        for (Cookie cookie : cookies) {
            if(cookie.getName().equals("user-name")) {
                userName = cookie.getValue();
            }
            if(cookie.getName().equals("checkbox")) {
                if (cookie.getValue() == null)
                    rememberme = "";
                else
                    rememberme = "checked";
            }

        }
    }
%>
<h3>Well come</h3>
<%=request.getAttribute("msg") != null ? request.getAttribute("msg") : ""%>
<form action="<%=request.getContextPath()%>/login" method="post">


        <p>
    <label> user name: <input type="text" name="user-name" value="<%=userName%>"></label>
    </p>
        <p>
    <label> password: <input type="password" name="password"></label>
            </p>

    <input type="submit" value="login">

    <input type="checkbox" name="checkbox" <%=rememberme%> >

</form>
</body>
</html>
