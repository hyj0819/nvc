layui.use('table', function(){
    var table = layui.table;

    table.render({
        elem: '#demo'
        ,url:'/nvc/sysuser/sysuserlistinfo'
        ,cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
        ,height:400
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
});



