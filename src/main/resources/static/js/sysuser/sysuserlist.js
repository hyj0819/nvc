layui.use('table', function(){
    var table = layui.table;
    var $ = layui.jquery,form = layui.form;
    table.render({
         elem: '#demo'
        ,url:'/nvc/sysuser/sysuserlistinfo'
        ,cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
        ,page: true //开启分页
        ,toolbar: '#toolbarDemo'
        ,cols: [[
            {type:'checkbox'},
            {field:'id', title: 'ID', align:'center',sort: true}
            ,{field:'userno', align:'center', title: '用户账户'}
            ,{field:'username', align:'center', title: '用户昵称'}
            ,{field:'sex',align:'center', title: '性别'}
            ,{field:'age',  align:'center',title: '年龄'}
            ,{field:'phone', title: '联系电话', align:'center'} //minWidth：局部定义当前单元格的最小宽度，layui 2.2.1 新增
            ,{field:'address', title: '联系地址', align:'center'}
            ,{field:'userstatus', title: '状态', align:'center'}
            ,{field:'inputdate', title: '录入时间', align:'center' ,templet :function (row){
                    return FormatTime(row.inputdate);
                }}
            ,{fixed: 'right',title: '操作', align:'center', toolbar: '#barDemo',width:'5%'} //这里的toolbar值是模板元素的选择器
        ]],
        done: function(res, curr, count){
            $(".layui-table-box").find("[data-field='id']").css("display","none");
            $("[data-field='userstatus']").children().each(function(){
                if($(this).text()=='1'){
                    $(this).html("<button class=\"layui-btn layui-btn-xs\">正常</button>")
                }else if($(this).text()=='0'){
                    $(this).html("<button class=\"layui-btn layui-btn-primary layui-btn-xs\">禁用</button>")
                }
            });
            $("[data-field='sex']").children().each(function(){
                if($(this).text()=='1'){
                    $(this).text("男")
                }else if($(this).text()=='0'){
                    $(this).text("女")
                }
            });
        }
    });

    function FormatTime(v){
        return layui.util.toDateString(new Date(v).getTime());
    }

    //监听行工具事件
    table.on('tool(test)', function(obj){ //注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
        var data = obj.data //获得当前行数据
         ,layEvent = obj.event; //获得 lay-event 对应的值
        if(layEvent === 'add'){
            layer.open({
                type: 1,
                title:"新增用户信息",
                closeBtn: false,
                shift: 2,
                area: ['400px', '450px'],
                shadeClose: true,
                // btn: ['新增', '取消'],
                // btnAlign: 'c',
                content: $("#add-user"),
                success: function(layero, index){
                },
                yes:function(){
                }
            });
        } else if(layEvent === 'del'){
            layer.confirm('确认删除此用户?', function(index){
                //向服务端发送删除指令
                delSysUser(data.id);
                layer.close(index);
            });
        } else if(layEvent === 'edit'){
            layer.msg('编辑操作');
        }
    });



    /**
     * 删除用户信息
     */
    function delSysUser(id) {
        var param = new Object();
        param.id = id;
        $.ajax({
            url:'/nvc/sysuser/delsysuserinfo',
            type:'post',
            data:JSON.stringify(param),
            contentType: 'application/json',
            dataType : 'json',
            success:function(data){
                if(data.success ==true){
                    layer.msg("删除成功", {
                        icon: 6,//成功的表情
                        time: 2000 //1秒关闭（如果不配置，默认是3秒）
                    }, function(){
                        location.reload();
                    });
                }else{
                    layer.msg("删除失败");
                    layer.close(index);
                }
            },
            complete: function () {
                layer.close(this.layerIndex);
            },
        });
    }

    //查询列表
    $('#querySysUser').on('click', function() {
        var username = $("#username").val();
        var address = $("#address").val();
        var phone = $("#phone").val();
        var status = $("#status option:selected").val();
        table.reload('demo', {
            url : "/nvc/sysuser/sysuserlistinfo",
            method : 'post',
            contentType: 'application/json',
            dataType : 'json',
            where : {
                username : $('#username').val(),
                address : address,
                phone : phone,
                status : status
            },
            page : {
                curr : 1
            }
        });
        return false;
    });

    layui.use(['form'], function () {
        var form = layui.form;
        //监听提交
        form.on('submit(save)', function (data) {
            $.ajax({
                type:'post',
                url : "/nvc/sysuser/addsysuserinfo",
                data: JSON.stringify(data.field),
                contentType: 'application/json',
                dataType : 'json',
                success: function (data) {
                    if(data.success ==true){
                        layer.msg("添加用户信息成功", {
                            icon: 6,//成功的表情
                            time: 2000 //1秒关闭（如果不配置，默认是3秒）
                        }, function(){
                            location.reload();
                        });
                    }else{
                        layer.msg("添加用户信息失败");
                        layer.close(index);
                    }
                }
            });
        });

    });

});

