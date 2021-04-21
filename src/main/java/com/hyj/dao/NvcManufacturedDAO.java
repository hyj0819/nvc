package com.hyj.dao;

import com.hyj.model.NvcManufactured;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @功能描述:
 * @author: heyongjun
 * @time: 2021-04-21 11:21
 */
@Repository
public interface NvcManufacturedDAO extends JpaRepository<NvcManufactured,Long>,NvcManufacturedDAOCustom<NvcManufactured,Long>{
}
