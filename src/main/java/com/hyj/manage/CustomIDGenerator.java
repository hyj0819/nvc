package com.hyj.manage;

import com.hyj.util.common.SnowFlakeUtil;
import org.hibernate.MappingException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentityGenerator;

import java.io.Serializable;

/**
 * @功能描述:
 * @author: heyongjun
 * @time: 2021-03-16 9:58
 */
public class CustomIDGenerator extends IdentityGenerator {
    @Override
    public Serializable generate(SharedSessionContractImplementor session, Object object) throws MappingException {
        Object id =  SnowFlakeUtil.getId();
        if (id != null) {
            return (Serializable) id;
        }
        return super.generate(session, object);
    }
}
