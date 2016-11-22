<?php
    require "./extends/Model.class.php";
    require "./extends/config.php";
    header('Access-Control-Allow-Origin:*');
    
    $model=new Model("s_information");

//删除
    //先判断id是否存在
    // if($_GET['id']){
       $deleteResult= $model->delete($_GET['id']);
       // if($deleteResult>0){
            // $result['code'] = 0;
            // $result['data'] = "删除成功";   
            // echo json_encode($result);
            //如果删除成功，删除后重新请求数据库
        //     $selectResult = $model->select();
        //     if($selectResult){
        //         foreach ($selectResult as $key => $value) {
        //             $tempman['id'] = $value['id'];
        //             $tempman['name'] = $value['name'];
        //             $tempman['age'] = $value['age'];
        //             $tempman['address'] = $value['address'];
        //             $tempman['phone'] = $value['phone'];
        //             $tempman['tips'] = $value['tips'];
        //             $resultArray[] = $tempman;
        //         }
        //         $result['code'] = 0;
        //         $result['data'] = $resultArray;
        //     }else {
        //         $result['code'] = 1;
        //         $result['data'] = 'no data';
        //     }
            
        //     echo json_encode($result);
        // }else {
        //     $result['code'] = 2;
        //     $result['data'] = '删除失败';
        //     echo json_encode($result);
        // }
    // }else{
    //     echo "no Id";
    // }

