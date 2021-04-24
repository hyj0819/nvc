package com.hyj.controller;

import com.alibaba.fastjson.JSONObject;
import com.hyj.model.NvcUserInfo;
import com.hyj.service.LoginService;
import com.sun.xml.internal.messaging.saaj.soap.ver1_1.Envelope1_1Impl;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

@Controller
public class LoginController {
    @Resource
    LoginService loginService;
    /**
     * 跳转登陆页面
     * @return
     */
    @RequestMapping("/login")
    public String login(HttpServletRequest request, Model model) {
        return "login/login";
    }


    /**
     *  @author: heyongjun
     *  @Date: 2019-10-27 14:21
     *  @Description:登陆系统
     */

    @RequestMapping("/loginIn")
    @ResponseBody
    public String loginIn(HttpServletRequest request,HttpServletResponse httpresponse, @RequestParam Map paramMap,@RequestBody(required = false) Map paramBody){
        Enumeration<String> headers = request.getHeaderNames();
        Map<String, String> requestHeaders = new HashMap<>();
        //把所有的头部信息放入requestHeaders
        while (headers.hasMoreElements()) {
            String key = headers.nextElement();
            String value = request.getHeader(key);
            requestHeaders.put(key, value);
        }
        requestHeaders.put("x-forwarded-for", request.getRemoteAddr());
        //请求参数
        JSONObject param = new JSONObject(paramMap);
        if (paramBody != null) {
            param.putAll(paramBody);
        }
        NvcUserInfo nvcUserInfo = loginService.loginIn(param);
        JSONObject returnJson = new JSONObject();
        returnJson.put("success",true);
        returnJson.put("resultData",nvcUserInfo);
        HttpSession session = request.getSession();
        session.setAttribute("userinfo",nvcUserInfo);
        return returnJson.toJSONString();
    }
}
