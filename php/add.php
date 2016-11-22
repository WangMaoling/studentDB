
<?php
    header('Access-Control-Allow-Origin: *');
 

    //将数据插入到数据库中
    require "./extends/Model.class.php";
    require "./extends/config.php";
  
    $model=new Model("s_information");

    $addResult=$model->add($_POST);
    echo json_encode($addResult);

  




