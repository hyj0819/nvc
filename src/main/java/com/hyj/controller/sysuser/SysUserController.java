package com.hyj.controller.sysuser;

import com.alibaba.fastjson.JSONObject;
import com.hyj.model.NvcUserInfo;
import com.hyj.service.SysUserService;
import org.springframework.data.domain.Page;
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

@Controller
@RequestMapping("/sysuser")
public class SysUserController {

    @Resource
    SysUserService sysUserService;
    /**
     * 调整用户列表页面
     * @return
     */
    @RequestMapping("/list")
    public String list(HttpServletRequest request, Model model) {
        return "sysuser/sysuserlist";
    }

    /**
     *  @author: heyongjun
     *  @Date: 2019-10-27 14:21
     *  @Description:登陆系统
     */

    @RequestMapping("/sysuserlistinfo")
    @ResponseBody
    public String sysuserlistinfo(HttpServletRequest request,HttpServletResponse httpresponse, @RequestParam Map paramMap,@RequestBody(required = false) Map paramBody){
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
        pageRequest =  PageRequest.of(0, 5);
        Page sysUserInfo =  sysUserService.querySysUserInfo(param,pageRequest);
        List<NvcUserInfo> nvcUserInfo  = sysUserInfo.getContent();
        Map<String,Object> resultMap = new HashMap<>();
        //状态码，成功0，失败1
        resultMap.put("code","0");
        //提示消息
        resultMap.put("msg","");
        //数据（表格填充数据）
        resultMap.put("data",JSONObject.toJSONString(nvcUserInfo));
        //分页总条数
        resultMap.put("count",sysUserInfo.getTotalPages());
        return resultMap.toString();
    }


}
