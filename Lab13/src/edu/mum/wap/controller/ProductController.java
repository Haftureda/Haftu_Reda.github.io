package edu.mum.wap.controller;


import com.google.gson.*;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.mum.wap.doa.ProductDB;
import edu.mum.wap.model.Product;

import java.io.IOException;
import java.io.PrintWriter;



@WebServlet({"/products",""})
public class ProductController extends HttpServlet {
    private static final long serialVersionUID = 1L;

    private ProductDB products;
    Gson mapper = new Gson();

    @Override
    public void init() throws ServletException {
        products = ProductDB.getInstance();
    }
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        req.setAttribute("products", products.getAllProducts());
        //continue here
        RequestDispatcher dispatcher = req.getRequestDispatcher("index.jsp");
        dispatcher.forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
       // String jsonSting = req.getParameter("product");
        Product product = mapper.fromJson(req.getParameter("product"), Product.class);
        product.setId(products.genId());
        products.addProduct(product);
        PrintWriter out = resp.getWriter();
        out.print(mapper.toJson(product));
    }
}
