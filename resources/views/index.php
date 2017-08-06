<html ng-app="inspinia">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title page-title></title>
        <link href="font-awesome/css/font-awesome.css" rel="stylesheet">
        <link id="loadBefore" href="static/slug-laravel.min.css" rel="stylesheet">
    </head>
    <body ng-controller="MainCtrl" class="{{$state.current.data.specialClass}}" landing-scrollspy id="page-top">
        <div ui-view></div>
        <script src="js/jquery/jquery-2.1.1.min.js"></script>
        <script src="js/plugins/jquery-ui/jquery-ui.js"></script>
        <script src="js/bootstrap/bootstrap.min.js"></script>
        <script src="js/plugins/metisMenu/jquery.metisMenu.js"></script>
        <script src="js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
        <script src="js/plugins/pace/pace.min.js"></script>
        <script src="js/inspinia.js"></script>
        <script src="js/angular/angular.min.js"></script>
        <script src="js/angular/angular-sanitize.js"></script>
        <script src="js/plugins/oclazyload/dist/ocLazyLoad.min.js"></script>
        <script src="js/angular-translate/angular-translate.min.js"></script>
        <script src="js/ui-router/angular-ui-router.min.js"></script>
        <script src="js/bootstrap/ui-bootstrap-tpls-1.1.2.min.js"></script>
        <script src="js/plugins/angular-idle/angular-idle.js"></script>
        <script src="js/app.js"></script>
        <script src="js/config.js"></script>
        <script src="js/directives.js"></script>
        <script src="js/controllers.js"></script>
    </body>
</html>