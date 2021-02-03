layui.use('table', function(){
    var table = layui.table;

    table.render({
        elem: '#test'
        ,url:'/nvc/sysuser/sysuserlistinfo'
        ,cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
        ,page: true //开启分页
        ,cols: [[
            {type:'checkbox'},
            {field:'id', width:80, title: 'ID', sort: true}
            ,{field:'username', width:80, title: '用户名'}
            ,{field:'sex', width:80, title: '性别', sort: true}
            ,{field:'age', width:80, title: '年龄'}
            ,{field:'phone', title: '联系电话', width: '30%', minWidth: 100} //minWidth：局部定义当前单元格的最小宽度，layui 2.2.1 新增
            ,{field:'address', title: '联系地址', sort: true}
            ,{field:'status', title: '状态', sort: true}
        ]]
    });
});


