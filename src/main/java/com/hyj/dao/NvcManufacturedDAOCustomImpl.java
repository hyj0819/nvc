package com.hyj.dao;

import com.alibaba.fastjson.JSONObject;
import com.hyj.model.NvcManufactured;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;
import java.util.List;

/**
 * @功能描述:
 * @author: heyongjun
 * @time: 2021-04-21 11:21
 */
@Repository
public class NvcManufacturedDAOCustomImpl extends BaseDAO implements NvcManufacturedDAOCustom{

    @Override
    public List<NvcManufactured> queryManufactured(JSONObject json) {
        StringBuffer sb = new StringBuffer("select * from  NVC_MANUFACTURED u where 1=1");
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
            sb.append(" and u.status ='"+json.getString("status")+"' ");
        }
        if(StringUtils.hasText(json.getString("mname"))){
            sb.append(" and u.mname like '%"+json.getString("mname")+"%' ");
        }
        return entityManager.createNativeQuery(sb.toString(), NvcManufactured.class).getResultList();
    }
}
