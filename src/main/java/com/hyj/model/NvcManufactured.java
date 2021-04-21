package com.hyj.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * @功能描述:商品厂家实体
 * @author: heyongjun
 * @time: 2021-04-21 11:15
 */
@Entity
@Table(name = "NVC_MANUFACTURED")
public class NvcManufactured{
    private Long id;
    private String mname;//'厂家名称'
    private String username;//'厂家联系人'
    private String phone;//'厂家联系电话'
    private String address;//'厂家地址'
    private String status;//状态
    private Long inputuserid;//操作员
    private Timestamp inputdate;//录入时间

    public NvcManufactured() {
    }

    public NvcManufactured(Long id, String mname, String username, String phone, String address, String status,Long inputuserid, Timestamp inputdate) {
        this.id = id;
        this.mname = mname;
        this.username = username;
        this.phone = phone;
        this.address = address;
        this.status = status;
        this.inputuserid = inputuserid;
        this.inputdate = inputdate;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "custom-id")
    @GenericGenerator(name = "custom-id", strategy = "com.hyj.manage.CustomIDGenerator")
    @Column(name = "ID")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    @Column(name = "MNAME", length = 200)
    public String getMname() {
        return mname;
    }

    public void setMname(String mname) {
        this.mname = mname;
    }

    @Column(name = "USERNAME", length = 200)
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Column(name = "PHONE", length = 200)
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
    @Column(name = "ADDRESS", length = 200)
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Column(name = "STATUS", length = 1)
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    @Column(name = "INPUTUSERID")
    public Long getInputuserid() {
        return inputuserid;
    }

    public void setInputuserid(Long inputuserid) {
        this.inputuserid = inputuserid;
    }
    @Column(name = "INPUTDATE")
    public Timestamp getInputdate() {
        return inputdate;
    }

    public void setInputdate(Timestamp inputdate) {
        this.inputdate = inputdate;
    }
}
