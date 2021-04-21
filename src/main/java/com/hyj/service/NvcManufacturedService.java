package com.hyj.service;

import com.alibaba.fastjson.JSONObject;
import com.hyj.dao.NvcManufacturedDAO;
import com.hyj.model.NvcManufactured;
import com.hyj.model.NvcUserInfo;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

/**
 * @功能描述:
 * @author: heyongjun
 * @time: 2021-04-21 11:26
 */
@Component
public class NvcManufacturedService {
    @Resource
    NvcManufacturedDAO nvcManufacturedDAO;

    /**
     *  @author: heyongjun
     *  @Date: 2019-12-09 16:44
     *  @Description: 分页查询用户列表
     */
    public List<NvcManufactured> queryNvcManufacturedInfo(JSONObject json){
        return nvcManufacturedDAO.queryManufactured(json);
    }


    /**
     * @功能描述: 添加厂家信息
     * @params:
     * @return:
     * @author: heyongjun
     * @time: 2021-03-16 9:39
     */
    @Transactional
    public boolean addManufacturedInfo(JSONObject json){
        try{
            NvcManufactured nvcManufactured =  JSONObject.parseObject(json.toJSONString(),NvcManufactured.class);
            nvcManufactured.setStatus("1");
            nvcManufactured.setInputdate(new Timestamp(System.currentTimeMillis()));
            nvcManufacturedDAO.save(nvcManufactured);
            return true;
        }catch (Exception ex){
            ex.printStackTrace();
            return false;
        }
    }

    /**
     * @功能描述:删除厂家信息
     * @params:
     * @return:
     * @author: heyongjun
     * @time: 2021-02-03 16:41
     */
    public boolean delManufacturedInfo(JSONObject json){
        try{
            Long id = json.getLong("id");
            Optional<NvcManufactured> nvcManufactured = nvcManufacturedDAO.findById(id);
            if(nvcManufactured.isPresent()){
                nvcManufactured.get().setStatus("0");
                nvcManufacturedDAO.save(nvcManufactured.get());
                return true;
            }
            return  false;
        }catch (Exception ex){
            ex.printStackTrace();
            return false;
        }
    }

}
