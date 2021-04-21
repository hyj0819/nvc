package com.hyj.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

/**
 * @功能描述:
 * @author: heyongjun
 * @time: 2021-04-21 11:42
 */
@Repository
public class BaseDAO {
    @Autowired
    public EntityManager entityManager;
}
