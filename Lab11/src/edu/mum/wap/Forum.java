package edu.mum.wap;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.UUID;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Forum
 */
@WebServlet("/Forum")
public class Forum extends HttpServlet {
	@Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out= resp.getWriter();
        out.print("<html><head><title>Test</title></head><body>");
        out.print("<form action = 'support' method='post'>");
        out.print("<p>Please click the button</p>");
        out.print("<p><lable> Name: <input type='text' name = 'name' value=''/></lable></p>");
        out.print("<p><lable> Email Address: <input type='text' name= 'email' value=''/></lable></p>");
        out.print("<p><lable> Problme: <input type='text' name = 'problem' value=''/></lable></p>");
        out.print("<p> <textarea rows = 10 cols = 30> problem discription </textarea></p>");
        out.print("<p><input type='submit' value='help'/></p>");
        out.print("</form>");
        out.print("</body></html>");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out= resp.getWriter();
        ServletContext sc = this.getServletContext();
        String support_email = sc.getInitParameter("support-email");

         String name = req.getParameter("name");
        String email = req.getParameter("email");
        String problem = req.getParameter("problem");
        String support_ticket_id = generateString();
        out.print("<html><head><title>Test</title></head><body>");
        out.print("<p> Thank you! " + name + " for contacting us. </p>" +
                "<p>You should receive reply from us with in 24 hrs in your email address "
                        + email+". </p> <p>Let us know in our support email  " + support_email + " if you don’t receive reply within 24 hrs." +
                " </br> Please be sure to attach your reference  "+support_ticket_id+" in your email. </p>");
        out.print("</body></html>");

    }
    public String generateString() {
        String uuid = UUID.randomUUID().toString();
        return "support_ticket_id = " + uuid;
    }

}
