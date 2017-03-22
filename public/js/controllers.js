(function () {


    // 首页
    function MainCtrl($location)
    {
        // $location.path('/login')
        console.log('var')
        this.userName = '您好，' + (getCookie('USER_NAME') || '管理员');
        this.helloText = '欢迎来到后台管理系统';
        this.descriptionText = 'Beta 0.3';
    };

    // 用户列表页面
    function UserListCtrl($scope, $http, $filter, DTOptionsBuilder, DTColumnBuilder, $uibModal, notify, SweetAlert)
    {};

    // 用户管理弹窗
    function UserModifyCtrl($scope, $http, DTOptionsBuilder, DTColumnBuilder, $uibModalInstance, notify, $sce, user, dtInstance)
    {};

    // 日志列表页
    function AccesslogCtrl($scope, $http, $filter, DTOptionsBuilder, DTColumnBuilder, $uibModal, notify)
    {};

    var postConfig = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        transformRequest: function(data){
            return $.param(data);
        }
    }
    function DTOptionsBuilderFn(DTOptionsBuilder, url, orderNum, rowCallback, fnCallback) {}

    var datatablesLangCn = {
        "sProcessing": "处理中...",
        "sLengthMenu": "每页显示 _MENU_ 项结果",
        "sZeroRecords": "没有匹配结果",
        "sInfo": "本页显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
        "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
        "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
        "sInfoPostFix": "",
        "sSearch": "搜索:",
        "sUrl": "",
        "sEmptyTable": "载入中...",
        "sLoadingRecords": "载入中...",
        "sInfoThousands": ",",
        "oPaginate": {
            "sFirst": "首页",
            "sPrevious": "上页",
            "sNext": "下页",
            "sLast": "末页"
        },
        "oAria": {
            "sSortAscending": ": 以升序排列此列",
            "sSortDescending": ": 以降序排列此列"
        }
    }

    angular
        .module('inspinia')
        .controller('MainCtrl', MainCtrl)
        .controller('UserListCtrl', UserListCtrl)
        .controller('UserModifyCtrl', UserModifyCtrl)
        .controller('AccesslogCtrl', AccesslogCtrl)
})();