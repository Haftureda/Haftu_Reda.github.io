import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.List;

public class Login extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String userName = req.getParameter("user-name");
        String password = req.getParameter("password");
        String rememberme = req.getParameter("checkbox");
        System.out.println("checkbox: "+rememberme);


        HttpSession session = req.getSession();
        session.setAttribute("userName",userName);
        if(rememberme != null && rememberme.equals("on")) {
            Cookie userNameCookie = new Cookie("user-name", userName);
            Cookie rememberMecookie = new Cookie("checkbox", rememberme);
            userNameCookie.setMaxAge(2629746); //equivalent one month in seconds
            rememberMecookie.setMaxAge(2629746);
            System.out.println("cookie: "+userNameCookie.getValue());
            resp.addCookie(userNameCookie);
            resp.addCookie(rememberMecookie);
        }
        else {
            Cookie cUserName = new Cookie("user-name", null);
            Cookie rememberMecookie = new Cookie("checkbox", rememberme);
            cUserName.setMaxAge(0);
            rememberMecookie.setMaxAge(0);
            resp.addCookie(cUserName);
            resp.addCookie(rememberMecookie);
        }
        resp.sendRedirect("welcome.jsp");

//        RequestDispatcher requestDispatcher = req.getRequestDispatcher("/welcome.jsp");
//        requestDispatcher.forward(req, resp);

    }
}
