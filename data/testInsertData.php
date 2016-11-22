<?php
	require "../extends/Model.class.php";
	require "../extends/config.php";

	function testInsert(){
	$model=new Model('s_information');
	for($i=0;$i<50;$i++){
		$student['name']='name'.$i;
		$student['age']=20;
		$student['address']='address'.$i;
		$student['phone']=10086;
		$student['tips']='very good'.$i;
		$result=$model->add($student);
		echo $result;
		}
	}

	// testInsert();
