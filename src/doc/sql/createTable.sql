--用户表
CREATE TABLE NVC_USERINFO
(
    ID          NUMBER(20,0) NOT NULL ENABLE,
    USERNO     VARCHAR2(20 BYTE),
    USERPWD VARCHAR2(20),
    USERSTATUS NUMBER(10),
    USERNAME VARCHAR2(50 BYTE),
    PHONE VARCHAR2(20),
    ADDRESS VARCHAR2(20),
    AGE VARCHAR2(20),
    SEX VARCHAR2(20),
	CONSTRAINT PK_NVC_USERINFO PRIMARY KEY (ID)
);
COMMENT ON COLUMN NVC_USERINFO.ID IS '主键id';
COMMENT ON COLUMN NVC_USERINFO.USERNO IS '用户账户';
COMMENT ON COLUMN NVC_USERINFO.USERPWD IS '用户密码';
COMMENT ON COLUMN NVC_USERINFO.USERSTATUS IS '用户状态';
COMMENT ON COLUMN NVC_USERINFO.USERNAME IS '用户姓名';
COMMENT ON COLUMN NVC_USERINFO.PHONE IS '手机号';
COMMENT ON COLUMN NVC_USERINFO.ADDRESS IS '地址';
COMMENT ON COLUMN NVC_USERINFO.AGE IS '年级';
COMMENT ON COLUMN NVC_USERINFO.SEX IS '性别';
--厂家信息表
CREATE TABLE NVC_MANUFACTURED
(
    ID       NUMBER(20,0) NOT NULL ENABLE,
    MNAME    VARCHAR2(200 BYTE),
    USERNAME VARCHAR2(200),
    PHONE VARCHAR2(200),
    ADDRESS VARCHAR2(200),
    STATUS VARCHAR2(1),
    INPUTDATE DATE,
    INPUTUSERID NUMBER(20,0),
	CONSTRAINT PK_NVC_MANUFACTURED PRIMARY KEY (ID)
);
COMMENT ON COLUMN NVC_MANUFACTURED.ID IS '主键id';
COMMENT ON COLUMN NVC_MANUFACTURED.MNAME IS '厂家名称';
COMMENT ON COLUMN NVC_MANUFACTURED.USERNAME IS '联系人';
COMMENT ON COLUMN NVC_MANUFACTURED.PHONE IS '联系电话';
COMMENT ON COLUMN NVC_MANUFACTURED.ADDRESS IS '联系地址';
COMMENT ON COLUMN NVC_MANUFACTURED.STATUS IS '状态';
COMMENT ON COLUMN NVC_MANUFACTURED.INPUTDATE IS '录入时间';
COMMENT ON COLUMN NVC_MANUFACTURED.INPUTUSERID IS '录入人';

