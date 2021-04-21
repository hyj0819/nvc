package com.hyj.dao;

import com.alibaba.fastjson.JSONObject;
import com.hyj.model.NvcManufactured;

import java.util.List;

/**
 * @功能描述:
 * @author: heyongjun
 * @time: 2021-04-21 11:21
 */
public interface NvcManufacturedDAOCustom<NvcManufactured,Long> {

    public List<com.hyj.model.NvcManufactured> queryManufactured(JSONObject json);
}
