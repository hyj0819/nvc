/**
 * 通用初始化操作
 *    2018/05/05
 *    tianliwei
 */
/**
 * 通用数据查询
 * @param querynames 参数--逗号隔开:"xxx,xxx,xxx..."
 * @param callback
 */
function getCommonQuery(querynames, callback) {
    dkyw.request.postSync("/business/queryCommon", {"names": querynames}, function (response) {
        if (response.success) {
            var data = response.resultData;
            if (dkyw.tool.isFunction(callback)) {
                callback(data);
            }
        } else {
            dkyw.dialog.error(queryI18n(response.message));
        }
    });
}

/**
 * 初始化身份dom
 * @author：zhaokuiqiang
 */
/**
 * 身份
 * 通用select下拉框拼接
 * @param dom jquery元素
 * @param commonList 显示的数据
 * @param callback
 */
function getPositionZ(dom, commonList, callback) {
    dom = $(dom);
    var data1 = commonList.position;
    var option = "<option value=''>" + queryI18n('user.choice') + "</option>";
    for (var key in data1) {
        option += "<option value = '" + data1[key].pcode + "'>" + data1[key].pname + "</option>";
    }
    dom.empty().append(option);
    if (dkyw.tool.isFunction(callback)) {
        callback(dom);
    }
}

/**
 * 操作员-用户
 * 通用select下拉框拼接
 * @param dom jquery元素
 * @param commonList 显示的数据
 * @param callback
 */
function getAllUserZ(dom, commonList, callback) {
    dom = $(dom);
    var data1 = commonList.sysuser;
    var option = "<option value=''>" + queryI18n('user.choice') + "</option>";
    for (var key in data1) {
        option += "<option value = '" + data1[key].id + "'>" + data1[key].username + "</option>";
    }
    dom.empty().append(option);
    if (dkyw.tool.isFunction(callback)) {
        callback(dom);
    }
}

/**
 * 账户类型
 * 通用select下拉框拼接
 * @param dom jquery元素
 * @param commonList 显示的数据
 * @param state cardtype 主账户类型标志：1-主账户，0-副账户
 * @param callback
 */
function getAcctypeZ(dom, commonList, state, callback) {
    dom = $(dom);
    var data1 = commonList.acctype;
    var option = "<option value=''>" + queryI18n('user.choice') + "</option>";
    for (var key in data1) {
        if (typeof (state) == "undefined") {
            option += "<option value = '" + data1[key].acctypecode + "'>" + data1[key].acctypename + "</option>";
        } else {
            if (data1[key].cardtype == state) {
                option += "<option value = '" + data1[key].acctypecode + "'>" + data1[key].acctypename + "</option>";
            }
        }
    }
    dom.empty().append(option);
    if (dkyw.tool.isFunction(callback)) {
        callback(dom);
    }
}

/**
 * 获取民族列表
 * 通用select下拉框拼接
 * @param dom jquery元素
 * @param commonList 显示的数据
 * @param callback
 */
function getNationZ(dom, commonList, callback, defaultkey) {
    dom = $(dom);
    var data1 = commonList.nation;
    var option = "<option value=''>" + queryI18n('user.choice') + "</option>";
    for (var key in data1) {
        if (data1[key].code == defaultkey) {
            option += "<option value = '" + data1[key].code + "' selected>" + data1[key].name + "</option>";
        } else {
            option += "<option value = '" + data1[key].code + "'>" + data1[key].name + "</option>";
        }
    }
    dom.empty().append(option);
    if (dkyw.tool.isFunction(callback)) {
        callback(dom);
    }
}

/*
**
* 获取国籍列表
* 通用select下拉框拼接
* @param dom jquery元素
* @param commonList 显示的数据
* @param callback
*/
function getCountryZ(dom, commonList, callback) {
    dom = $(dom);
    var data1 = commonList.country;
    var option = "<option value=''>" + queryI18n('user.choice') + "</option>";
    for (var key in data1) {
        if (data1[key].code == '156') {
            option += "<option value = '" + data1[key].code + "' selected>" + data1[key].name + "</option>";
        } else {
            option += "<option value = '" + data1[key].code + "'>" + data1[key].name + "</option>";
        }
    }
    dom.empty().append(option);
    if (dkyw.tool.isFunction(callback)) {
        callback(dom);
    }
}

/**
 * 年级
 * 通用select下拉框拼接
 * @param dom jquery元素
 * @param commonList 显示的数据
 * @param callback
 */
function getGradeZ(dom, commonList, callback, defaultkey) {
    dom = $(dom);
    var data1 = commonList.grade;
    var option = "<option value=''>" + queryI18n('user.choice') + "</option>";
    for (var key in data1) {
        if (data1[key].code == defaultkey) {
            option += "<option value = '" + data1[key].code + "' selected>" + data1[key].name + "</option>";
        } else {
            option += "<option value = '" + data1[key].code + "'>" + data1[key].name + "</option>";
        }
    }
    dom.empty().append(option);
    if (dkyw.tool.isFunction(callback)) {
        callback(dom);
    }
}

/**
 * 证件类型
 * 通用select下拉框拼接
 * @param dom jquery元素
 * @param commonList 显示的数据
 * @param callback
 */
function getIdtypeZ(dom, commonList, callback) {
    dom = $(dom);
    var data1 = commonList.idtype;
    var option = "<option value=''>" + queryI18n('user.choice') + "</option>";
    for (var key in data1) {
        option += "<option value = '" + data1[key].code + "'>" + data1[key].name + "</option>";
    }
    dom.empty().append(option);
    if (dkyw.tool.isFunction(callback)) {
        callback(dom);
    }
}

/**
 * 学位
 * 通用select下拉框拼接
 * @param dom jquery元素
 * @param commonList 显示的数据
 * @param callback
 */
function getDegreeZ(dom, commonList, callback) {
    dom = $(dom);
    var data1 = commonList.degree;
    var option = "<option value=''>" + queryI18n('user.choice') + "</option>";
    for (var key in data1) {
        option += "<option value = '" + data1[key].code + "'>" + data1[key].name + "</option>";
    }
    dom.empty().append(option);
    if (dkyw.tool.isFunction(callback)) {
        callback(dom);
    }
}

/**
 * 押金
 * 通用select下拉框拼接
 * @param dom jquery元素
 * @param commonList 显示的数据
 * @param callback
 */
function getPledgeZ(dom, commonList, callback) {
    dom = $(dom);
    var data1 = commonList.pledge;
    var option = "<option value=''>" + queryI18n('user.choice') + "</option>";
    for (var key in data1) {
        option += "<option title='" + data1[key].pledgeamt + "' value = '" + data1[key].pledgecode + "'>" + data1[key].pledgename + "</option>";
    }
    dom.empty().append(option);
    if (dkyw.tool.isFunction(callback)) {
        callback(dom);
    }
}

/**
 * 初始化交易代码 select下拉列表
 * @param commonList 通用查询结果集
 */
function initSysTxcode(dom, commonList, txcode) {
    dom = $(dom);
    if (commonList) {
        var list = commonList.txcode;
        var option = '<option value="">' + queryI18n('syslog.tradetitle') + '</option>';
        /*交易代码/交易名称/交易名称首字母*/
        for (var key in list) {
            var arrRslt = makePy(list[key].txname);
            arrRslt = arrRslt + "";
            option += "<option value='" + list[key].txcode + "' >" + list[key].txcode + list[key].txname + arrRslt.toLowerCase().split(",")[0] + "</option>";
        }
        dom.empty().append(option);
        dom.selectpicker('refresh');
        if (typeof txcode != "undefined") {
            dom.selectpicker('val', txcode);
        }
    }
}

/**
 * 站点下拉select
 * tianliwei
 * @param dom jquery元素
 * @param commonList 数据集合
 * @param callback
 * @param moduleid 模块Id   3-综合消费，4-节水控制，5-自助洗衣，6-自助开水
 *
 * 2019-07-04 3-综合消费，4-节水控制，5-自助洗衣，6-自助开水--->统一模版id设为站点类型--->物联网类型
 *
 */
function getStationZ(dom, commonList, callback) {
    dom = $(dom);
    var data1 = commonList.station;
    var option = "<option value=''>" + queryI18n('user.choice') + "</option>";
    for (var key in data1) {
        if ("3,4,5,6".indexOf(data1[key].moduleid) != -1) {
            option += "<option value = '" + data1[key].stationcode + "'>" + data1[key].stationname + "</option>";
        }
    }
    dom.empty().append(option);
    if (dkyw.tool.isFunction(callback)) {
        callback(dom);
    }
}

/****************************************************************************************************/
/**
 * 获取国籍初始化+下拉列表
 * @param domain 元素id名
 * @param def 国籍code值 用于编辑时回显 国籍名称
 *
 */
function getCountry(domain, def) {
    dkyw.request.post("/business/getcountry", {"ispage": "no"}, function (response) {
        if (response.success) {
            var data1 = response.resultData;
            var option = "<option value=''>" + queryI18n('user.choice') + "</option>";
            for (var key in data1) {
                if (def) {
                    if (def == data1[key].code) {
                        option += "<option selected='selected' value = '" + data1[key].code + "'>" + data1[key].name + "</option>";
                    } else {
                        option += "<option value = '" + data1[key].code + "'>" + data1[key].name + "</option>";
                    }
                } else {
                    option += "<option value = '" + data1[key].code + "'>" + data1[key].name + "</option>";
                }
            }
            $("#" + domain).empty().append(option);
        } else {
            dkyw.dialog.error(queryI18n(response.message));
        }
    });
}

/**
 * 获取角色信息
 * @param domain 元素id名
 * @param def 角色id值 用于编辑时回显角色名称
 *
 */
function querysysrole(domain, def, orgid) {
    var param = new Object();
    if (typeof orgid != 'undefined' && orgid != '') {
        param.organid = orgid;
    }
    param.ispage = "no";
    dkyw.request.post("business/querysysrole", param, function (response) {
        if (response.success == true) {
            var list = response.resultData;
            var str = "<option value=''>" + queryI18n("user.choice") + "</option>";
            for (var key in list) {
                if (def) {
                    if (def == list[key].id) {
                        str += "<option selected='selected'  value='" + list[key].id + "'>" + list[key].rolename + "</option>";
                    } else {
                        str += "<option value='" + list[key].id + "' >" + list[key].rolename + "</option>";
                    }
                } else {
                    str += "<option value='" + list[key].id + "' >" + list[key].rolename + "</option>";
                }
            }
            $("#" + domain).empty().append(str);

        } else {
            dkyw.dialog.error(queryI18n(response.message));
        }
    });
}

/**
 * 获取校区代码
 *
 * @param domain 元素id名
 * @param def 校区代码id值 用于编辑时回显代码
 */
function getSysSchoolCodeList(domain, def, orgid) {
    var param = new Object();
    if (typeof orgid != 'undefined' && orgid != '') {
        param.organid = orgid;
    }
    param.ispage = "no";
    dkyw.request.post("business/querysysschooldef", param, function (response) {
        if (response.success) {
            if (response.resultData != null) {
                var list = response.resultData;
                var str = "<option value=''>" + queryI18n('user.choice') + "</option>";
                /*--请选择--*/
                for (var key in list) {
                    if (def) {
                        if (def == list[key].id) {
                            str += "<option selected='selected' code='" + list[key].schoolcode + "' value='" + list[key].id + "'>" + list[key].schoolname + "</option>";
                        } else {
                            str += "<option value='" + list[key].id + "' code='" + list[key].schoolcode + "'>" + list[key].schoolname + "</option>";
                        }
                    } else {
                        str += "<option value='" + list[key].id + "' code='" + list[key].schoolcode + "'>" + list[key].schoolname + "</option>";
                    }
                }
                $("#" + domain).empty().append(str);
            }
        } else {
            dkyw.dialog.error(queryI18n(response.message));
        }
    });
}

/**
 * 获取证件类型
 *
 * @param domain 元素id名
 * @param def 证件code值 用于编辑时回显民族名称
 */
function getIdType(domain, def) {
    dkyw.request.post("/business/queryidtype", {"ispage": "no"}, function (response) {
        if (response.success) {
            var data1 = response.resultData;
            var option = "<option value=''>" + queryI18n('user.choice') + "</option>";
            for (var key in data1) {
                if (def) {
                    if (def == data1[key].code) {
                        option += "<option selected='selected' value = '" + data1[key].code + "'>" + data1[key].name + "</option>";
                    } else {
                        option += "<option value = '" + data1[key].code + "'>" + data1[key].name + "</option>";
                    }
                } else {
                    option += "<option value = '" + data1[key].code + "'>" + data1[key].name + "</option>";
                }
            }
            $("#" + domain).empty().append(option);
        } else {
            dkyw.dialog.error(queryI18n(response.message));
        }
    });
}

/**
 * 获取押金
 * @param domain 元素id名
 * @param def 押金code值 用于编辑时回显押金名称
 */
function getPledge(domain, def) {
    dkyw.request.post("/business/querypledge", {"ispage": "no"}, function (response) {
        if (response.success) {
            var data1 = response.resultData;
            var option = "<option value=''>" + queryI18n('user.choice') + "</option>";
            for (var key in data1) {
                if (def) {
                    if (def == data1[key].pledgecode) {
                        option += "<option title='" + data1[key].pledgeamt + "' selected='selected' value = '" + data1[key].pledgecode + "'>" + data1[key].pledgename + "</option>";
                    } else {
                        option += "<option title='" + data1[key].pledgeamt + "' value = '" + data1[key].pledgecode + "'>" + data1[key].pledgename + "</option>";
                    }
                } else {
                    option += "<option title='" + data1[key].pledgeamt + "' value = '" + data1[key].pledgecode + "'>" + data1[key].pledgename + "</option>";
                }
            }
            $("#" + domain).empty().append(option);
        } else {
            dkyw.dialog.error(queryI18n(response.message));
        }
    });
}

/**
 * 获取学位
 * @param domain 元素id名
 * @param def 学位code值 用于编辑时回显学位名称
 */
function getDegree(domain, def) {
    dkyw.request.post("/business/querydegree", {"ispage": "no"}, function (response) {
        if (response.success) {
            var data1 = response.resultData;
            var option = "<option value=''>" + queryI18n('user.choice') + "</option>";
            for (var key in data1) {
                if (def) {
                    if (def == data1[key].code) {
                        option += "<option selected='selected' value = '" + data1[key].code + "'>" + data1[key].name + "</option>";
                    } else {
                        option += "<option value = '" + data1[key].code + "'>" + data1[key].name + "</option>";
                    }
                } else {
                    option += "<option value = '" + data1[key].code + "'>" + data1[key].name + "</option>";
                }
            }
            $("#" + domain).empty().append(option);
        } else {
            dkyw.dialog.error(queryI18n(response.message));
        }
    });
}

/**
 * 获取年级
 * @param domain 元素id名
 * @param def 年级code值 用于编辑时回显年级名称
 */
function getGrade(domain, def) {
    dkyw.request.post("/business/queryGrade", {"ispage": "no"}, function (response) {
        if (response.success) {
            var data1 = response.resultData;
            option = "<option value=''>" + queryI18n("user.choice") + "</option>";//--请选择--
            for (var key in data1) {
                if (def) {
                    if (def == data1[key].code) {
                        option += "<option selected='selected' value = '" + data1[key].code + "'>" + data1[key].name + "</option>";
                    } else {
                        option += "<option value = '" + data1[key].code + "'>" + data1[key].name + "</option>";
                    }
                } else {
                    option += "<option value = '" + data1[key].code + "'>" + data1[key].name + "</option>";
                }
            }
            $("#" + domain).empty().append(option);
        } else {
            dkyw.dialog.error(queryI18n(response.message));
        }
    });
}

/**
 * 获取账户类型
 * @param domain 元素id名
 * @param def 账户类型code值 用于编辑时回显账户类型名称
 */
function getAcctype(domain, def) {
    dkyw.request.post("/business/querysysacctypelist", {"ispage": "no"}, function (response) {
        if (response.success) {
            var data1 = response.resultData;
            var option = "<option value=''>" + queryI18n('user.choice') + "</option>";
            for (var key in data1) {
                if (def) {
                    if (def == data1[key].acctypecode) {
                        option += "<option selected='selected' value = '" + data1[key].acctypecode + "'>" + data1[key].acctypename + "</option>";
                    } else {
                        if (acctypelist[key].cardtype == state) {
                            option += "<option value = '" + data1[key].acctypecode + "'>" + data1[key].acctypename + "</option>";
                        }
                    }
                } else {
                    option += "<option value = '" + data1[key].acctypecode + "'>" + data1[key].acctypename + "</option>";
                }
            }
            $("#" + domain).empty().append(option);
        } else {
            dkyw.dialog.error(queryI18n(response.message));
        }
    });
}


/**
 * 查询圈存站点设置列表
 * @param domain 元素id名
 * @param def 站点code值 用于编辑时站点名称
 * @param moduleid 站点类型  3：综合消费 4：节水控制    5：自助洗衣    6：自助开水  10:圈存机  12：现金充值机 13-自助补卡机  如果为空全部查询
 */
function getStationInfos(domain, def, moduleid) {
    var url = "/business/getStationInfos";
    var param = new Object();
    param.ispage = "no";
    if (moduleid) {
        param.moduleid = moduleid;
    }
    dkyw.request.post(url, param, function (response) {
        if (response.success) {
            var list = response.resultData;
            var option = "<option value=''>" + queryI18n('user.choice') + "</option>";
            /*--请选择--*/
            for (var key in list) {
                if (def) {
                    if (def == list[key].stationcode) {
                        option += "<option selected='selected' value='" + list[key].stationcode + "'>" + list[key].stationname + "</option>";
                    } else {
                        option += "<option value='" + list[key].stationcode + "'>" + list[key].stationname + "</option>";
                    }
                } else {
                    option += "<option value='" + list[key].stationcode + "'>" + list[key].stationname + "</option>";
                }
            }
            $("#" + domain).empty().append(option);
        } else {
            dkyw.dialog.error(queryI18n(response.message));
        }
    });
}

/**
 * 查询身份
 */
function getPosition(domain, def) {
    var param = new Object();
    dkyw.request.post("/business/queryPositionByUserId", param, function (response) {
        if (response.success) {
            var data1 = response.resultData;
            var option = "<option value=''>" + queryI18n('user.choice') + "</option>";
            for (var key in data1) {
                if (def) {
                    if (def == data1[key].pcode) {
                        option += "<option selected='selected' value = '" + data1[key].pcode + "'>" + data1[key].pname + "</option>";
                    } else {
                        option += "<option value = '" + data1[key].pcode + "'>" + data1[key].pname + "</option>";
                    }
                } else {
                    option += "<option value = '" + data1[key].pcode + "'>" + data1[key].pname + "</option>";
                }
            }
            $("#" + domain).empty().append(option);
        } else {
            dkyw.dialog.error(queryI18n(response.message));
        }
    });
}

/**
 * 获取费用信息
 * @param obj
 */
function getFeeInfo(obj, flage) {
    dkyw.request.post("/business/getFeeInfo", {"pcode": obj}, function (response) {
        if (response.success) {
            var msg = response.resultData.feeInfo;
            var strs = new Array(); //定义一数组
            strs = msg.split("@"); //字符分割
            if (strs.length == 8) {
                if (strs[7] == '-1') {
                    dkyw.dialog.error(queryI18n("CORE20093"));
                    $("#linecredit").val("");
                    $("#positionid").val("");
                    return;
                }
                $("#managefee").val(strs[0]);
                $("#linecredit").val(fenToYuan(strs[7]));
                if (flage != true) {
                    $("#maxconsamt").val(fenToYuan(strs[4]));
                    $("#maxconstolamt").val(fenToYuan(strs[5]));
                }
            } else {
                console.log();
                dkyw.dialog.error("获取费用信息出错");
            }
        } else {
            dkyw.dialog.error(queryI18n(response.message));
        }
    });
}

/**
 * 初始化
 * 获取操作员信息
 * @param domain 元素id名
 * @param def 用于编辑修改时回显操作员名称
 */
function getAllUser(domain, def) {
    dkyw.request.post("business/getAllUser", {"ispage": "no"}, function (response) {
        if (response.success) {
            var list = response.resultData;
            if (domain) {
                var option = '<option value="">' + queryI18n('user.choice') + '</option>';
                /*--请选择--*/
                for (var key in list) {
                    if (def) {
                        if (def == list[key].id) {
                            option += "<option selected='selected' value='" + list[key].id + "' >" + list[key].username + "</option>";
                        } else {
                            option += "<option value='" + list[key].id + "' >" + list[key].username + "</option>";
                        }
                    } else {
                        option += "<option value='" + list[key].id + "' >" + list[key].username + "</option>";
                    }
                }
                $("#" + domain).empty().append(option);
            }
        } else {
            dkyw.dialog.error(queryI18n(response.message));
        }
    });
}

/**
 * 卡片类型下拉select（option：value中为cardtypecode）
 */
function getCardtypecode(dom, def) {
    dkyw.request.post("/business/queryCardtypeAll", {"ispage": "no"}, function (response) {
        if (response.success) {
            var data = response.resultData;
            var option = "<option value=''>" + queryI18n('user.choice') + "</option>";
            for (var key in data) {
                option += "<option value = '" + data[key].cardtypecode + "'>" + data[key].cardtypename + "</option>";
            }
            $("#" + dom).empty().append(option);
        } else {
            dkyw.dialog.error(queryI18n(response.message));
        }
    });
}

/**
 * 卡片类型下拉select（option：value中为cardtypename）
 */
function getCardtypename(dom, def) {
    dkyw.request.post("/business/queryCardtypeAll", {"ispage": "no"}, function (response) {
        if (response.success) {
            var data = response.resultData;
            var option = "<option value=''>" + queryI18n('user.choice') + "</option>";
            for (var key in data) {
                option += "<option value = '" + data[key].cardtypename + "'>" + data[key].cardtypename + "</option>";
            }
            $("#" + dom).empty().append(option);
        } else {
            dkyw.dialog.error(queryI18n(response.message));
        }
    });
}

/***********************************************************************************/
/**
 * 初始化查询商户条件树
 * 旧的初始化商户树写死了一些所以重新定义一个
 * merchantTree必须为一个jquery元素
 * ok和cancel回调
 */
function initMerchantView(merchantTree, ok, cancel) {
    var singleCheck = $(merchantTree).attr('singleSelect');
    $(merchantTree).click(function () {
        art.dialog.data("merchantBtnOk", function (m) {
            var rs = true;
            if (dkyw.tool.isFunction(ok)) {
                rs = ok(m);
            }
            if (false != rs) {
                merchantView.close();
            }
        });
        art.dialog.data("merchantBtnCancel", function () {
            if (dkyw.tool.isFunction(cancel)) {
                cancel();
            }
            merchantView.close();
        });
        var merchantView = dkyw.dialog.open({
            height: "60%",
            id: "MerchantView",
            title: queryI18n("merchantTree"),
            pageUrl: '/merchant/merchantView',
            autoValidate: false,
            singleCheck: singleCheck
        });
    });
}

/***********************************************************************************/
/**
 * 初始化查询部门树
 * 旧的初始化商户树写死了一些所以重新定义一个
 * merchantTree必须为一个jquery元素
 * ok和cancel回调
 */
function initDeptView(deptTree, ok, cancel) {
    var singleCheck = $(deptTree).attr('singleSelect');
    $(deptTree).click(function () {
        art.dialog.data("deptBtnOk", function (m) {
            var rs = true;
            if (dkyw.tool.isFunction(ok)) {
                rs = ok(m);
            }
            if (false != rs) {
                deptView.close();
            }
        });
        art.dialog.data("deptBtnCancel", function () {
            if (dkyw.tool.isFunction(cancel)) {
                cancel();
            }
            deptView.close();
        });
        var deptView = dkyw.dialog.open({
            height: "60%",
            id: "MerchantView",
            title: queryI18n("deptMentTree"),/*部门树*/
            pageUrl: '/dept/deptView',
            autoValidate: false,
            singleCheck: singleCheck
        });
    });
}

/*-----------------------------------------------------*/
/*部门弹窗start*/
var setting = {
    check: {
        enable: false,
        // chkStyle: "checkbox",
        // chkboxType: { "Y": "p", "N": "s" }
    },
    data: {
        simpleData: {
            enable: true
        }
    },
    callback: {
        beforeClick: beforeClick,
        onClick: onClick
        //onCheck: onCheck
    }
};

/*借方科目弹窗*/
var vouchersubjectsetting = {
    check: {
        enable: false,
        // chkStyle: "checkbox",
        // chkboxType: { "Y": "p", "N": "s" }
    },
    data: {
        simpleData: {
            enable: true
        }
    },
    callback: {
        beforeClick: beforeClick,
        onClick: vouchersubjectOnClick
        //onCheck: onCheck
    }
};
/*借方科目弹窗*/
var drsubjectsetting = {
    check: {
        enable: false,
        // chkStyle: "checkbox",
        // chkboxType: { "Y": "p", "N": "s" }
    },
    data: {
        simpleData: {
            enable: true
        }
    },
    callback: {
        beforeClick: beforeClick,
        onClick: drsubjectOnClick
        //onCheck: onCheck
    }
};
/*贷方科目弹窗*/
var crsubjectsetting = {
    check: {
        enable: false,
        // chkStyle: "checkbox",
        // chkboxType: { "Y": "p", "N": "s" }
    },
    data: {
        simpleData: {
            enable: true
        }
    },
    callback: {
        beforeClick: beforeClick,
        onClick: crsubjectOnClick
        //onCheck: onCheck
    }
};

/**
 * 初始化查询部门条件树
 */
function initDepart(treeid, list, objStr) {
    if (objStr == undefined || objStr == null) {
        objStr = "";
    }
    departnoStr = "departno" + $.trim(objStr);
    departnameStr = "departname" + $.trim(objStr);
    dialogmer = art.dialog({
        className: "g-dialog g-tip-dialog",
        width: 500,
        height: "auto",
        title: queryI18n("reportloss.choicedepart"),//"选择部门",
        padding: "0 0",
        content: $(".modal-box5").html(),
        lock: true,
        cancel: true, //为true等价于function(){}部门信息弹窗本身的取消不需要显示
        init: function () {
            var contextp = $("meta[name='_ctx']").attr("content");
            var prarentpath = contextp + "/resources/images/ztree/parent.png";
            var childpath = contextp + "/resources/images/ztree/child.png";
            for (var i = 0; i < list.department.length; i++) {
                //  var marchant = response.resultData[i];
                if (list.department[i].open === null) {
                    list.department[i].icon = childpath;
                } else {
                    list.department[i].icon = prarentpath;
                }

            }
            merchTree = $.fn.zTree.init($("#" + treeid), setting, list.department);
        }
    });
}


/**
 * 初始化查询科目条件树
 */
function initVoucherSubject(treeid, list) {
    dialogmer = art.dialog({
        className: "g-dialog g-tip-dialog",
        width: 500,
        height: "auto",
        title: queryI18n("reportloss.choicesubject"),//"选择部门",
        padding: "0 0",
        content: $(".modal-box5").html(),
        lock: true,
        cancel: true, //为true等价于function(){}部门信息弹窗本身的取消不需要显示
        init: function () {
            merchTree = $.fn.zTree.init($("#" + treeid), vouchersubjectsetting, list.subject);
        }
    });
}

/**
 * 初始化查询科目条件树
 */
function initcrSubject(treeid, list) {
    dialogmer = art.dialog({
        className: "g-dialog g-tip-dialog",
        width: 500,
        height: "auto",
        title: queryI18n("reportloss.choicesubject"),//"选择部门",
        padding: "0 0",
        content: $(".modal-box5").html(),
        lock: true,
        // cancel: true, //为true等价于function(){}部门信息弹窗本身的取消不需要显示
        init: function () {
            merchTree = $.fn.zTree.init($("#" + treeid), drsubjectsetting, list.subject);
        }
    });
}

/**
 * 初始化查询科目条件树
 */
function initdrSubject(treeid, list) {
    dialogmer = art.dialog({
        className: "g-dialog g-tip-dialog",
        width: 500,
        height: "auto",
        title: queryI18n("reportloss.choicesubject"),//"选择部门",
        padding: "0 0",
        content: $(".modal-box5").html(),
        lock: true,
        cancel: true, //为true等价于function(){}部门信息弹窗本身的取消不需要显示
        init: function () {
            merchTree = $.fn.zTree.init($("#" + treeid), crsubjectsetting, list.subject);
        }
    });
}


/**
 * 初始化查询科目条件树
 */
function initdrSubject1(treeid, list) {
    dialogmer = art.dialog({
        className: "g-dialog g-tip-dialog",
        width: 100,
        height: "auto",
        title: queryI18n("reportloss.choicesubject"),//"选择部门",
        padding: "0 0",
        content: $(".modal-box5").html(),
        lock: true,
        cancel: true, //为true等价于function(){}部门信息弹窗本身的取消不需要显示
        init: function () {
            merchTree = $.fn.zTree.init($("#" + treeid), crsubjectsetting, list.subject);
        }
    });
}


//节点选择触发事件
function onClick(event, treeId, treeNode, clickFlag) {
    var name = getMerchName(treeNode.id, treeNode, '');
    var merch = treeNode.id + "@" + name;
    setMerch(merch);
}

//节点选择触发事件
function vouchersubjectOnClick(event, treeId, treeNode, clickFlag) {
    var name = getMerchName(treeNode.id, treeNode, '');
    var merch = treeNode.id + "@" + name;
    var balance = queryBalanceBySubcode(treeNode.id);
    merch += "@" + balance;
    vouchersubjectsetMerch(merch);
}

//节点选择触发事件
function drsubjectOnClick(event, treeId, treeNode, clickFlag) {
    var name = getMerchName(treeNode.id, treeNode, '');
    var merch = treeNode.id + "@" + name;
    drsubjectsetMerch(merch);
}

//节点选择触发事件
function crsubjectOnClick(event, treeId, treeNode, clickFlag) {
    var name = getMerchName(treeNode.id, treeNode, '');
    var merch = treeNode.id + "@" + name;
    crsubjectsetMerch(merch);
}


function getMerchName(obj, treeNode, name) {
    var id = obj;
    if (treeNode.pId == null) {
        var result = merchTree.getNodeByParam("id", treeNode.id).name + "-" + name;
        return result.substring(0, result.length - 1);
    } else {
        name = merchTree.getNodeByParam("id", id).name + "-" + name;
        var idTemp = merchTree.getNodeByParam("id", treeNode.pId).id;
        var treeNodeTemp = merchTree.getNodeByParam("id", treeNode.pId);
        return getMerchName(idTemp, treeNodeTemp, name);
    }
}

var log, className = "dark";

function beforeClick(treeId, treeNode, clickFlag) {
    className = (className === "dark" ? "" : "dark");
    return (treeNode.click != false);
}

//填写
var departnameStr = "departname";
var departnoStr = "departno";

function setMerch(merch) {
    dialogmer.close();
    var strs = new Array(); //定义一数组
    strs = merch.split("@"); //字符分割
    var no = strs[0];
    var name = strs[1];
    //写死的
    $("#" + departnoStr).val(no);
    $("#" + departnameStr).val(name);

}


function vouchersubjectsetMerch(merch) {
    dialogmer.close();
    var strs = new Array(); //定义一数组
    strs = merch.split("@"); //字符分割
    var no = strs[0];
    var name = strs[1];
    var balance = strs[2];
    //写死的
    $("#drsubjectcode").val(no);
    $("#drsubjectname").val(name);
    var data = art.dialog.data("subject");
    $("input[name='subjectid" + data + "']").val(no);
    $("input[name='subjectname" + data + "']").val(name + "【余额:" + balance + "】");
}

function drsubjectsetMerch(merch) {
    dialogmer.close();
    var strs = new Array(); //定义一数组
    strs = merch.split("@"); //字符分割
    var no = strs[0];
    var name = strs[1];
    //写死的
    $("#drsubjectcode").val(no);
    $("#drsubjectname").val(name);
}


function crsubjectsetMerch(merch) {
    dialogmer.close();
    var strs = new Array(); //定义一数组
    strs = merch.split("@"); //字符分割
    var no = strs[0];
    var name = strs[1];
    //写死的
    $("#crsubjectcode").val(no);
    $("#crsubjectname").val(name);
}

/*部门弹窗end*/

/*-----------------------------------------------------*/
/**
 * 金额格式转换：分转成元
 * @param obj
 * @returns {String}
 */
function fenToYuan(obj) {
    if (typeof (obj) == "undefined" || obj == "" || obj == "null" || obj == "undefined") {
        return "0.00"
    }
    var yuan = obj / 100.0;
    return yuan.toFixed(2);
//    var str, posIndex, len;
//    obj = removeZero(obj);
//    var tmp = obj.indexOf("-");
//    if (obj === undefined || isEmpty(obj) || obj == 0) {
//        str = "0.00";
//    } else if (tmp >= 0) {
//        len = obj.length;
//        if (len == 2) {
//            str = "-0.0" + obj.substr(1);
//        } else if (len == 3) {
//            str = "-0." + obj.substr(1);
//        } else {
//            str = obj.substr(0, len - 2);
//            str = str + "." + obj.substr(len - 2, 2);
//        }
//    } else {
//        len = obj.length;
//        if (len == 1) {
//            str = "0.0" + obj;
//        } else if (len == 2) {
//            str = "0." + obj;
//        } else {
//            str = obj.substr(0, len - 2);
//            str = str + "." + obj.substr(len - 2, 2);
//        }
//    }
//    if (str === undefined || isEmpty(str)) {
//        str = "0.00";
//    }
//    return str;
}

/**
 * 金额格式转换：元转成分
 * @param obj
 * @returns {String}
 */
function yuanToFen(obj) {
    var str, posIndex;
    if (obj === undefined || isEmpty(obj)) {
        return "0";
    } else {
        var posIndex = obj.indexOf(".");
        if (posIndex > 0) {
            var len = obj.length;
            if (len == posIndex + 1) {
                str = obj.substr(0, posIndex)
                if (str == "0") {
                    str = "";
                }
                str += "00";
            } else if (len == posIndex + 2) {
                str = obj.substr(0, posIndex);
                if (str == "0") {
                    str = "";
                }
                str += obj.substr(posIndex + 1, 1) + "0";
            } else if (len == posIndex + 3) {
                str = obj.substr(0, posIndex);
                if (str == "0") {
                    str = "";
                }
                str += obj.substr(posIndex + 1, 2);
            } else {
                str = obj.substr(0, posIndex);
                if (str == "0") {
                    str = "";
                }
                str += obj.substr(posIndex + 1, 2);
            }
        } else {
            str = obj + "00";
        }
    }
    str = removeZero(str);
    if (str === undefined || isEmpty(str) || str == 0) {
        str = "0";
    }
    return str;
}

/**
 * 去除首部‘0’字符
 * @param str
 * @returns
 */
function removeZero(str) {
    if (str == 0) return '0';
    var ch;
    if (isEmpty(str)) {
        return "";
    }
    try {
        for (i = 0; i < str.length; i = i + 1) {
            ch = str.charAt(i);
            if (ch == '0') {
                continue;
            } else {
                return str.substr(i);
            }
        }
    } catch (e) {
        return "";
    }
}

//时间转换
function getformatDate(time) {
    var now = new Date(time);
    var year = now.getYear() + 1900;
    var month = now.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var date = now.getDate();
    if (date < 10) {
        date = "0" + date;
    }
    return year + "-" + month + "-" + date;
}

//验证证件号码格式
function checkIdserialLetter(str) {
    var result = false;
    var regEx = /^[0-9a-zA-Z]{3}[0-9]*$/;
    var re = regEx.test(str);
    if (re) {
        result = true;
    }
    console.log(result + "ids");
    return result;
}

//判断是否为数字
function isNaNs(val) {
    var re = /^[0-9]*$/;
    return re.test(val);
}

//校验用户名不可以为特殊字符
function nameValidate(name) {
    var re = new RegExp("[(\#)(\$)(\%)(\&)(\,)(\，)]+");
    return re.test(name);
}

//去除字符串两端的空白字符
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};

//判断字符串是否为空
function isEmpty(obj) {
    if (typeof obj != "undefined" && $.trim(obj) != "") {
        return false;
    } else {
        return true;
    }
}

//检验数字
function passValue() {
    var bankcd = $("#bankcd").val().trim();
    if (!isEmpty(bankcd)) {
        if (!isNaNs(bankcd)) {
            alert('请输入数字');
            $("#bankcd").val("");
        }
    } else {
        $("#bankcd").val("");
    }
}

//校验金额
function checkAmt() {
    var openamt = $("#openamt").val();
    if (!isCurrency(openamt)) {
        alert("请输入正确格式的开户金额");
        $("#openamt").val("");
        return false;
    }
}

//验证金额的合法性
function isCurrency(obj) {
    var reg = /^(([1-9]+\d*)|(0{1,1}))(\.\d{0,2})?$/;
    return isEmpty(obj) || reg.test(obj);
}

/**
 * 按照中英文返回相关的数据
 * @param name
 * @param enname
 * @returns {*}
 */
function quereyI18nDB(name, enname) {
    if (i18n_language_session == "zh_CN") {
        return name;
    } else if (i18n_language_session == "en_US") {
        return enname;
    }
}

/**
 * 根据父id和roleid查询是否有按钮权限
 * 功能描述：
 * 时间：2018年6月1日
 * @author ：langailing
 * @param parentid
 */
function queryButton(parentid) {
    dkyw.request.postSync("business/querySysMenuButtonByParentid", {parentid: parentid}, function (response) {
        $("#toolbar").empty();
        if (response.success) {
            var data = response.resultData;
            var html = "";
            for (var i = 0; i < data.length; i++) {
                html = '<a class="' + data[i].imgurl + '" href="javascript:;" id="' + data[i].menuurl + '"><i></i>' + queryI18n(data[i].menukey) + '</a>';
                $("#toolbar").append(html);
            }
        }
        var exporttype = '<div class="button-inline clearfix" style="float: right;margin-top: 8px;">';
        exporttype += '<select class="form-control" id="exporttype" onchange="refreshBootstrapTable()">';
        exporttype += '<option value="">' + queryI18n("homepage.exportthispage") + '</option>'
        exporttype += '<option value="all">' + queryI18n("homepage.exportall") + '</option>'
        exporttype += '<option value="selected">' + queryI18n("homepage.exportselected") + '</option>'
        exporttype += '</select>';
        exporttype += '</div>'
        $("#toolbar").before(exporttype);
    });
}

function refreshBootstrapTable() {
    $("#mytab").bootstrapTable("refreshOptions", {exportDataType: $("#exporttype").val()})
}

//如果是超级管理员弹窗加一条件
function querysysOrgname(dom, orgid, flag) {
    if (orgid != 1) {
        return;
    }
    dom = $(dom);
    var param = new Object();
    dkyw.request.postSync("/business/queryOrganizationInfos", param, function (response) {
        if (response.success) {
            var data = response.resultData;
            if (orgid) {
                var div = "<div class='form-group'>";
                div += "<label for='falgid' class='col-sm-3 control-label'>" + queryI18n("Multi.organizationname") + "：</label>";
                /*机构*/
                div += "<div class='col-sm-9'>";
                if (flag == 0) {//新增
                    div += "<select class='form-control validate[required]' id='organid' name='organid'>";
                } else {//编辑
                    div += "<select class='form-control validate[required]' disabled='disabled' id='organid' name='organid'>";
                }
                div += "<option value = ''>" + queryI18n("user.choice") + "</option>";
                for (var key in data) {
                    div += "<option value = '" + data[key].id + "'>" + data[key].name + "</option>";
                }
                div += "</select>";
                div += "</div>";
                div += "</div>";
                dom.before(div);
            } else {
                orgList = data;
            }
        } else {
            dkyw.dialog.error(queryI18n(response.message));
        }
    });
}

//如果是超级管理员增加一列 和 查询条件
function saveOrgColumn(option, data) {
    if ($("#orgid").val() == "1") {
        option.push({
            title: queryI18n('Multi.organizationdatail'), /*所属机构*/
            field: 'orgid',
            align: 'center',
            width: "15%",
            formatter: function (value, row, index) {
                var name = "";
                var orgList = data.organization;
                if (orgList) {
                    for (var key in orgList) {
                        if (value == orgList[key].id) {
                            name = orgList[key].organname;
                            break;
                        }
                    }
                }
                return name;
            }
        })
        dkyw.request.postSync("/business/queryOrganizationInfos", null, function (response) {
            if (response.success) {
                var data = response.resultData;
                //添加机构代码的查询条件
                var span = " <span class='group'>";
                span += "<label for='organid' style='width: 83px;'>" + queryI18n("Multi.organizationcode") + ":&nbsp;</label>";
                span += "<select class='form-control' name='organid' id='queryorganid' >";
                span += "<option value=''>" + queryI18n('user.choice') + "</option>";
                for (var key in data) {
                    span += "<option value = '" + data[key].id + "'>" + data[key].name + "</option>";
                }
                span += "</select>";
                span += "</span>";
                $("#botton").before(span);
            } else {
                dkyw.dialog.error(queryI18n(response.message));
            }
        });
    }
}

//转换部门名称xx-xx-xx..
function forDepartToNames(commList, deparvalue, deparname, callback) {
    for (var i = 0; i < commList.length; i++) {
        if (deparvalue == commList[i].id) {
            deparname = "-" + commList[i].name + deparname;
            forDepartToNames(commList, commList[i].pId, deparname, callback)
            return;
        } else if (deparvalue == commList[i].name) {
            deparname = "-" + commList[i].name + deparname;
            forDepartToNames(commList, commList[i].pId, deparname, callback)
            return;
        }
    }
    if (dkyw.tool.isFunction(callback)) {
        callback(deparname.substring(1, deparname.length));
    }
}

//转换日期类型
function getReplaceDate(time) {
    var pattern = /(\d{4})(\d{2})(\d{2})/;
    var formatedDate = time.replace(pattern, '$1-$2-$3');
    return formatedDate;
}

//获取当前日期格式为yyyymmdd
function getNowFormatDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + "" + month + "" + strDate;
    return currentdate;
}

/**
 * 币别下拉显示
 * @param dom
 * @param data
 */
function getFinanceCurrency(dom, data) {
    var option = "<option value=''>" + queryI18n('user.choice') + "</option>";
    for (var key in data) {
        if (data) {
            option += "<option value = '" + data[key].id + "'>" + data[key].code + "</option>";
        }
        $("#" + dom).empty().append(option);
    }
}

/**
 * 凭证字下拉显示
 * @param dom
 * @param data
 */
function getFinancevouchertype(dom, data) {
    var option = "<option value=''>" + queryI18n('user.choice') + "</option>";
    for (var key in data) {
        if (data) {
            option += "<option value = '" + data[key].id + "'>" + data[key].voucher + "</option>";
        }
        $("#" + dom).empty().append(option);
    }
}

if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (str) {
        var reg = new RegExp("^" + str);
        return reg.test(this);
    }
}
if (typeof String.prototype.endsWith != 'function') {
    String.prototype.endsWith = function (str) {
        var reg = new RegExp(str + "$");
        return reg.test(this);
    }
}

function queryButtonPayChannel(parentid) {
    dkyw.request.postSync("business/querySysMenuButtonByParentid", {parentid: parentid}, function (response) {
        $("#toolbar").empty();
        if (response.success) {
            var data = response.resultData;
            var html = "";
            for (var i = 0; i < data.length; i++) {
                html = '<a class="' + data[i].imgurl + '" href="javascript:;" id="' + data[i].menuurl + '"><i></i>' + queryI18n(data[i].menukey) + '</a>';
                $("#toolbar").append(html);
            }
        }
        var exporttype = '<div class="button-inline clearfix" style="float: right;margin-top: 8px;">';
        exporttype += '<select class="form-control" id="exporttype" onchange="refreshBootstrapTable()">';
        exporttype += '<option value="">' + queryI18n("homepage.exportthispage") + '</option>'
        exporttype += '<option value="all">' + queryI18n("homepage.exportall") + '</option>'
        exporttype += '<option value="selected">' + queryI18n("homepage.exportselected") + '</option>'
        exporttype += '</select>';
        exporttype += '</div>'
        $("#toolbar").before(exporttype);
        //绑定 编辑事件;
        $("#edit").on("click", function () {
            /* var sss = $("table .selected").children('td').eq(1).html();
             alert(sss);*/
            M.checkedit();
            if (ISFLAG) {
                M.middleDialog(1, type);
                setTimeout(function () {
                    M.getChannelRelationById(type);
                }, 40);
            }
        });
    });
}

/**
 * 产品下拉框
 * @param dom
 * @param commonList
 * @param callback
 */
function getProduct(dom, commonList, callback) {
    dom = $(dom);
    var data1 = commonList;
    var option = "<option value=''>" + queryI18n('public.pleaseSelect') + "</option>";
    for (var key in data1) {
        option += "<option value = '" + data1[key].id + "'>" + getProductGroupName(data1[key].productgroup) + "-" + data1[key].productname + "</option>";
    }
    dom.empty().append(option);
    if (dkyw.tool.isFunction(callback)) {
        callback(dom);
    }
}

function getProductGroupName(value) {
    if ("1" == value) {
        return queryI18n("product.subsidy");
    } else if ("2" == value) {
        return queryI18n("product.managefee");
    } else if ("3" == value) {
        return queryI18n("product.consumeRule");
    } else if ("4" == value) {
        return queryI18n("product.specialPurpose");
    }
    return "未知项目";
}

function autoMatch() {
    var val = $("#searchDept").val();
    var deptArr;
    if (typeof commonData == 'undefined') {
        deptArr = commonList;
    } else {
        deptArr = commonData;
    }
    if (val.length > 0) {
        merchTree = $.fn.zTree.init($("#treeDemo"), setting, deptArr.department);
        var zTree = $.fn.zTree.getZTreeObj("treeDemo");
        var nodeList = zTree.getNodesByParamFuzzy("name", val);
        //将找到的nodelist节点更新至Ztree内
        $.fn.zTree.init($("#treeDemo"), setting, nodeList);
    } else {
        merchTree = $.fn.zTree.init($("#treeDemo"), setting, deptArr.department);
    }
}
