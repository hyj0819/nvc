package com.hyj.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/index")
public class IndexController {
    /**
     * 跳转登陆页面
     * @return
     */
    @RequestMapping("/index")
    public String index(HttpServletRequest request, Model model) {
        return "index";
    }
}
