<?php
    require "./extends/Model.class.php";
    require "./extends/config.php";

    // var_dump($_GET);
    $a=empty($_GET['a'])?"query":$_GET['a'];
    $model=new Model("s_information");

    switch ($a) {
        case "query":
            $result=$model->limit($_GET['start'],$_GET['length'])->select();
            echo json_encode($result);
            break;

        case "count":
            $countresult=$model->query("select count(*) from s_information");
            echo $countresult[0]['count(*)'];
            break;

        default:
            # code...
            break;
    }
    
  