package com.hyj.service;

import com.alibaba.fastjson.JSONObject;
import com.hyj.dao.NvcUserInfoDAO;
import com.hyj.model.NvcUserInfo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Component
public class SysUserService {
    @Resource
    NvcUserInfoDAO nvcUserInfoDAO;

    /**
     *  @author: heyongjun
     *  @Date: 2019-12-09 16:44
     *  @Description: 分页查询用户列表
     */
    public List<NvcUserInfo> querySysUserInfo(JSONObject json){
        return nvcUserInfoDAO.querySysUser(json);
    }

    /**
     * @功能描述: 添加用户信息
     * @params:
     * @return:
     * @author: heyongjun
     * @time: 2021-03-16 9:39
     */
    @Transactional
    public boolean addSysUserInfo(JSONObject json){
        try{
            NvcUserInfo nvcUserInfo =  JSONObject.parseObject(json.toJSONString(),NvcUserInfo.class);
            nvcUserInfo.setUserstatus("1");
            nvcUserInfo.setInputdate(new Timestamp(System.currentTimeMillis()));
            nvcUserInfo.setUserno(String.valueOf(nvcUserInfoDAO.findMaxUserNo()+1));
            nvcUserInfoDAO.save(nvcUserInfo);
            return true;
        }catch (Exception ex){
            ex.printStackTrace();
            return false;
        }
    }

    /**
     * @功能描述:删除用户信息
     * @params:
     * @return:
     * @author: heyongjun
     * @time: 2021-02-03 16:41
     */

    public boolean delSysUserInfo(JSONObject json){
        try{
            Long id = json.getLong("id");
            Optional<NvcUserInfo> nvcUserInfo = nvcUserInfoDAO.findById(id);
            if(nvcUserInfo.isPresent()){
                nvcUserInfo.get().setUserstatus("0");
                nvcUserInfoDAO.save(nvcUserInfo.get());
                return true;
            }
            return  false;
        }catch (Exception ex){
            ex.printStackTrace();
            return false;
        }
    }
}
