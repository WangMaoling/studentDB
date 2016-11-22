/**
 * Created by Administrator on 2016-10-18.
 */
(function(){
    angular.module("addCtrlModule",[])
        .controller("addCtrl",["$scope","manEditDataService","$location",
            function($scope,manEditDataService,$location){
                $scope.obj={};
                $scope.confirm=function(){
                    //console.log($scope.obj);
                    manEditDataService.postRequest("./php/ceshi.php",$.param($scope.obj));
                    $scope.$on("postComplete",function(){
                        console.log(manEditDataService.obj.data);
                        $location.path("/homePage");
                        pageStudent();
                    })
                    
                }
                $scope.quxiao=function(){
                    $location.path("/homePage");
                }
            }])
})();