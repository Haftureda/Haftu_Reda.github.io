import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;
import java.util.logging.LogRecord;

//@WebFilter("/Login")

@WebFilter(filterName= "myFilter",
        urlPatterns= { "/login"})
public class MyFilter implements Filter {
    @Override
    public void destroy() {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

       // System.out.println("Good");
        HttpServletRequest req = (HttpServletRequest)servletRequest;
        HttpServletResponse resp = (HttpServletResponse) servletResponse;

        String userName = req.getParameter("user-name");
        String password = req.getParameter("password");
        User[] users = MapUsers.getUsers();
        boolean flag = false;
        for(int i =0; i < users.length; i++){
            if(userName.equals(users[i].getUserName()) &&
                    password.equals(users[i].getPassword())){
                flag = true;
                break;
            }
        }

        if(flag)
              filterChain.doFilter(servletRequest, servletResponse);
        else
        resp.sendRedirect("login.jsp");

    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }
}
