(function(){
    angular.module("homePageCtrlModule",[])
        .controller("homePageCtrl",["$scope","manDataService","manEditDataService","$http","$location",
            function($scope,manDataService,manEditDataService,$http,$location){
                //manDataService.requestManData("man.php");
                //$scope.$on("requestComplete",function(){
                //     //console.log(manDataService.getManData.data);
                //    // 让数据显示出来
                //    $scope.manList=manDataService.getManData.data;
                //})
        //删除功能
                    $scope.deleteBtn=function(manId){
                        console.log(manId);  //值
                        del_sure();
                        function del_sure(){
                            var gnl=confirm("确定要删除吗?");
                            if (gnl){
                                manDataService.requestManData("delete.php", {id:manId});
                                //重新显示数据
                                manDataService.requestManData("man.php");
                                $scope.$on("requestComplete",function(){
                                    //console.log(manDataService.getManData);
                                    $scope.manList=manDataService.getManData.data;
                                    pageStudent();
                                })
                            }
                        }
                    }

        //修改功能
                    $scope.editBtn=function(man){
                        $scope.charge="修改";
                        //console.log(man);
                        input(man.name,man.age,man.address,man.phone,man.tips);
                        $scope.saveEditBtn=function(){
                            //序列化
                            var tt = $("#ll").serialize()+"&id="+man.id;
                            var tt=decodeURIComponent(tt,true);
                            console.log(tt);
                            manEditDataService.postRequest("php/edit.php",tt);
                            $scope.$on("postComplete",function(){
                                    console.log(manEditDataService.obj.data);
                                //重新显示数据
                                manDataService.requestManData("man.php");
                                $scope.$on("requestComplete",function(){
                                    console.log(manDataService.getManData.data);
                                    // 让数据显示出来
                                    $scope.manList=manDataService.getManData.data;
                                    pageStudent();
                                })
                            })
                        }
                    };

                function input(name,age,address,phone,tips){
                    $("#inputName").val(name);
                    $("#inputAge").val(age);
                    $("#inputAddress").val(address);
                    $("#inputPhone").val(phone);
                    $("#inputTips").val(tips);
                }

        //添加功能
                $scope.addBtn=function(){
                    $scope.charge="添加";
                };
                $scope.obj={};
                $scope.saveAddBtn=function(){
                    $.ajax({
                        url: "./php/add.php",
                        data : $scope.obj,
                        method : "post",
                        success : function(response){
                            //console.log(response)
                            if(response>0){
                                alert("添加成功");
                                manDataService.requestManData("man.php");
                                $scope.$on("requestComplete",function(){
                                    // 让数据显示出来
                                    $scope.manList=manDataService.getManData.data;
                                })
                            }else{
                                alert("添加失败");
                                console.log(response);
                            }
                        },
                        error : function(error){
                            console.log(error)
                        }
                    })
                }

                $scope.tianjia=function() {
                    $location.path("/addPage");
                }
        //分页

                // 下一页
                var start=0;
                var length=10;
                var totals=0;
                //请求算出总长度
                pageCount();
                function pageCount(){
                    $http.get("php/page.php",
                        {params:{a:"count"}})
                        .success(function(data){
                            //console.log(data);
                            totals=data;
                        })
                        .error(function(error){
                            console.log(error);
                        })
                }


                pageStudent();
                function pageStudent(){
                    $http.get("php/page.php",
                        {params:{a:"query",start:start,length:length}})
                        .success(function(response){
                            $scope.manList=response;

                        }).error(function(error){
                        console.log(error);
                    });
                }


                //下一页
                var start=0;
               $scope.next=function(){
                    start+=10;
                    console.log(start);
                    if(start>=totals){
                        start-=10;
                        alert("已经是最后一页了!");
                        return false;
                    }
                   pageStudent();
                    return false;
                }

                // 上一页
                $scope.prev=function(){
                    start-=10;
                    if(start<0){
                        start=10;
                        alert("已经是第一页了!");
                        return false;
                    }
                    pageStudent();
                    return false;
                }

            }])

})();