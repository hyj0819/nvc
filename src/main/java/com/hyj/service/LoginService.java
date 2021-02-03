package com.hyj.service;

import com.alibaba.fastjson.JSONObject;
import com.hyj.dao.NvcUserInfoDAO;
import com.hyj.model.NvcUserInfo;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component
public class LoginService {

    @Resource
    NvcUserInfoDAO nvcUserInfoDAO;
    /**
     *  @author: heyongjun
     *  @Date: 2019-11-17 15:42
     *  @Description: 登陆信息校验
     */
    public NvcUserInfo loginIn(JSONObject json){
        String userno = json.getString("usercode");
        String userpwd = json.getString("password");
        List<NvcUserInfo> nvcUserInfos = nvcUserInfoDAO.findByUsernoAndUserpwdAndUserstatus(userno, userpwd, "1");
        if(nvcUserInfos!=null&&nvcUserInfos.size()>0){
            return nvcUserInfos.get(0);
        }
        return null;
    }
}
