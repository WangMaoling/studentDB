/**
 * Created by Administrator on 2016-10-16.
 */
(function(){
    angular.module("manEditDataModule",[])
        .config(function($httpProvider){
           //模仿ajax发送模拟表单的请求
            $httpProvider.defaults.headers.post['Content-Type'] =
                "application/x-www-form-urlencoded";
        })
        .service("manEditDataService",["$http","$rootScope",
            function($http,$rootScope){
                this.obj = {};
                var self = this;
                this.postRequest=function(url,data){
                    $http.post(url,data)
                        .success(function(response){
                            console.log(response);
                            if(response.code==0) {
                                //console.log(response);
                                self.obj.data = response.data;

                                $rootScope.$broadcast("postComplete");
                            }else {
                                $rootScope.$broadcast("postFail",response.data);
                            }
                        })
                        .error(function(error){
                            console.log(error);
                            $rootScope.$broadcast("postFail","服务器连接错误");
                        })
                }
        }])
})();



















