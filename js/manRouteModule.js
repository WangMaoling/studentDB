(function(){
    angular.module("manRouteModule",["ngRoute"])
        .config(["$routeProvider",function($routeProvider){
            $routeProvider
                .when("/homePage",{
                    templateUrl:"tpl/homePage.html",
                    controller:"homePageCtrl"
                })
                .when("/addPage",{
                    templateUrl:"tpl/addPage.html",
                    controller:"addCtrl"
                })

                .otherwise({
                    redirectTo:"/homePage"
                })
        }])
})()