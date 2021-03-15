package com.hyj.dao;

import com.alibaba.fastjson.JSONObject;
import com.hyj.model.NvcUserInfo;
import com.sun.org.apache.xpath.internal.operations.String;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import javax.persistence.EntityManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

/**
 * @功能描述: 用户服务数据接口类
 * @author: heyongjun
 * @time: 2021-02-02 14:26
 */
@Repository
public class NvcUserInfoDAOCustomImpl implements NvcUserInfoDAOCustom{

  @Autowired
  private EntityManager entityManager;


  @Override
  public List<NvcUserInfo> querySysUser(JSONObject json) {
    StringBuffer sb = new StringBuffer("select * from  nvc_userinfo u where 1=1");
    if(StringUtils.hasText(json.getString("username"))){
      sb.append(" and u.username like '%"+json.getString("username")+"%' ");
    }
    if(StringUtils.hasText(json.getString("address"))){
      sb.append(" and u.address like '%"+json.getString("address")+"%' ");
    }
    if(StringUtils.hasText(json.getString("phone"))){
      sb.append(" and u.phone like '%"+json.getString("phone")+"%' ");
    }
    if(StringUtils.hasText(json.getString("status"))){
      sb.append(" and u.userstatus ='"+json.getString("status")+"' ");
    }
    return entityManager.createNativeQuery(sb.toString(),NvcUserInfo.class).getResultList();
  }
}
