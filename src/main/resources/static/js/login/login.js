layui.use(['form','jquery','layer'], function(){  //如果只加载一个模块，可以不填数组。如：layui.use('form')
    var form = layui.form //获取form模块
        ,upload = layui.upload; //获取upload模块

    //监听提交按钮
    form.on('submit(login)', function(data){
        var $  = layui.jquery;
        $.ajax({
            url:'loginIn',
            data:JSON.stringify(data.field),
            dataType:'json',
            type:'post',
            contentType: 'application/json',
            success:function(data){
                var falg = data.success;
                if(falg){
                    window.location.href="index/index";
                }else{
                    layer.msg(data.message)
                }
            },
            error:function () {
                layer.msg("密码修改失败")
            }
        });
        //防止页面跳转
        return false;
    });
});

