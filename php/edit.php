<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers:Origin, X-Requested-With, Content-Type, Accept');
    
    // var_dump($_POST);
    //获取applicatin-json的数据类型  然后解析对象 插入到数据库中使用
    //获取JSON的输入流对象
    // 判断Header头是 appliction-json 对象类型 才执行下面的代码
    // $array = getallheaders();
    // $conteyType = $array['Content-Type'];
    // MIMEtype  类型
    // echo $conteyType;
    // if(strtolower($conteyType) == "application/json;charset=utf-8") {
    //    $json = file_get_contents('php://input');
    //    $obj = json_decode($json,true);
       // var_dump($obj);
       //将数据插入到数据库中
       require "./extends/Model.class.php";
       require "./extends/config.php";
       $model=new Model("s_information");

       $result=$model->save($_POST);
        // $detailResult = $model->add($obj);
    
        if($result>0){
            $returnResult['code'] = 0;
            $returnResult['data'] = "修改成功";

            echo json_encode($returnResult);
        }else{
            $returnResult['code'] = 1;
            $returnResult['data'] = "修改失败";
            echo json_encode($returnResult);
        }

   // }
    
