package com.hyj.service;

import com.alibaba.fastjson.JSONObject;
import com.hyj.dao.NvcUserInfoDAO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class SysUserService {
    @Resource
    NvcUserInfoDAO nvcUserInfoDAO;

    /**
     *  @author: heyongjun
     *  @Date: 2019-12-09 16:44
     *  @Description: 分页查询用户列表
     */
    public Page querySysUserInfo(JSONObject json,Pageable pageable){
        return nvcUserInfoDAO.findAll(pageable);
    }
}
