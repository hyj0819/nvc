package com.hyj.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "NVC_USERINFO")
public class NvcUserInfo {
    private Long id;
    private String userno;//'用户账户'
    private String userpwd;//'用户密码'
    private String userstatus;//'用户状态'
    private String username;//'用户姓名'
    private String phone;//联系电话
    private String address;//地址
    private String age;//年龄
    private String sex;//性别
    private Timestamp inputdate;//录入时间


    public NvcUserInfo() {
    }

    public NvcUserInfo(Long id, String userno, String userpwd, String userstatus, String username, String phone, String address, String age, String sex,Timestamp inputdate) {
        this.id = id;
        this.userno = userno;
        this.userpwd = userpwd;
        this.userstatus = userstatus;
        this.username = username;
        this.phone = phone;
        this.address = address;
        this.age = age;
        this.sex=sex;
        this.inputdate = inputdate;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "custom-id")
    @GenericGenerator(name = "custom-id", strategy = "com.hyj.manage.CustomIDGenerator")
    @Column(name = "ID")
    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "USERNO", length = 20)
    public String getUserno() {
        return userno;
    }

    public void setUserno(String userno) {
        this.userno = userno;
    }

    @Column(name = "USERPWD", length = 20)
    public String getUserpwd() {
        return userpwd;
    }

    public void setUserpwd(String userpwd) {
        this.userpwd = userpwd;
    }
    @Column(name = "USERSTATUS", precision = 10, scale = 0)
    public String getUserstatus() {
        return userstatus;
    }

    public void setUserstatus(String userstatus) {
        this.userstatus = userstatus;
    }
    @Column(name = "USERNAME", length = 20)
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    @Column(name = "PHONE", length = 20)
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Column(name = "ADDRESS", length = 20)
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
    @Column(name = "AGE", length = 20)
    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }
    @Column(name = "SEX", length = 20)
    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    @Column(name = "INPUTDATE", length = 6)
    public Timestamp getInputdate() {
        return this.inputdate;
    }

    public void setInputdate(Timestamp inputdate) {
        this.inputdate = inputdate;
    }
}
