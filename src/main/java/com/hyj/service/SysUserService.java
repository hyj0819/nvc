package com.hyj.service;

import com.alibaba.fastjson.JSONObject;
import com.hyj.dao.NvcUserInfoDAO;
import com.hyj.model.NvcUserInfo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

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
     * @功能描述:删除用户信息
     * @params:
     * @return:
     * @author: heyongjun
     * @time: 2021-02-03 16:41
     */

    public boolean delSysUserInfo(JSONObject json){
        try{
            Long id = json.getLong("id");
            nvcUserInfoDAO.deleteById(id);
            return true;
        }catch (Exception ex){
            ex.printStackTrace();
            return false;
        }
    }
}
