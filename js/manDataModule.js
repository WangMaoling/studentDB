(function(){
    angular.module("manDataModule",[])
        .provider("manDataService",function(){
            // $resource和$http类似用来发请求
            this.$get=["$resource","SEVERURL","$rootScope",
            function($resource,SEVERURL,$rootScope){
                var result={};
                return {
                            getManData:result,
                            requestManData:function(url,manId){
                            var Resource=$resource(SEVERURL+url);
                            //get请求
                            Resource.get(manId,function(response){
                            //console.log(response);
                            if(response.code==0){
                                result.data=response.data;
                                $rootScope.$broadcast("requestComplete");
                            }else{
                                $rootScope.$broadcast("requestError",response.data);
                            }
                            
                           },function(error){
                            console.log(error);
                            $rootScope.$broadcast("requestError","服务器连接错误");
                           })

                    }     
                }
            }]
        })
})()