package com.hyj.dao;

import com.hyj.model.NvcUserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @功能描述: 用户服务数据接口类
 * @author: heyongjun
 * @time: 2021-02-02 14:26
 */
@Repository
public interface NvcUserInfoDAO extends JpaRepository<NvcUserInfo,Long>,NvcUserInfoDAOCustom<NvcUserInfo,Long> {

  public  List<NvcUserInfo> findByUsernoAndUserpwdAndUserstatus(String userno, String userpwd, String status);


}
