<?php
    require "./extends/Model.class.php";
    require "./extends/config.php";
    header('Access-Control-Allow-Origin:*');
    $manModel = new Model("s_information");
    $selectResult = $manModel->select();
    //var_dump($result);
    if($selectResult){
        foreach ($selectResult as $key => $value) {
            $tempman['id'] = $value['id'];
            $tempman['name'] = $value['name'];
            $tempman['age'] = $value['age'];
            $tempman['address'] = $value['address'];
            $tempman['phone'] = $value['phone'];
            $tempman['tips'] = $value['tips'];
            $resultArray[] = $tempman;
        }
        $result['code'] = 0;
        $result['data'] = $resultArray;
    }else {
        $result['code'] = 1;
        $result['data'] = 'no data';
    }


    echo json_encode($result);







