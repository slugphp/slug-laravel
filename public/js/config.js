(function () {

function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    $urlRouterProvider.otherwise("index/main");

    $ocLazyLoadProvider.config({
        debug: false
    });

    $stateProvider
        .state('auth', {
            abstract: true,
            url: "/auth",
            templateUrl: ''
        })
        .state('auth.login', {
            url: "/login",
            templateUrl: "views/login.html",
            data: {
                pageTitle: '请登录',
                specialClass: 'gray-bg'
            }
        })
        // 首页
        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html"
        })
        .state('index.main', {
            url: "/main",
            templateUrl: "views/main.html",
            data: { pageTitle: '首页' }
        })
}

angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    })
    .filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    });
})();