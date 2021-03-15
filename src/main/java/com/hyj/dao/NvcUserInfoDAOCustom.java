package com.hyj.dao;

import com.alibaba.fastjson.JSONObject;
import com.hyj.model.NvcUserInfo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @功能描述: 用户服务数据接口类
 * @author: heyongjun
 * @time: 2021-02-02 14:26
 */

public interface NvcUserInfoDAOCustom<NvcUserInfo,Long>  {

   public  List<NvcUserInfo> querySysUser(JSONObject json);
}
