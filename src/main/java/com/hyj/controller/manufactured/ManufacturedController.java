package com.hyj.controller.manufactured;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hyj.model.NvcManufactured;
import com.hyj.model.NvcUserInfo;
import com.hyj.service.NvcManufacturedService;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @功能描述:
 * @author: heyongjun
 * @time: 2021-04-21 11:26
 */
@Controller
@RequestMapping("/manufactured")
public class ManufacturedController {
    @Resource
    NvcManufacturedService nvcManufacturedService;

    /**
     * 调整厂家列表页面
     *
     * @return
     */
    @RequestMapping("/list")
    public String list(HttpServletRequest request, Model model) {
        return "manufactured/manufacturedlist.html";
    }

    /**
     * @功能描述:查询用户列表
     * @params:
     * @return:
     * @author: heyongjun
     * @time: 2021-02-03 16:39
     */

    @RequestMapping("/manufacturedlistinfo")
    @ResponseBody
    public String manufacturedlistinfo(HttpServletRequest request, HttpServletResponse httpresponse, @RequestParam Map paramMap, @RequestBody(required = false) Map paramBody) {
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
        PageRequest pageRequest = null;
        pageRequest = PageRequest.of(param.getInteger("page") - 1, param.getInteger("limit"));
        PageHelper.startPage(pageRequest.getPageNumber(), pageRequest.getPageSize());
        List<NvcManufactured> list = nvcManufacturedService.queryNvcManufacturedInfo(param);
        PageInfo pageInfo = new PageInfo(list);
        String userInfo = "{\"code\":\"0\",\"msg\":\"ok\",\"count\":" + pageInfo.getList().size() + ",\"data\":" + JSONObject.toJSONString(pageInfo.getList()) + "}";
        //用了一个字符串拼接的方式，使返回的数据变成Layui的支持的数据类型
        return userInfo;
    }


    /**
     * @功能描述:添加厂家信息
     * @params:
     * @return:
     * @author: heyongjun
     * @time: 2021-03-16 9:36
     */
    @RequestMapping("/addmanufacturedinfo")
    @ResponseBody
    public String addmanufacturedinfo(HttpServletRequest request,HttpServletResponse servletResponse,@RequestParam Map paramMap,@RequestBody(required = false) Map paramBody){
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
        boolean falg =  nvcManufacturedService.addManufacturedInfo(param);
        JSONObject returnJson = new JSONObject();
        returnJson.put("success", falg);
        return returnJson.toJSONString();
    }

    /**
     * @功能描述:删除厂家信息
     * @params:
     * @return:
     * @author: heyongjun
     * @time: 2021-02-03 16:39
     */
    @RequestMapping("/delmanufacturedinfo")
    @ResponseBody
    public String delmanufacturedinfo(HttpServletRequest request, HttpServletResponse httpresponse, @RequestParam Map paramMap, @RequestBody(required = false) Map paramBody) {
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
        boolean falg = nvcManufacturedService.delManufacturedInfo(param);
        JSONObject returnJson = new JSONObject();
        returnJson.put("success", falg);
        return returnJson.toJSONString();
    }
}
