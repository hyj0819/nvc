package com.hyj;

import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import com.github.pagehelper.PageHelper;
import org.apache.ibatis.plugin.Interceptor;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jackson.Jackson2ObjectMapperBuilderCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;

import java.nio.charset.Charset;
import java.util.Properties;

@SpringBootApplication
public class NvcApplication {

    public static void main(String[] args) {
        SpringApplication.run(NvcApplication.class, args);
    }

    @Bean
    public PageHelper pageHelper() {
        System.out.println("======MyBatisConfiguration.pageHelper()");
        PageHelper pageHelper = new PageHelper();
        Properties properties = new Properties();
        properties.setProperty("reasonable", "true");
        properties.setProperty("supportMethodsArguments", "true");
        properties.setProperty("params", "count=countSql");
        pageHelper.setProperties(properties);
        new JSONObject();
        //添加插件
        return pageHelper;
    }

}
