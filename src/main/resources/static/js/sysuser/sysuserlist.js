layui.use('table', function(){
    var table = layui.table;
    var $ = layui.jquery,form = layui.form;
    table.render({
        elem: '#demo'
        ,url:'/nvc/sysuser/sysuserlistinfo'
        ,cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增

        ,page: true //开启分页
        ,toolbar: 'default'
        ,cols: [[
            {type:'checkbox'},
            {field:'id', width:80, title: 'ID', sort: true}
            ,{field:'username', width:80, title: '用户名'}
            ,{field:'sex', width:80, title: '性别', sort: true}
            ,{field:'age', width:80, title: '年龄'}
            ,{field:'phone', title: '联系电话', width: '30%', minWidth: 100} //minWidth：局部定义当前单元格的最小宽度，layui 2.2.1 新增
            ,{field:'address', title: '联系地址', sort: true}
            ,{field:'userstatus', title: '状态', sort: true},
            {fixed: 'right', width:150, align:'center', toolbar: '#barDemo'} //这里的toolbar值是模板元素的选择器
        ]],
        done: function(res, curr, count){
            $(".layui-table-box").find("[data-field='id']").css("display","none");
            $("[data-field='userstatus']").children().each(function(){
                if($(this).text()=='1'){
                    $(this).text("正常")
                }else if($(this).text()=='0'){
                    $(this).text("异常")
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

    //监听行工具事件
    table.on('tool(test)', function(obj){ //注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
        var data = obj.data //获得当前行数据
            ,layEvent = obj.event; //获得 lay-event 对应的值
        if(layEvent === 'detail'){
            layer.msg('查看操作');
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
                    /*layer.msg(data.msg, {
                        icon: 6,//成功的表情
                        time: 1000 //1秒关闭（如果不配置，默认是3秒）
                    }, function(){
                        location.reload();
                    });*/
                    layer.close(index);
                }
            },
            complete: function () {
                layer.close(this.layerIndex);
            },
        });
    }


});


