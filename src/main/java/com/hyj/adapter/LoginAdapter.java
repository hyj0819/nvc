package com.hyj.adapter;

import com.hyj.interceptor.SessionInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @功能描述:
 * @author: heyongjun
 * @time: 2021-04-21 14:55
 */
@Configuration
public class LoginAdapter implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        //注册TestInterceptor拦截器
        InterceptorRegistration registration = registry.addInterceptor(new SessionInterceptor());
        registration.addPathPatterns("/**");//所有路径都被拦截
        //添加不拦截路径
        registration.excludePathPatterns("/**/*.html","/**/*.js","/**/*.png","/**/*.PNG","/**/*.jpg","/**/*.JPGE","/**/*.css","/**/*.woff","/**/*.ttf","**/login","/loginIn");
    }
}
