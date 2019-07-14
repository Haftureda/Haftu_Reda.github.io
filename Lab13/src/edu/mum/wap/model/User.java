package edu.mum.wap.model;

import javax.servlet.http.HttpServlet;

public class User extends HttpServlet {
    private String userName;
    private  String password;

    public User() {}

    public User(String name, String password){
        this.userName = name;
        this.password = password;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public String getPassword() {
        return password;
    }
}
