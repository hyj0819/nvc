package com.hyj.controller.sysuser;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hyj.model.NvcUserInfo;
import com.hyj.service.SysUserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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

@Controller
@RequestMapping("/sysuser")
public class SysUserController {

    @Resource
    SysUserService sysUserService;

    /**
     * 调整用户列表页面
     *
     * @return
     */
    @RequestMapping("/list")
    public String list(HttpServletRequest request, Model model) {
        return "sysuser/sysuserlist";
    }

    /**
     * @功能描述:查询用户列表
     * @params:
     * @return:
     * @author: heyongjun
     * @time: 2021-02-03 16:39
     */

    @RequestMapping("/sysuserlistinfo")
    @ResponseBody
    public String sysuserlistinfo(HttpServletRequest request, HttpServletResponse httpresponse, @RequestParam Map paramMap, @RequestBody(required = false) Map paramBody) {
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
        List<NvcUserInfo> list = sysUserService.querySysUserInfo(param);
        PageInfo pageInfo = new PageInfo(list);
        String userInfo = "{\"code\":\"0\",\"msg\":\"ok\",\"count\":" + pageInfo.getList().size() + ",\"data\":" + JSONObject.toJSONString(pageInfo.getList()) + "}";
        //用了一个字符串拼接的方式，使返回的数据变成Layui的支持的数据类型
        return userInfo;
    }

    /**
     * @功能描述:
     * @params:
     * @return:
     * @author: heyongjun
     * @time: 2021-03-16 9:36
     */
    @RequestMapping("/addsysuserinfo")
    @ResponseBody
    public String addsysuserinfo(HttpServletRequest request,HttpServletResponse servletResponse,@RequestParam Map paramMap,@RequestBody(required = false) Map paramBody){
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
        boolean falg =  sysUserService.addSysUserInfo(param);
        JSONObject returnJson = new JSONObject();
        returnJson.put("success", falg);
        return returnJson.toJSONString();
    }

    /**
     * @功能描述:删除用户信息
     * @params:
     * @return:
     * @author: heyongjun
     * @time: 2021-02-03 16:39
     */

    @RequestMapping("/delsysuserinfo")
    @ResponseBody
    public String delsysuserinfo(HttpServletRequest request, HttpServletResponse httpresponse, @RequestParam Map paramMap, @RequestBody(required = false) Map paramBody) {
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
        boolean falg = sysUserService.delSysUserInfo(param);
        JSONObject returnJson = new JSONObject();
        returnJson.put("success", falg);
        return returnJson.toJSONString();
    }


}
