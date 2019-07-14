package edu.mum.wap.doa;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import edu.mum.wap.model.User;

public class MapUsers {

    private static MapUsers ourInstance = new MapUsers();

    public static MapUsers getInstance() {
        return ourInstance;
    }

    private MapUsers() {
    }

    private Map<String, User> userDAO = new HashMap<>();

    {   userDAO.put("joun", new User("joun", "joun"));
        userDAO.put("sam", new User("sam", "sam"));
        userDAO.put("hellen", new User("hellen", "hellen"));
        userDAO.put("smith", new User("smith", "smith"));
        userDAO.put("admin", new User("admin", "admin"));
    }

    public List<User> getAllUsers(){return new ArrayList<>(userDAO.values());}

    //Milki code
//public Map<String , User> getMap()
//{
//    return userDAO;
//}
//
//    public void addProduct(String s, User user){
//        userDAO.put(s,user);
//
//    }

}
