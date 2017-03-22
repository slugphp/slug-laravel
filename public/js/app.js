(function () {
    angular.module('inspinia', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
        'pascalprecht.translate',       // Angular Translate
        'ngIdle',                       // Idle timer
        'ngSanitize'                    // ngSanitize
    ])

    // var userToken = getCookie('USER_TOKEN') || false;
    // if (!userToken) {
    //     toLoginPage();
    // }
})();


function toLoginPage() {
    console.log('login func')
    if (window.history && window.history.pushState) {
        history.pushState({},"need_login","./#/login");
    } else {
        window.location.href="./"
    }
}

function getCookie(name)
{
    var arr,reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if (arr = decodeURIComponent(document.cookie).match(reg))
        return unescape(arr[2]);
    else
        return '';
}